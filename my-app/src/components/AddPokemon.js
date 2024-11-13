import React, { useState } from 'react';

import '../App.css';

const AddPokemon = ({datas, addData}) => {

    const URL = 'http://localhost:8080/pokemon/';
    const [pokemon, setPokemon] = useState('');

    const getPokemonFromApi = async() => {
        try {
            const body = {
                name: pokemon
            };
            const response = await fetch(URL + 'post', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) 
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; // 呼び出し元でエラーハンドリングを行うために再度エラーを投げます
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (pokemon.trim() === '') return;
        if (!!datas.find(d => d.name === pokemon)) {
            setPokemon('');
            return;
        }
        if (!!datas.find(d => d.id === pokemon)) {
            setPokemon('');
            return;
        }
        try {
            const data = await getPokemonFromApi(); // ここで `await` を追加
            addData(data); // 取得したデータを `addData` に渡す
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
        setPokemon('');
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={pokemon} placeholder="Add..." onChange={(e) => setPokemon(e.target.value)} />
            <button>Add</button>
        </form>
      </>
    );
  };
  
  export default AddPokemon;