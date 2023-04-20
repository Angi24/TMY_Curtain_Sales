import React, { useEffect, useState, useRef } from 'react';
import './style.less'

const PullupLoading = (props) => {

    // Get div tag
    const more = useRef()
    const [loadTop, setLoadTop] = useState(10000) // Prevent triggering pull-up loading

    useEffect(() => {

        // Get view height
        let winHeight = document.documentElement.clientHeight

        // Set timer
        let timer = null
        
        function handleScroll() {
            if (more.current) {
                setLoadTop(more.current.getBoundingClientRect().top)
                if (timer) {
                    // Reset timer
                    clearTimeout(timer)
                } else {
                    // Debounce: 300ms
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                            console.log('load more data')
                            props.onPullupLoading()
                        }
                    }, 100)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            // When memory leak, close event
            window.removeEventListener('scroll', handleScroll)

            //  When memory leak, clear timer
            // clearTimeout(timer)
        }
        
    },[loadTop])

    return (
        <div className="load" ref={more}>
            Load more
        </div>
    );
}

export default PullupLoading;
