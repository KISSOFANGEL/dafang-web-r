import React, { Component } from 'react';
import './index.scss';
import Left from './left/index.js'
import Main from './main/index.js'
import Navi from './navigator/index'

export default class Channels extends Component{
    render(){
        return (
            <div className="container-main">
                <div className="left">
                    <Left />
                </div>
                <div className="right">
                    <Navi parent={this} />
                    <div className="cards">
                        <Main />
                    </div>
                </div>
            </div>
        )
    }


}

