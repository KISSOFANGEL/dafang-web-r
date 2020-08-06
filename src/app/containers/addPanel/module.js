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
        img.src = item.imgAddr2
    }

    changeImgOut = (e, item) => {
        let img = e.target
        img.src = item.imgAddr
    }

    render(){
        const { imgParams} = this.state
        return(
                    imgParams.modules.map((item,index) => {
                        return <div className="module-div "   key={item.name}>
                            <img className="module-img pointer" width={imgParams.width} height={imgParams.height} onMouseOver={(e) => this.changeImgOver(e, item)} onMouseOut={(e) => this.changeImgOut(e, item)} src={item.imgAddr} alt=''></img>
                                    <p className="module-name">{item.name}</p>
                               </div>
                    })
                


        )
    }
}