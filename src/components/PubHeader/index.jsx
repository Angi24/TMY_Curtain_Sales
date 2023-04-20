import React from 'react';
import './style.less'
import {useNavigate} from 'react-router-dom';

const PubHeader = (props) => {
    const navigate = useNavigate()

    function backHandle() {
        navigate(-1)
        // window.history.back()
    }

    return (
        <div id='common-header' onClick={backHandle}>
            <span className="back-icon">
                <i className="icon-chevron-left">Back</i>
            </span>
            <h1>{props.title}</h1>
        </div>
    );
}

export default PubHeader;
