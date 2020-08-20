/* eslint-disable default-case */
import React from 'react';
import './channels.scss'
import { Link } from 'react-router-dom'
import Channel from './channelComponent'
import { connect } from 'react-redux';
import RightClickMenu from '../main/rightClickMenu'

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            curSpaceId: -1,
            clientX: 0,
            clientY: 0,
            showRightclickMenu: false,
            deleteChannelOrder:-1,
            activedChannelInfo: {}
        }
    }
    componentDidMount() {
        this.unsubscribe = React.$store.subscribe(this.getChannels)
        // this.getChannels()
        
    }

    componentWillUnmount() {
        this.unsubscribe()
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
    contextMenu = e => {
        e.preventDefault();
        e.stopPropagation()
        let { clientX, clientY } = e
        this.setState({ clientX, clientY })
        this.setState({ showRightclickMenu: !this.state.showRightclickMenu })
        this.setDeleteChannelId(e)
    }
    setDeleteChannelId = e => {
        let node = e.target
        let id = parseInt(node.id)
        while (isNaN(id)){
            node = node.parentElement;
            id = parseInt(node.id)
        }

        this.setState({ deleteChannelOrder: id})
    }

    
    toggleShowRightClickMenu = () => {
        this.setState({
            deleteChannelOrder: -1,
            showRightclickMenu: false
        })
    }
    // 右键菜单点击
    rcBack = (e) => {
        switch (e) {
            case 'del': this.delChannel()
        }

    }

    delChannel = async () => {

        let channelList = this.state.channels;
        let start = parseInt(this.state.deleteChannelOrder)
        let delChannel = channelList.splice(start, 1)
        let res = await React.$request.delete(`/dafang/channel/${delChannel[0].id}`)
        
        this.toggleShowRightClickMenu()
        this.setState({ channels: channelList })
        this.setActiveChannel(this.state.channels[0])
    }
    render() {
        const { channels, activedChannelInfo, clientX, clientY, showRightclickMenu } = this.state
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
                        <div id={index} onClick={e => this.setActiveChannel(channel)} key={index} onContextMenu={(e) => this.contextMenu(e)}>
                            <Channel type={channel.id === activedChannelInfo.channel.id ? 'active' : 'normal'} channel={channel} users={channel.id === activedChannelInfo.channel.id ? activedChannelInfo.userList : []}></Channel>
                        </div>)
                }
                <div className="right-click-menu" style={{ left: clientX + 5 + "px", top: clientY + 5 + "px" }}>
                    {<RightClickMenu show={showRightclickMenu} rcBack={e => this.rcBack(e)} toggleShow={() => { this.toggleShowRightClickMenu() }} ></RightClickMenu>}
                </div>
                {/* <Channel type={'normal'}></Channel>
                <Channel type={'outside'}></Channel>
                <Channel type={'folder'}></Channel> */}
            </div>

        )
    }
}

export default connect()(Channels)