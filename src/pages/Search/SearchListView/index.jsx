import React from 'react';
import Item from './Item';

const SearchListView = (props) => {
    return (
        <div>
            {
                props.search.map((data,index) => {
                    return <Item key={index} data={data} />
                })
            }
        </div>
    );
}

export default SearchListView;
