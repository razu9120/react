import '../App.css';

const SearchPokemon = ({filterName, setFilterName, setCurrentPage}) => {

    const searchChange = (e) => {
        setFilterName(e.target.value);
        setCurrentPage(0);
    };

    return (
      <>
        <input type="text" value={filterName} placeholder="Search..." className="search-input" 
            onChange={searchChange} />
      </>
    );
  };
  
  export default SearchPokemon;