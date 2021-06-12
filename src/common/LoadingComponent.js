import React from 'react';
import {Spinner} from "react-bootstrap";



const LoadingMessage = () => {
    return (
        <div>
            <Spinner animation="border" variant="primary" size="sm" /> <span>Loading...</span>
        </div>
    )
}

export default LoadingMessage