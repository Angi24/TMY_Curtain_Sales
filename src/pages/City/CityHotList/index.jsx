import React from 'react';
import './style.less'

const CityHotList = (props) => {

    function CityHandle(cityName) {
        props.onEvent(cityName)
    }

    return (
        <div className="city-list-container">
            <h3>City Hot List</h3>
            <ul className="clear-fix">
                <li onClick={()=>CityHandle('Montreal')}><span>Montreal</span></li>
                <li onClick={()=>CityHandle('Toronto')}><span>Toronto</span></li>
            </ul>
        </div>
    );
}

export default CityHotList;
