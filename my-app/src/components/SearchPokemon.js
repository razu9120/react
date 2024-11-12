import '../App.css';

const SearchPokemon = ({filterName, setFilterName}) => {

    return (
      <>
        <input type="text" value={filterName} placeholder="Search..." className="search-input" 
            onChange={(e) => setFilterName(e.target.value)} />
      </>
    );
  };
  
  export default SearchPokemon;