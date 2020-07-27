import React, { Component } from 'react';
import './step1.scss';

export default class AddSpaceStep1 extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="wrap-step1">
                <div className="div-msg1">
                    <p>创建团队空间</p>
                </div>
                <div className="dev-msg2">
                    <p>一切奥妙，始于方寸</p>
                </div>
                <button className='start-button' onClick={this.props.nextStep}>
                    开始
                </button>

            </div>
           
        )
    }
}