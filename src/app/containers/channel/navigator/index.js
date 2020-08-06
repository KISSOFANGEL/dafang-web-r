import './index.scss';
import React, { Component } from 'react';

class Navi extends Component {
    constructor(props) {
        super(props)
        // this.myRef = React.createRef()
        this.state = {
            curChannelId: -1,
            panels: [],
            activedPanel: 0,
            addPanel: false
        }
    }
    componentDidMount() {
        React.$store.subscribe(this.handleChange)
        
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
        this.setState({ addPanel: !this.state.addPanel })
        this.props.parent.changeAddPanel()
    
    }
    creatPanel = async (panelName_,order) => {
        let params = { name: panelName_, type: Number(1), order: order }
        let _curChannel = React.$store.getState().channel.activedChannel
        await React.$request.post(`/dafang/panel/create/` + _curChannel.channel.id, params)
        
    }
    handleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
            this.creatPanel(e.target.value, this.state.panels.length)
            this.changeAddPanel()
        }
    }
    render() {
        const { panels, activedPanel, addPanel} = this.state
        return (
            <div className="wrap-navigator">
                <div className="left">
                    {
                        panels.map((panel, index) =>
                            <div className={`cursor item ${index === activedPanel && 'active'}`} key={index} onClick={e => this.setActivedPanel(index)}>{panel.name}</div>
                        )
                    }
                    <div className="add-panel-div" style={{ display: addPanel ? 'block' : 'none' }} key='add-panel' > 
                        <input type="text"  className="add-panel-input" ref={this.myRef} placeholder="未命名面板" onKeyPress={this.handleEnterKey}></input>
                    </div>
                    <div className="iconfont iconaddboard pointer" onClick={(e) => this.changeAddPanel(e)}></div>
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

