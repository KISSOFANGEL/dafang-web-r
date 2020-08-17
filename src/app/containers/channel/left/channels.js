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
            curSpaceId: -1,
            activedChannelInfo: {}
        }
    }
    componentDidMount() {
        React.$store.subscribe(this.getChannels)
        // this.getChannels()
    }
    getChannels = async () => {
        let _curSpace = React.$store.getState().space
        if (_curSpace && _curSpace.activedSpace.id !== this.state.curSpaceId) {
            let res = await React.$request.get(`/dafang/channel/list/${_curSpace.activedSpace.id}`)
            this.setState({ channels: res.data.singleList, curSpaceId: _curSpace.activedSpace.id })
            this.setActiveChannel(this.state.channels[0])
        }
    }
    setActiveChannel = async (channel) => {
        if (channel ){
            let res = await React.$request.get(`/dafang/channel/info/${channel.id}`)
            this.setState({ activedChannelInfo: res.data })
            React.$store.dispatch(React.$actions.setActivedChannel(res.data))
        }
       
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