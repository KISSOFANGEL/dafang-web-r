import React, { Component } from 'react';
import './index.scss';

export default class index extends Component{
    constructor(props){
        super(props)
        this.state = {
            singlePanels:{'富文本':'richtext','文件':'file','任务':'task','嵌入':'embed'},
            asseblyPanels: { '综合面板': 'generalboard', '项目管理': 'projectboard', '知识库': 'wikiboard' },
            otherPanels: { 'whiteboard': 'whiteboard', 'showcase': 'showcase'}
        }
    }

    render(){
        const{singlePanels,asseblyPanels,otherPanels} = this.state
        return(
            <div className="wrap-div">
                <p>添加模块</p> 
                
                <div>
                    <img src=""></img>
                    <p>富文本</p>
                </div>
                
                <p>添加模块组合</p>
                <div>
                    <img src=""></img>
                    <p>嵌入</p>
                </div>
                

                <p>其他类型面板</p>
                <div>
                    <img src=""></img>
                    <p>文件</p>
                </div>


            </div>
        )
    }

}