import React from 'react';
import { CSVLink } from 'react-csv';

const PokemonCsvOutput = ({datas, filterName, filterType}) => {

    const csvDatas = datas.map(data => {
        const {imageUrl, ...rest} = data;
        return rest;
    });

    const rows = [];

    csvDatas.forEach(csvData => {
        if (csvData.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
            return;
        }
        if (csvData.types.toLowerCase().indexOf(filterType.toLowerCase()) === -1) {
            return;
        }
        rows.push(csvData)
    })

    const headers = [
        { label: 'ID', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Types', key: 'types' }
    ];

    return (
        <CSVLink
        data={rows}
        headers={headers}
        filename="pokemons.csv"
        className="btn btn-primary"
        target="_blank"
        >
            <button>Export CSV</button>
        </CSVLink>
    );
};

export default PokemonCsvOutput;
