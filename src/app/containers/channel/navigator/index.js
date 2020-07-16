import './index.scss';
import React, { Component } from 'react';

class Navi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curChannelId: -1,
            panels: [],
            activedPanel: 0
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
    render() {
        const { panels, activedPanel } = this.state
        return (
            <div className="wrap-navigator">
                <div className="left">
                    {
                        panels.map((panel, index) =>
                            <div className={`cursor item ${index === activedPanel && 'active'}`} key={index} onClick={e => this.setActivedPanel(index)}>{panel.name}</div>
                        )
                    }
                    <div className="iconfont iconaddboard"></div>
                </div>
                <div className="right">
                    <div className="iconfont iconchannel_search"></div>
                    <div className="iconfont iconFrame31"></div>
                    <div className="iconfont iconchannel_at"></div>
                    <div className="iconfont iconGroup597"></div>
                    <div className="iconfont iconchannel_setting"></div>
                    <div className="add">
                        <div className="iconfont iconaddboard"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navi;

