import React from 'react';
import BuyAndFavView from '../BuyAndFavView';
import './style.less'
import { useSelector } from 'react-redux';

const BuyAndFav = (props) => {

    const login = useSelector(state => state.login)
    const favorites = useSelector(state => state.favorite)
    
    return (
        <div className="buy-and-fav">
            <BuyAndFavView itemId={props.itemId} user={login.user} favorites={favorites} />
        </div>
    );
}

export default BuyAndFav;
