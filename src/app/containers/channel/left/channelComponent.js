import React, { Component } from 'react'
import './channelComponent.scss'
export default class channelComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: props.channel || {},
            users: props.users || []
        }
    }
    componentDidMount() {
    }
    render() {
        const { channel } = this.state
        const { type, users } = this.props
        const active = type === 'active' || (users && users.length > 0)

        return (
            <div className="wrap-component-channel">
                {
                    <div className={`card ${active && 'active'}`}>
                        <div className="title">
                            <div className="desc">{channel.name}</div>
                            {active ? <div className="iconfont iconGroup296"></div> :
                                <><div className="iconfont iconchannellist_people1"></div>
                                    <div className="count number">{channel.memberNum}</div></>
                            }
                        </div>
                        <div className="creater">
                            <div className="username"> Moyan</div>
                            <div className="point">.</div>
                            <div className="cratedon">刚刚更新</div>
                        </div>
                        {
                            active && <div className="users">
                                <img className="avatar" alt="avatar" src={require('@/static/avatar.png')} />
                            </div>
                        }
                    </div>
                }
                {/* {type=== 'normal' &&
                    <div className="card">
                        <div className="title">
                            <div className="desc">{channel.name}</div>
                            <div className="iconfont iconchannellist_people1"></div>
                            <div className="count number">16</div>
                        </div>
                        <div className="creater">
                            <div className="username"> Moyan</div>
                            <div className="point">.</div>
                            <div className="cratedon">刚刚更新</div>
                        </div>
                    </div>
                }
                {type === 'outside' &&
                    <div className="card">
                        <div className="title">
                            <div className="desc">{channel.name}</div>
                            <div className="iconfont iconGroup5951"></div>
                        </div>
                        <div className="creater">
                            <div className="username"> Moyan</div>
                            <div className="point">.</div>
                            <div className="cratedon">刚刚更新</div>
                        </div>
                    </div>
                }
                {type === 'folder' &&
                    <div className="card my">
                        <div className="title">
                            <div className="desc">未加入的频道</div>
                            <div className="count number">16</div>
                        </div>
                        <div className="tags">
                            <div className="tag">自在面包</div>
                            <div className="tag">智能猫窝</div>
                            <div className="tag">智能猫窝</div>
                        </div>
                    </div>
                } */}
            </div>
        )
    }
}
