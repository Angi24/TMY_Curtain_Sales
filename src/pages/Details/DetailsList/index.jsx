import React, { useState, useEffect } from 'react';
import DetailsView from '../DetailsView';
import api from '../../../api';

const DetailsList = (props) => {

    const [detailsData, setDetailsData] = useState({})
    
    useEffect(() => {
        api.details({
            itemId: props.itemId
        }).then(res => {
            if (res.status === 200) {
                setDetailsData(res.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            {
                detailsData.imgs ?
                <DetailsView {...detailsData} itemId={props.itemId} /> :
                <div>Waiting data...</div>
            }
        </div>
    );
}

export default DetailsList;
