import '../App.css';

const PokemonRow = ({datas, clearDatas, filterName, filterType}) => {

    const rows = [];

    datas.forEach(data => {
        if (data.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
            return;
        }
        if (data.types.toLowerCase().indexOf(filterType.toLowerCase()) === -1) {
            return;
        }
        rows.push(<li key={data.name}>name: {data.name} types: {data.types}</li>)
    })

    return (
      <>
        <div className="data-area">
            <button onClick={clearDatas}>Clear Datas</button>
            <ul className="data-list">
                {rows}
            </ul>
        </div>
      </>
    );
  };
  
  export default PokemonRow;