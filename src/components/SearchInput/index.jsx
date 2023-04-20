import React, { useState, useEffect } from 'react';
import './style.less'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as searchAction from '../../redux/actions/search';
import { useParams } from 'react-router-dom';

const SearchInput = () => {

    const navigate = useNavigate()
    const [keywords, setKeywords] = useState('')
    const dispatch = useDispatch()
    const params = useParams()
    const reduxKeywords = useSelector(state => state.search)

    function handleKeyUp(event) {
        // console.log('@',keywords)
        if (keywords.length > 0) {
            if (event.keyCode === 13) {
                navigate(`/search/${keywords}`)
                dispatch(searchAction.updateSearch(keywords))
            }
        }
    }

    useEffect(() => {
        // Check if keywords exist
        if (params.keywords) {
            dispatch(searchAction.updateSearch(params.keywords))
        } else {
            dispatch(searchAction.updateSearch(''))
        }
        setKeywords(reduxKeywords.searchContent)
    }, [reduxKeywords.searchContent, params.keywords])

    function handleChange(event) {
        setKeywords(event.target.value)
    }

    return (
        <input
            className="search-input"
            type="text"
            onKeyUp={handleKeyUp}
            value={keywords}
            onChange={handleChange}
        />
    );
}

export default SearchInput;
