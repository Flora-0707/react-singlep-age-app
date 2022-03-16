import React, { useEffect } from 'react';

import './Loading.css';
  
function Loading({ timeout, timeoutCb }) {

    useEffect(() => {
        const timer = setTimeout(
            timeoutCb,
            timeout * 1000
        );
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loader" id="loader"></div>
    );
}

export default Loading;