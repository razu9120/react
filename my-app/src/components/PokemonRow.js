import ReactPaginate from 'react-paginate';

import '../App.css';

const PokemonRow = ({datas, clearDatas, filterName, filterType, currentPage, setCurrentPage}) => {

    const rows = [];
    const itemsPerPage = 10;

    datas.forEach(data => {
        if (data.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
            return;
        }
        if (data.types.toLowerCase().indexOf(filterType.toLowerCase()) === -1) {
            return;
        }
        rows.push(<li key={data.name}>
            <span class="cover1"><img src={data.imageUrl} alt={data.name} /></span>
            id: {data.id} name: {data.name} types: {data.types}</li>)
    })

    // 現在のページに基づいて表示するアイテムを計算
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    // アイテムを分割
    const offset = currentPage * itemsPerPage;
    const currentItems = rows.slice(offset, offset + itemsPerPage);

    return (
      <>
        <button onClick={clearDatas}>Clear Datas</button>
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
