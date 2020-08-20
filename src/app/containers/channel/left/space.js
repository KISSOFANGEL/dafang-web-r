/* eslint-disable default-case */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import RightClickMenu from '../main/rightClickMenu'
import './space.scss'

class space extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientX: 0,
            clientY: 0,
            showRightclickMenu: false,
            activeSpace: { space: React.$store.getState().space.activedSpace }

        }
    }


    setActiveSpace = (item) => {
        // React.db.ls.set("activeSpace", item)
        React.$store.dispatch(React.$actions.setActivedSpace(item.space))
        this.setState({ activeSpace: item })
    }

    loginOut = () => {
        React.db.ls.remove("activeSpace")
        React.db.ls.remove("userToken")
        this.props.history.push("/login");
    }

    contextMenu = e => {
        e.preventDefault();
        e.stopPropagation()
        let { clientX, clientY } = e
        this.setState({ clientX, clientY })
        this.setState({ showRightclickMenu: !this.state.showRightclickMenu })
        this.setDeleteSpaceId(e)
    }
    setDeleteSpaceId = e => {
        console.log("setDeleteSpaceId")
        // let node = e.target
        // let id = parseInt(node.id)
        // while (isNaN(id)) {
        //     node = node.parentElement;
        //     id = parseInt(node.id)
        // }

        // this.setState({ deleteChannelOrder: id })
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
            case 'del': this.delSpace()
        }

    }

    delSpace = async () => {
        console.log("delSpace")
        // let channelList = this.state.channels;
        // let start = parseInt(this.state.deleteChannelOrder)
        // let delChannel = channelList.splice(start, 1)
        // let res = await React.$request.delete(`/dafang/channel/${delChannel[0].id}`)

        // this.toggleShowRightClickMenu()
        // this.setState({ channels: channelList })
        // this.setActiveChannel(this.state.channels[0])
    }

    render() {
        const { spaces } = this.props
        const { activeSpace, clientX, clientY, showRightclickMenu  } = this.state
        return (
            <>
                <div className="wrap-logo-menu">
                    <div className="items">
                        {
                            spaces.map((item, index) =>
                                <div className="item cursor" key={index} onClick={() => this.setActiveSpace(item)} onContextMenu={(e) => this.contextMenu(e)}>
                                    <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                                    <div className="name">
                                        <div className="userName">{item.space.name}</div>
                                        <div className="desc">{item.space.type === 0 ? '个人空间' : item.userType === 1 ? '主理人' : '成员'}</div>
                                    </div>
                                    <div className={`iconfont ${activeSpace.space.id === item.space.id ? 'iconchecked' : ''}`}></div>
                                </div>
                            )
                        }
                        <div className="right-click-menu" style={{ left: (clientX - 30) + "px", top: (clientY - 100) + "px" }}>
                            {<RightClickMenu show={showRightclickMenu} rcBack={e => this.rcBack(e)} toggleShow={() => { this.toggleShowRightClickMenu() }} ></RightClickMenu>}
                        </div>
                    </div>
                    <div className="create">
                        <div className="create-space cursor" onClick={this.props.togglemodalVisible}>创建团队空间</div>
                        <div className="line"></div>
                    </div>
                    <div className="setting">
                        <div className="set">设置</div>
                        <div className="set">帮助</div>
                        <div className="set logoout cursor" onClick={this.loginOut}>退出登录</div>
                    </div>
                </div>

            </>
        );
    }
}

export default withRouter(space);