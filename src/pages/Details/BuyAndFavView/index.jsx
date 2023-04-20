import React from 'react';
import './style.less'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as favoriteActions from "../../../redux/actions/favorite";

const BuyAndFavView = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFavorite=() => {
        if (props.user.username) {
            /**
             * Determine whether the user favorites
             * 1. Favorite if users unfavorite
             * 2. Unfavorite if users favorite
             */
            if (isFavorite()) {
                // Favorited
                dispatch(favoriteActions.unfavorite(props.itemId))
            } else {
                // Unfavorite
                dispatch(favoriteActions.favorite(props.itemId))
            }
        } else {
            // Go to login page
            navigate('/login')
            
        }
    }

    /**
     * Function isFavorite is for judging user favorites: return boolean
     * True: Favorited
     * False: unfavorite
     */
    function isFavorite() {
        let { favorites, itemId } = props
        return favorites.some(itemId => { return itemId })
    }

    return (
        <div className="buy-fav-container clear-fix">
            <div className="item-container float-left">
                {
                    isFavorite() ?
                    <button className="selected o" onClick={handleFavorite} >Have favorited</button>
                    :<button className="selected" onClick={handleFavorite} >Favorite</button>
                }
            </div>
            <div className="item-container float-right">
                <button className="selected">Buy</button>
            </div>
        </div>
    );
}

export default BuyAndFavView;
