import React from 'react';
import './logo.scss'
function Logo(params) {
    return(
        <div className="container">
        <img className="logo" src={require('@/static/logo.png')} alt="logo"/>
        <div className="userName">Moyan</div>
        </div>
    )
}

export default Logo