import React, { Component } from 'react'
import './login.scss'
import LoginByPassword from './loginbypassword'
export default class login extends Component {
    render() {
        return (
           <div className="wrap-login">
                <div className="slogan">次世代团队协作工具</div>
                <div className="loginbtn">登录大方</div>
                <LoginByPassword></LoginByPassword>
           </div>
        )
    }
}
