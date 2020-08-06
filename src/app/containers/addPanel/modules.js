import React, { Component } from 'react';
import './modules.scss';
import Module from './module.js'
export default class Modules extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgParams: props.imgParams
        }
    }

    render(){
        const { imgParams } = this.state
       return(
           <>
               <div key={imgParams.name}  className="module-desc ">{imgParams.name}</div >

               <div key={imgParams.name+ "s"} className="images-div">
                   <Module imgParams={imgParams} ></Module>

               </div>

           </>
       )
    }
}