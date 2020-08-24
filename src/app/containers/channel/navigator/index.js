/* eslint-disable default-case */
import './index.scss';
import React, { Component } from 'react';
import RightClickMenu from '../main/rightClickMenu'

class Navi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curChannelId: -1,
            panels: [],
            activedPanel: 0,
            addPanel: false,
            panelName:'',
            clientX: 0,
            clientY: 0,
            showRightclickMenu: false,
            deletePanelOrder: -1
        }
    }
    componentDidMount() {
        this.unsubscribe = React.$store.subscribe(this.handleChange)
        
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    handleChange = async () => {
        let _curChannel = React.$store.getState().channel.activedChannel
        if (_curChannel && this.state.curChannelId !== _curChannel.channel.id) {
            this.setState({ panels: _curChannel.panelList, activedPanel: 0, curChannelId: _curChannel.channel.id })
            React.$store.dispatch(React.$actions.setActivedPanel(_curChannel.panelList[0]))

        }
    }
    setActivedPanel = (index) => {
        this.setState({ activedPanel: index })
    }

    changeAddPanel = () => {
        let addPanel = this.state.addPanel;
        this.setState({ addPanel: !addPanel })
        React.$store.dispatch(React.$actions.setAddPanel(!addPanel))
    
    }
    createPanel =  (panelName_,order) => {
        let params = { name: panelName_, type: Number(1), order: order }
        let _curChannel = React.$store.getState().channel.activedChannel
        let res =  React.$request.post(`/dafang/panel/create/` + _curChannel.channel.id, params)
        
        return res
    }
    getPanel =  (panelId) => {
        let res =  React.$request.get(`/dafang/panel/` + panelId)
      
        return res
    }

    changePanelName(e){
        this.setState({ panelName: e.target.value })
    }
    toggleShowRightClickMenu = () => {
        this.setState({
            showRightclickMenu: false,
            deletePanelOrder: -1
        })
    }
    //右键菜单
    contextMenu = e => {
        e.preventDefault();
        e.stopPropagation()
        let { clientX, clientY } = e
        this.setState({ clientX, clientY })
        this.setState({ showRightclickMenu: !this.state.showRightclickMenu })
        this.setState({ deletePanelOrder: e.target.id})
    }
    // 右键菜单点击
    rcBack = (e) => {
        switch (e) {
            case 'del': this.delPanel()
        }

    }

    delPanel = async () => {
       
        let panelList = this.state.panels;
        let start = parseInt(this.state.deletePanelOrder)
        let delPanel = panelList.splice(start,1)
        let res = await React.$request.delete(`/dafang/panel/${delPanel[0].id}`)
        this.setState({ panels: panelList })
        this.toggleShowRightClickMenu()
    }

    handleEnterKey = async (e) => {
      
        if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
            let res = await this.createPanel(e.target.value, this.state.panels.length)
           
            let panelData = await this.getPanel(res.data)
           
            
            this.changeAddPanel()
            let panelList = this.state.panels
            panelList.push(panelData.data)
            this.setState({ panels: panelList })
            this.setActivedPanel(panelList.length - 1)
            this.setState({ panelName: '' })
        }
    }
    render() {
        const { panels, activedPanel, addPanel, panelName, clientX, clientY, showRightclickMenu} = this.state
        return (
            <div className="wrap-navigator">
                <div className="left">
                    {
                        panels.map((panel, index) =>
                            <div className={`cursor item ${index === activedPanel && 'active'}`} id={index} key={index} onClick={e => this.setActivedPanel(index)} onContextMenu={(e) => this.contextMenu(e)}>{panel.name}
                                
                            </div>
                        )
                    }
                    {panels && panels.length > 0 && 
                    <>
                        <div className="add-panel-div" style={{ display: addPanel ? 'block' : 'none' }} key='add-panel' >
                            <input type="text" className="add-panel-input" name="panelName" value={panelName} autoFocus autoComplete="off" placeholder="未命名面板" onChange={(e) => this.changePanelName(e)} onKeyPress={(e) => this.handleEnterKey(e)}></input>
                        </div>
                        <div className="iconfont iconaddboard pointer" onClick={(e) => this.changeAddPanel(e)}></div>
                        <div className="right-click-menu" style={{ left: clientX + 5 + "px", top: clientY + 5 + "px" }}>
                            {<RightClickMenu show={showRightclickMenu} rcBack={e => this.rcBack(e)} toggleShow={() => { this.toggleShowRightClickMenu() }} ></RightClickMenu>}
                        </div>
                    </>
                    }
                   
                   
                </div>
                <div className="wrap-navigator-right">
                    <div className="iconfont iconchannel_search"></div>
                    <div className="iconfont iconFrame31"></div>
                    <div className="iconfont iconchannel_at"></div>
                    <div className="iconfont iconGroup597"></div>
                    <div className="iconfont iconchannel_setting"></div>
                    <div className="add">
                        <div className="iconfont iconaddboard " ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navi;

