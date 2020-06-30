import React from 'react';
import './channels.scss'
import { Link } from 'react-router-dom'
import Channel from './channelComponent'
import { connect } from 'react-redux';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            activedChannelInfo: {}
        }
    }
    componentDidMount() {
        this.getChannels()
    }
    getChannels = async () => {
        let spaceid = React.db.ls.get("activeSpace") ? React.db.ls.get("activeSpace").space.id : -1
        let res = await React.$request.get(`/dafang/channel/list/${spaceid}`)
        this.setState({ channels: res.data.singleList })
        this.setActiveChannel(this.state.channels[0])
    }
    setActiveChannel = async (channel) => {
        let res = await React.$request.get(`/dafang/channel/info/${channel.id}`)
        this.setState({ activedChannelInfo: res.data })
        this.props.dispatch(React.$actions.setActivedChannel(res.data))
    }
    render() {
        const { channels, activedChannelInfo, channel } = this.state
        return (
            <div className="wrap-cards">
                <Link to="/channel/add">
                    <div className="add-channel">
                        <div className="btn" >
                            <div className="iconfont iconaddboard"></div>
                            <div className="desc"> 新建频道</div>
                        </div>

                    </div>
                </Link>
                {
                    activedChannelInfo.channel &&
                    channels.map((channel, index) =>
                        <div onClick={e => this.setActiveChannel(channel)} key={index}>
                            <Channel type={channel.id === activedChannelInfo.channel.id ? 'active' : 'normal'} channel={channel} users={channel.id === activedChannelInfo.channel.id ? activedChannelInfo.userList : []}></Channel>
                        </div>)
                }

                {/* <Channel type={'normal'}></Channel>
                <Channel type={'outside'}></Channel>
                <Channel type={'folder'}></Channel> */}
            </div>

        )
    }
}

export default connect()(Channels)