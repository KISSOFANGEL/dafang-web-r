import React, { Component } from 'react';
import './loginbypassword.scss'
class loginbypassword extends Component {
    render() {
        return (
            <div className="wrap-login-password">
                <input type="text" className="name" name="username" autoComplete="off" placeholder="账号"/>
                <input type="password" className="password" name="password" autoComplete="off" placeholder="密码"/>
            </div>
        );
    }
}

export default loginbypassword;
