import React, { useState } from 'react';

import '../App.css';

const AddPokemon = ({datas, addData}) => {

    const URL = 'http://localhost:8080/pokemon/';
    const [pokemon, setPokemon] = useState('');
    const [error, setError] = useState('');

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
            data.checkFlg = false;
            return data;
        } catch (error) {
            setError('APIの処理が失敗しました。');
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (pokemon.trim() === '') {
            setError('名前またはidを入力して下さい。');
            return;
        };
        if (!!datas.find(d => d.name === pokemon)) {
            setPokemon('');
            setError('すでに登録されています。');
            return;
        }
        if (!!datas.find(d => d.id === pokemon)) {
            setPokemon('');
            setError('すでに登録されています。');
            return;
        }
        try {
            const data = await getPokemonFromApi();
            if (data.name === 'Unknown') {
                setError('ポケモンが存在しません。');
                return;
            }
            addData(data);
        } catch (error) {
            setError('APIの処理が失敗しました。');
        }
        setPokemon('');
    };

    return (
      <>
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input type="text" value={pokemon} placeholder="Add..." onChange={(e) => setPokemon(e.target.value)} />
            <button>Add</button>
        </form>
      </>
    );
  };
  
  export default AddPokemon;