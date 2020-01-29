import React from 'react';
import loadingGif from '../images/loading-gear.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>Loading rooms...</h4>
            <img src={loadingGif} alt="page is loading" />
        </div>
    )
}
