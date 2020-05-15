import React from 'react';
import './index.scss';
import Left from './left/index.js'
import Main from './main/index.js'
import Navi from './navigator/index'
function Channels(props) {
    return (
        <div className="container-main">
            <div className="left">
                <Left />
            </div>
            <div className="main">
                <Navi />
                <div className="cards"><Main /></div>
            </div>
        </div>
    )
}
export default Channels