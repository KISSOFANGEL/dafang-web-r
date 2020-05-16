import React, { Component } from 'react'
import './step2.scss'
import Checkbox from '&/checkbox'
export default class step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            templates: [{ name: 'general', desc: '综合面板', fileName: 'generalboard' }, { name: 'project', desc: '项目管理', fileName: 'projectboard' }, { name: 'wiki', desc: '知识管理', fileName: 'wikiboard' }, { name: 'whiteboard', desc: 'whiteboard', fileName: 'preview_whiteboard' }, { name: 'showcase', desc: 'showcase', fileName: 'preview_showcase' }],
            selectedTmps:[]
        }
    }
    selectPannel = (v) => {
        // if(this.state.selectedTmps.indexOf(this.templates))
    }
    setPannelIndex(i){
        console.log(i)
    }
    render() {
        return (
            <div className="wrap-addchannel-step2">
                <div className="channel-name">
                    <div className="iconfont iconchannel"></div>
                    <div className="name">{this.props.channelName || '大方科技年会'}</div>
                </div>
                <div className="set-pannel-desc">
                    选择需要的面板
                </div>
                <div className="pannels">
                    {this.state.templates.map((item,i) =>
                        <div className="pannel">
                            <div className="template">
                                <img src={require(`@/static/add-channel/${item.fileName}.png`)} alt=""></img>
                            </div>
                            <div className="flex">
                                <div className="checkbox"><Checkbox cb={this.selectPannel}></Checkbox></div>
                                <div className="name">{item.desc}</div>
                            </div>
                        </div>
                    )}

                </div>
                <div className="crateBtn">创建空白频道</div>
            </div>
        )
    }
}
