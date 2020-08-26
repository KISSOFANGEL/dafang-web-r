import React, { Component } from 'react';
import './loginbypassword.scss'
import { withRouter } from "react-router-dom";

class loginbypassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    changeName = (e) => {
        this.setState({ username: e.target.value })
    }
    changePass = (e) => {
        this.setState({ password: e.target.value })
    }
    login = async () => {
        let result = await React.$request.get("/dafang/user/login", { pwd: this.state.password, email: this.state.username })
        if (result.code === 1) {
            React.db.ls.set('userToken', result.data)
            React.$store.dispatch(React.$actions.setAddSpace(Number(1)))
            this.props.history.push("/");
        }
    }
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
            this.login()
        }
    }
    render() {
        const { username, password } = this.state;
        return (
            <div className="wrap-login-password">
                <input autoFocus type="text" className="name" value={username} onChange={this.changeName} name="username" autoComplete="off" placeholder="账号" />
                <div className="password">
                    <input type="password" name="password" onKeyPress={this.handleEnterKey} value={password} onChange={this.changePass} autoComplete="off" placeholder="密码" />
                    {username && password && <div className="next-btn pointer" onClick={this.login}>
                        <div className="iconfont iconarrow_right"></div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default withRouter(loginbypassword);
