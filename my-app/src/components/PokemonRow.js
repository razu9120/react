import ReactPaginate from 'react-paginate';

import '../App.css';

const PokemonRow = ({datas, setDatas, clearDatas, filterName, filterType, currentPage, setCurrentPage}) => {

    const rows = [];
    const itemsPerPage = 10;

    datas.forEach(data => {
        if (data.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
            return;
        }
        if (data.types.toLowerCase().indexOf(filterType.toLowerCase()) === -1) {
            return;
        }
        rows.push(<li key={data.id} className="listItem">
                    <button className="deleteButton" onClick={() => deleteData(data.id)}>Delete</button>
                    <span className="cover1">
                    <img src={data.imageUrl} alt={data.name} />
                    </span>
                    <span>id: {data.id}</span>
                    <span>name: {data.name}</span>
                    <span>types: {data.types}</span>
                </li>)
    })

    const sortDatas = (ascFlg) => {
        const sortedDatas = [...datas].sort((a, b) => ascFlg ? a.id - b.id : b.id - a.id);
        setDatas(sortedDatas);
    };

    const deleteData = (dataId) => {
        const result = datas.filter(data => data.id !== dataId);
        setDatas(result);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = rows.slice(offset, offset + itemsPerPage);

    return (
      <>
        <button className="clearButtun" onClick={clearDatas}>Clear Datas</button><br></br>
        <button className="ascButtun" onClick={() => sortDatas(true)}>Asc</button>
        <button className="descButtun" onClick={() => sortDatas(false)}>Desc</button>
        <ul className="data-list">
            {currentItems}
        </ul>

        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={Math.ceil(rows.length / 10)}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
      </>
    );
  };
  
  export default PokemonRow;
