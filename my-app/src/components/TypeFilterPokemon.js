import {types} from '../objects/types'

import '../App.css';

const TypeFilterPokemon = ({setFilterType}) => {

    return (
      <>
        <select name="types" id="type-select" className="type-select" 
            onChange={(e) => setFilterType(e.target.value)}>
            {types.map(option => 
                <option key={option.id} value={option.value}>{option.text}</option>)}
        </select>
      </>
    );
  };
  
  export default TypeFilterPokemon;