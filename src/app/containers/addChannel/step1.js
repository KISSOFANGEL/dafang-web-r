import React, { Component } from 'react'
import Switch from '&/switch/index'
import Channel from '../channel/left/channelComponent'
import './step1.scss'
export default class addChannelS1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channelName: "",
            placeholder: "给频道取个名字",
            publicChannelDesc: "空间内所有成员可查看并自由加入该频道",
            privateChannelDesc: "仅被邀请人可见",
            isPrivate: false
        }
        this.channelNameChange = this.channelNameChange.bind(this);
    }

    channelNameChange(e) {
        e.preventDefault()
        this.setState({ channelName: e.target.value })
    }
    setChannelType = (v) => {
        this.setState({ isPrivate: v })
    }
    render() {
        return (
            <div className="wrap-addchannel-step1-main">
                    <div className="input">
                        <div className="preicon">{this.state.isPrivate && <div className="iconfont iconcreatechannel_secret-copy"></div>}</div>
                        <input type="text" name="channelName" value={this.state.channelName} className="input-channel-name" autoFocus placeholder={this.state.placeholder} onChange={this.channelNameChange} autoComplete="off"></input>
                        {this.state.channelName &&
                            <div className="next pointer" onClick={this.props.nextStep}>
                                <div className="iconfont iconarrow_right"></div>
                            </div>
                        }
                    </div>
                    <div className="msg">
                        <div className="switch">
                            <Switch cb={this.setChannelType}></Switch>
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
                            <div className={`channels add-channels-list ${this.state.isScrolling ? 'isScrolling' : null}`}>
                                <div className="channel">
                                    <Channel type={'active'}></Channel>
                                </div>
                                <div className="channel">
                                    <Channel type={'active'}></Channel>
                                </div>
                                <div className="channel">
                                    <Channel type={'active'}></Channel>
                                </div>
                                <div className="channel">
                                    <Channel type={'active'}></Channel>
                                </div>

                            </div>
                        </div>
                    }
                </div>)
    }
}
