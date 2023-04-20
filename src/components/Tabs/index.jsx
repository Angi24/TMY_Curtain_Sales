import React, { useState } from 'react';
import './style.less'

const Tabs = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleTab = (index) => {
        setCurrentIndex(index)
    }

    const handleTitle = (index) => {
        return index === currentIndex ? 'Tap_title active' : 'Tap_title'
    }
    return (
        <div>
            <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children, (element, index) => {
                        return <li onClick={()=>handleTab(index)} className={handleTitle(index)} key={index}>{element.props.label}</li>
                    })
                }
            </ul>
            <div>
                {
                    React.Children.map(props.children, (element, index) => {
                        return (
                            <div>
                                {currentIndex === index ? element.props.children : ''}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Tabs;
