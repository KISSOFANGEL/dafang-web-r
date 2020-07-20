import React, { Component } from 'react'
import './step2.scss'
import Checkbox from '&/checkbox'
import Overview from './overview'
import { withRouter } from "react-router-dom";

class step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            templateFile: { '综合面板': 'generalboard', '项目管理': 'projectboard', '知识库': 'wikiboard', 'whiteboard': 'whiteboard', 'showcase': 'showcase' },
            templates: [],
            selectedTmps: []
        }
    }
    componentDidMount() {
        this.getTemplates()
    }
    getTemplates = async () => {
        let res = await React.$request.get('/dafang/panelTemplate/list')
        this.setState({ templates: res.data })
    }
    selectPannel = (i) => {
        let module = this.state.templates[i]
        let index = this.state.selectedTmps.indexOf(module);
        module.fileName = this.state.templateFile[module.name]
        let selectedTmps = this.state.selectedTmps;
        if (index === -1) {
            selectedTmps.push(module)
        }
        else {
            selectedTmps.splice(index, 1)
        }
        this.setState(
            { selectedTmps }
        )
    }

    createChannel = async () => {
        let panelTemplateIds = this.state.templates.map(a => a.id)
        let params = { channel: { name: this.props.channel.channelName, type: Number(this.props.channel.isPrivate) }, panelTemplateIds }
        let res = await React.$request.post(`/dafang/channel/create/${React.db.ls.get('activeSpace').space.id}`, params)
        if (res.code === 1) this.props.history.push("/");
    }
    render() {
        const { selectedTmps, templates, templateFile } = this.state;
        const { channel } = this.props;
        return (
            <div className="wrap-addchannel-step2">
                <div className="select">
                    <div className="channel-name">
                        <div className="iconfont iconchannel"></div>
                        <div className="name">{channel.channelName || '大方科技年会'}</div>
                    </div>
                    <div className="set-pannel-desc">
                        选择需要的面板
                </div>
                    <div className="pannels">
                        {templates.map((item, i) =>
                            <div className="pannel" key={i} onClick={e => { this.selectPannel(i) }}>
                                <div className="template">
                                    {/* {templateFile[item.name]} */}
                                    <img src={require(`@/static/add-channel/${templateFile[item.name]}.png`)} alt=""></img>
                                </div>
                                <div className="flex">
                                    <div className="checkbox"><Checkbox isChecked={selectedTmps.indexOf(item) > -1}></Checkbox></div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className={`cursor crateBtn ${selectedTmps.length > 0 ? 'active' : null}`} onClick={() => this.createChannel()}>{`创建${selectedTmps.length > 0 ? '' : '空白'}频道`}</div>
                </div>
                {
                    selectedTmps.length > 0 &&
                    <div className="overview">
                        <Overview modules={selectedTmps}></Overview>
                    </div>
                }
            </div>
        )
    }
}
export default withRouter(step2);
