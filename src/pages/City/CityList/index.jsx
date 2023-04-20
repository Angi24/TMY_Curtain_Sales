import React, { useState } from 'react';
import CitySelect from 'react-city-select';
import CityData from '../../../data/city';
import './style.less'

const CityLists = (props) => {

    const [cityData, setCityData] = useState(CityData)

    function handleSelectCity(cityData) {
        // console.log(cityData)
        props.onEvent(cityData.name)
    }

    return (
        <div className="citylist">
            <h3>City List</h3>
            <CitySelect
            // Get data
                data={cityData}
            // Get callback
                onSelectItem={handleSelectCity}>
            </CitySelect>
        </div>
    );
}

export default CityLists;
