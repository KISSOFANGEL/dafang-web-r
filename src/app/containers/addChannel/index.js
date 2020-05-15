import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: "给频道取个名字",
            publicChannelDesc: "空间内所有成员可查看并自由加入该频道",
            privateChannelDesc: "仅被邀请人可见"

        }
    }
    render() {
        return (
            <div className="wrap-add-channel">
                <div className="close">
                    <Link to="/">
                        <div className="iconfont iconclose"></div>
                    </Link>
                </div>
                <div className="main">
                    <div className="input">
                        <input type="text" name="channelName" className="input-channel-name" autoFocus placeholder={this.state.placeholder}></input>
                    </div>
                    <div className="msg">
                        <div className="desc">
                            {this.state.publicChannelDesc}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

