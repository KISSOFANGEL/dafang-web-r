import React, { Component } from 'react'
import './step2.scss'
import Checkbox from '&/checkbox'
import Overview from './overview'
export default class step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            templates: [{ name: 'general', desc: '综合面板', fileName: 'generalboard' }, { name: 'project', desc: '项目管理', fileName: 'projectboard' }, { name: 'wiki', desc: '知识管理', fileName: 'wikiboard' }, { name: 'whiteboard', desc: 'whiteboard', fileName: 'preview_whiteboard' }, { name: 'showcase', desc: 'showcase', fileName: 'preview_showcase' }],
            selectedTmps: []
        }
    }
    selectPannel = (i) => {
        let name = this.state.templates[i].name
        let index = this.state.selectedTmps.indexOf(name);
        let selectedTmps = this.state.selectedTmps;
        if (index === -1) {
            selectedTmps.push(name)
        }
        else {
            selectedTmps.splice(index)
        }
        this.setState(
            { selectedTmps }
        )
    }

    render() {
        const { selectedTmps, templates } = this.state;
        const { channelName } = this.props;
        return (
            <div className="wrap-addchannel-step2">
                <div className="select">
                    <div className="channel-name">
                        <div className="iconfont iconchannel"></div>
                        <div className="name">{channelName || '大方科技年会'}</div>
                    </div>
                    <div className="set-pannel-desc">
                        选择需要的面板
                </div>
                    <div className="pannels">
                        {templates.map((item, i) =>
                            <div className="pannel" key={i} onClick={e => { this.selectPannel(i) }}>
                                <div className="template">
                                    <img src={require(`@/static/add-channel/${item.fileName}.png`)} alt=""></img>
                                </div>
                                <div className="flex">
                                    <div className="checkbox"><Checkbox isChecked={selectedTmps.indexOf(item.name) > -1}></Checkbox></div>
                                    <div className="name">{item.desc}</div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={`crateBtn ${selectedTmps.length > 0 ? 'active' : null}`}>{`创建${selectedTmps.length > 0 ? '' : '空白'}频道`}</div>
                </div>
                <div className="overview">
                    <Overview></Overview>
                </div>
            </div>
        )
    }
}
