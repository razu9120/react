import {types} from '../objects/types';

import '../App.css';

const TypeFilterPokemon = ({setFilterType, setCurrentPage}) => {

    const selectChange = (e) => {
        setFilterType(e.target.value);
        setCurrentPage(0);
    };

    return (
      <>
        <select name="types" id="type-select" className="type-select" 
            onChange={selectChange}>
            {types.map(option => 
                <option key={option.id} value={option.value}>{option.text}</option>)}
        </select>
      </>
    );
  };
  
  export default TypeFilterPokemon;