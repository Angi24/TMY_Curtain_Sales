import React, { useState, useEffect } from 'react';
import api from '../../../../api'
import HomeProView from '../HomeProView';

const HomeProList = (props) => {

    const [newList, setNewList] = useState([])
    const [hotList, setHotList] = useState([])

    // Get new products data
    useEffect(() => {
        api.getHomeNewPro({
            cityName: props.cityName
        }).then(
            res => {
                if (res.data.status === 200) {
                    setNewList(res.data.result)
                }
            }
            )    
        }, [props.cityName])
        
    // Get hot products data
    useEffect(() => {
        api.getHomeHotPro({
            cityName:props.cityName
        }).then(
            res => {
                if (res.data.status === 200) {
                    setHotList(res.data.result)
                }
            }
        )    
    },[props.cityName])

    return (
        <div>
            {
                // Judging whether there is data
                newList.length > 0 ? <HomeProView data={newList} title={'New Recommendation'} /> : <div>Waiting data...</div>
            }
            {
                hotList.length > 0 ? <HomeProView data={hotList} title={'Hot Products'}/> : <div>Waiting data...</div>
            }
            
        </div>
    );
}

export default HomeProList;
