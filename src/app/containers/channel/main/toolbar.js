import React, { Component } from 'react';
import './toolbar.scss'
class toolbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            activedIcon:[]
        }
    }
    handleClick = (type)=>{
        let activedIcon = this.state.activedIcon;
        let index = activedIcon.indexOf(type)
        if(index===-1)activedIcon.push(type)
        else{
            activedIcon.splice(index,1)
        }
        this.setState({activedIcon})
        this.props.handleCK(type)
    }
    render() {
        let {activedIcon} = this.state
        return (
            <div className="wrap-toolbar">
                <i className={`iconfont icontoolbar_title ${activedIcon.indexOf('header-one')>-1?'active':''}`} onClick={()=>this.handleClick('header-one')}></i>
                <i className="iconfont icontoolbar_bulletlist"></i>
                <i className="iconfont icontoolbar_orderlist_trail"></i>
                <i className="iconfont icontoolbar_checkbox"></i>
                <div className="line"></div>
                <i className="iconfont icontoolbar_picture"></i>
                <i className="iconfont icontoolbar_mention"></i>
            </div>
        );
    }
}

export default toolbar;
