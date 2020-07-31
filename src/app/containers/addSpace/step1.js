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
            <div className="wrap-add-space-step1">
                <div className="wrap-add-space-step1-title">
                    <p>创建团队空间</p>
                </div>
                <div className="wrap-add-space-step1-desc">
                    <p>一切奥妙，始于方寸</p>
                </div>
                <button className='dafang-button' onClick={this.props.nextStep}>
                    开始
                </button>

            </div>
           
        )
    }
}