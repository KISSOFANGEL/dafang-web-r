import React, { Component } from 'react';
import './module.scss';

export default class Module extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgParams: props.imgParams
        }
    }
    changeImgOver = (e,item) => {
        let img = e.target
        if (e.target.nodeName === 'DIV'){
            img = e.target.firstChild
        }
        if (e.target.nodeName === 'P') {
            img = e.target.previousElementSibling
        }
        img.src = item.imgAddr2
    }

    changeImgOut = (e, item) => {
        let img = e.target
        if (e.target.nodeName === 'DIV') {
            img = e.target.firstChild
        }
        if (e.target.nodeName === 'P') {
            img = e.target.previousElementSibling
        }
        
        img.src = item.imgAddr
    }

    render(){
        const { imgParams} = this.state
        return(
                    imgParams.modules.map((item,index) => {
                        return <div className="module-div pointer" onMouseOver={(e) => this.changeImgOver(e, item)} onMouseOut={(e) => this.changeImgOut(e, item)}  key={item.name}>
                                    <img className="module-img " width={imgParams.width} height={imgParams.height}  src={item.imgAddr} alt=''></img>
                                    <p onMouseOver={(e) => this.changeImgOver(e, item)} onMouseOut={(e) => this.changeImgOut(e, item)} className="module-name">{item.name}</p>
                               </div>
                    })
                


        )
    }
}