import React from 'react';
import './logo.scss'
function Logo(params) {
    return(
        <div className="wrap-logo">
        <img className="logo" src={require('@/static/logo.png')} alt="logo"/>
        <div className="userName">渣渣辉</div>
        <div className="iconfont iconheader_flash"></div>
        </div>
    )
}

export default Logo