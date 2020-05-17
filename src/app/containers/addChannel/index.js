import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
import Step1 from './step1'
import Step2 from './step2'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curStep: 1,
            channelName:''
        }
    }
    setStep = (channelName) => {
        this.setState({ curStep: 2,channelName})
    }
    goback = () => {
        this.setState({ curStep: 1 })
    }
    render() {
        const {curStep,channelName} = this.state
        return (
            <div className="wrap-add-channel">
                <div className="close">
                    {curStep === 1 && <Link to="/">
                        <div className="iconfont iconclose"></div>
                    </Link>}
                    {
                        curStep === 2 &&
                        <div className="iconfont iconclose" onClick={this.goback}></div>
                    }
                </div>
                <div style={{ display: curStep === 1 ? 'block' : 'none' }}>
                    <Step1 nextStep={v=>{this.setStep(v)}}></Step1>
                </div>
                <div style={{ display: curStep === 2 ? 'block' : 'none' }}>
                    <Step2 channelName = {channelName}></Step2>
                </div>
            </div>
        );
    }
}

