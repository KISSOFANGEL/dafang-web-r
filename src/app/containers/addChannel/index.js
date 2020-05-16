import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
import Switch from '@/plugin/components/switch/index'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channelName: "",
            placeholder: "给频道取个名字",
            publicChannelDesc: "空间内所有成员可查看并自由加入该频道",
            privateChannelDesc: "仅被邀请人可见"

        }
        this.channelNameChange = this.channelNameChange.bind(this);
    }
    channelNameChange(e) {
        e.preventDefault()
        this.setState({ channelName: e.target.value })
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
                        <input type="text" name="channelName" value={this.state.channelName} className="input-channel-name" autoFocus placeholder={this.state.placeholder} onChange={this.channelNameChange} autoComplete="off"></input>
                        {this.state.channelName &&
                            <div className="next">
                                <div className="iconfont iconarrow_right"></div>
                            </div>
                        }
                    </div>
                    <div className="msg">
                        <div className="switch">
                            <Switch></Switch>
                        </div>
                        <div className="desc">
                            {this.state.publicChannelDesc}
                        </div>
                    </div>
                    {this.state.channelName &&
                        <div className="suggestion">
                            <div className="desc">
                                您是否想加入以下公开频道
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

