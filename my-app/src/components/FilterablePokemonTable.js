import React, { useState, useEffect } from 'react';

import AddPokemon from '../components/AddPokemon';
import SearchPokemon from '../components/SearchPokemon';
import TypeFilterPokemon from '../components/TypeFilterPokemon';
import PokemonRow from '../components/PokemonRow';

import '../App.css';

const FilterablePokemonTable = () => {

    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('datas')) || []);
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState('');

    useEffect(() => {
        localStorage.setItem('datas', JSON.stringify(datas));
    }, [datas]);

    const addData = (data) => {
        setDatas([...datas, data]);
    };

    const clearDatas = () => {
        setDatas([]);
    };

    return (
      <>
        <AddPokemon datas={datas} addData={addData} />
        <div className="search-area">
            <SearchPokemon filterName={filterName} setFilterName={setFilterName} />
            <TypeFilterPokemon setFilterType={setFilterType} />
        </div>
        <PokemonRow datas={datas} clearDatas={clearDatas} filterName={filterName}  filterType={filterType}/>
      </>
    );
  };
  
  export default FilterablePokemonTable;