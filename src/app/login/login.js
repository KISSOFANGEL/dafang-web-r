import React, { Component } from 'react'
import './login.scss'
import LoginByPassword from './loginbypassword'
export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginStep: 1
        }
    }
    nextStep = () => {
        this.setState({ loginStep: 2 })
    }
    render() {
        const { loginStep } = this.state
        return (
            <div className="wrap-login">
                {
                    loginStep === 1 &&
                    <div className="step1">
                        <div className="slogan">次世代团队协作工具</div>
                        <div className="loginbtn" onClick={this.nextStep}>登录大方</div>
                    </div>
                }
                {
                    loginStep === 2 &&
                    <LoginByPassword></LoginByPassword>
                }
            </div>
        )
    }
}
