import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsList from './DetailsList';

const Details = () => {

    const {itemId} = useParams()
    
    return (
        <div>
            <DetailsList itemId={itemId} />
        </div>
    );
}

export default Details;
