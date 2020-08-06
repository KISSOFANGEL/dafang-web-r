import React, { Component } from 'react';
import './index.scss';
import Left from './left/index.js'
import Main from './main/index.js'
import Navi from './navigator/index'
import AddPanel from '../addPanel/index'

export default class Channels extends Component{
    constructor(props){
        super(props)
        this.state = {
            addPanel: false
        }
    }

    changeAddPanel() {
        this.setState({ addPanel: !this.state.addPanel })
    }

    render(){
        const { addPanel } = this.state
        return (
            <div className="container-main">
                <div className="left">
                    <Left />
                </div>
                <div className="right">
                    <Navi parent={this} />
                    <div className="cards">
                        {addPanel ? <AddPanel /> : <Main />}
                    </div>
                </div>
            </div>
        )
    }


}

