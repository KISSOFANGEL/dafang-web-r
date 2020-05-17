import React, { Component } from 'react';
import './overview.scss'
class overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modules: [{ name: 'general', desc: '综合面板', fileName: 'preview_generalboard' }, { name: 'project', desc: '项目管理', fileName: 'projectboard' }, { name: 'wiki', desc: '知识管理', fileName: 'wikiboard' }, { name: 'whiteboard', desc: 'whiteboard', fileName: 'preview_whiteboard' }, { name: 'showcase', desc: 'showcase', fileName: 'preview_showcase' }],
            activeModue: 0
        }
    }

    render() {
        const { modules, activeModue } = this.state
        return (
            <div className="wrap-addchannel-overview">
                <div className="modules">
                    {modules.map((item, i) =>
                        <div>
                            <div className={`module ${activeModue === i ? 'active' : null}`} key={i}>
                                <div className="desc">{item.desc}</div>
                            </div>
                        </div>
                    )}
                </div>
                <img src={require(`@/static/add-channel/${modules[activeModue].fileName}.png`)} alt=""></img>
            </div>
        );
    }
}

export default overview;
