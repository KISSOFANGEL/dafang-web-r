import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
import Step1 from './step1'
import Step2 from './step2'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            curStep:2
        }
    }
    setStep = ()=>{
        this.setState({curStep:2})
    }
    render() {
        return (
            <div className="wrap-add-channel">
                <div className="close">
                    <Link to="/">
                        <div className="iconfont iconclose"></div>
                    </Link>
                </div>
                <div  style={{display:this.state.curStep===1?'block':'none'}}>
                    <Step1 nextStep={this.setStep}></Step1>
                </div>
                <div style={{display:this.state.curStep===2?'block':'none'}}>
                    <Step2 ></Step2>
                </div>
            </div>
        );
    }
}

