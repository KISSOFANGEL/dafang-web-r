import React, { Component } from 'react';
import './index.scss';
import Modules from './modules.js'

export default class index extends Component{
    constructor(props){
        super(props)
        this.state = {
            singleImgParams: {
                'name': '添加模块','width': '64px', 'height': '64px',
                'modules':[
                { 'name': '富文本', 'imgAddr': 'richtext.png' },
                { 'name': '文件', 'imgAddr': 'file.png'},
                { 'name': '任务', 'imgAddr': 'task.png'},
                { 'name': '嵌入', 'imgAddr': 'embed.png' }
            ]},
            asseblyImgParams: {
                'name': '添加模块组合','width': '120px', 'height': '90px',
                'modules':[
                { 'name': '综合看板', 'imgAddr': 'generalboard.png'},
                { 'name': '项目管理', 'imgAddr': 'projectboard.png' },
                { 'name': '知识库', 'imgAddr': 'wikiborard.png' },
                { 'name': '任务管理', 'imgAddr': 'taskmanage.png'}
            ]},
            otherImgParams: {
                'name': '其他类型面板','width': '120px', 'height': '90px' ,
                'modules':[
                { 'name': 'whiteborad', 'imgAddr': 'whiteboard.png', 'width': '120px', 'height': '90px' },
                { 'name': 'showcase', 'imgAddr': 'showcase.png', 'width': '120px', 'height': '90px' }
            ]}
        }
    }

    render(){
        const { singleImgParams, asseblyImgParams, otherImgParams} = this.state
        return(
            <div className="wrap-div">
                <Modules imgParams={singleImgParams}></Modules>
                
                <Modules imgParams={asseblyImgParams}></Modules>

                <Modules imgParams={otherImgParams}></Modules>
                

            </div>
        )
    }

}