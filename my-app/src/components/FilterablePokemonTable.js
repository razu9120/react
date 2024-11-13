import React, { useState, useEffect } from 'react';

import AddPokemon from '../components/AddPokemon';
import SearchPokemon from '../components/SearchPokemon';
import TypeFilterPokemon from '../components/TypeFilterPokemon';
import PokemonRow from '../components/PokemonRow';
import PokemonCsvOutput from '../components/PokemonCsvOutput';

import '../App.css';

const FilterablePokemonTable = () => {

    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('datas')) || []);
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

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
        <div className="add-area">
            <AddPokemon datas={datas} addData={addData} />
        </div>
        <div className="search-area">
            <SearchPokemon filterName={filterName} setFilterName={setFilterName} setCurrentPage={setCurrentPage} />
            <TypeFilterPokemon setFilterType={setFilterType} setCurrentPage={setCurrentPage} />
            <PokemonCsvOutput datas={datas} filterName={filterName} filterType={filterType} />
        </div>
        <div className="data-area">
            <PokemonRow datas={datas} clearDatas={clearDatas} filterName={filterName} 
                filterType={filterType} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
      </>
    );
  };
  
  export default FilterablePokemonTable;