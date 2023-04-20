import React, { useState, useEffect } from 'react';
import SearchListView from '../SearchListView';
import api from '../../../api';
import PullupLoading from '../../../components/PullupLoading';

const SearchList = (props) => {

    const [searchData, setSearchData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    function http() {
        api.search({
            search: props.search
        }).then(res => {
            if (res.data.status === 200) {
                // Merge data
                setSearchData([...searchData, ...res.data.result.data])
                setHasMore(res.data.result.hasMore)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        http()

        // When memory leak, reset data
        return () => {
            setSearchData([])
            setHasMore(false)
        }
    }, [props.search]);

    function handlePullupLoading() {
        http()
    }

    return (
        <div>
            {
                searchData.length > 0 ? <SearchListView search={searchData} /> : <div>Waiting data...</div>
            }
            {
                hasMore ? <PullupLoading onPullupLoading={handlePullupLoading} /> : <div>No data</div>
            }
        </div>
    );
}

export default SearchList;
