import React, { Component } from 'react';
import './module.scss';

export default class Module extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgParams: props.imgParams
        }
    }
    render(){
        const { imgParams} = this.state
        return(
                    imgParams.modules.map((item,index) => {
                        return <div className="module-div">
                                    <img className="module-img" width={imgParams.width} height={imgParams.height} src={require(`@/static/add-panel/${item.imgAddr}`)} alt={item.name}></img>
                                    <p className="module-name">{item.name}</p>
                               </div>
                    })
                


        )
    }
}