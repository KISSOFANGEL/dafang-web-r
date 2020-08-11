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
                    { 'name': '富文本', 'imgAddr': require('@/static/add-panel/richtext.png'), 'imgAddr2': require('@/static/add-panel/richtext2.png')},
                    { 'name': '文件', 'imgAddr': require('@/static/add-panel/file.png'), 'imgAddr2': require('@/static/add-panel/file2.png')},
                    { 'name': '任务', 'imgAddr': require('@/static/add-panel/task.png'), 'imgAddr2': require('@/static/add-panel/task2.png')},
                    { 'name': '嵌入', 'imgAddr': require('@/static/add-panel/embed.png'), 'imgAddr2': require('@/static/add-panel/embed2.png') }
            ]},
            asseblyImgParams: {
                'name': '添加模块组合','width': '120px', 'height': '90px',
                'modules':[
                    { 'name': '综合看板', 'imgAddr': require('@/static/add-panel/generalboard.png'), 'imgAddr2': require('@/static/add-panel/generalboard2.png')},
                    { 'name': '项目管理', 'imgAddr': require('@/static/add-panel/projectboard.png'), 'imgAddr2': require('@/static/add-panel/projectboard2.png')},
                    { 'name': '知识库',   'imgAddr': require('@/static/add-panel/wikiboard.png'), 'imgAddr2': require('@/static/add-panel/wikiboard2.png')},
                    { 'name': '任务管理', 'imgAddr': require('@/static/add-panel/taskmanage.png'), 'imgAddr2': require('@/static/add-panel/taskmanage2.png')}
            ]},
            otherImgParams: {
                'name': '其他类型面板','width': '120px', 'height': '90px' ,
                'modules':[
                    { 'name': 'whiteboard', 'imgAddr': require('@/static/add-panel/whiteboard.png'), 'imgAddr2': require('@/static/add-panel/whiteboard2.png') },
                    { 'name': 'showcase', 'imgAddr': require('@/static/add-panel/showcase.png'), 'imgAddr2': require('@/static/add-panel/showcase2.png')}
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