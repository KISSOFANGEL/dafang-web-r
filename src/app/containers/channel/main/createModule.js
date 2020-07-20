import React, { Component } from 'react'
import './createModule.scss'
export default class createModule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modules: [{ pic: 'richtextblock', text: '富文本', type: 1 }, { pic: 'fileblock', text: '文件', type: 2 }, { pic: 'taskblock', text: '任务', type: 3 }, { pic: 'frameblock', text: '嵌入', type: 4 }]
        }
    }

    render() {
        let { modules } = this.state
        let { confirm } = this.props
        return (
            <div className="wrap-create-module-pop" >
                {modules.map((item, i) =>
                    <div className="block `${e.pic}`" key={i} onClick={e => confirm(item)}>
                        <img className="normal" src={require(`@/static/add-channel/${item.pic}.png`)} alt=""></img>
                        <img className="active" src={require(`@/static/add-channel/${item.pic}_hover.png`)} alt=""></img>
                        <div className="text">{item.text}</div>
                    </div>)}
            </div>
        )
    }
}
