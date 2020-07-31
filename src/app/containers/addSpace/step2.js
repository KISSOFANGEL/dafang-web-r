import React, { Component } from 'react';

import './step2.scss'

export default class AddSpaceStep2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            spaceName:"",
            placeholder:"你的团队叫什么"
        }
        this.spaceNameChange = this.spaceNameChange.bind(this)
    }

    spaceNameChange(e) {
        e.preventDefault()
        this.setState({ spaceName: e.target.value })
    }

    render(){
        const { spaceName, placeholder} = this.state
        return(
            <div  className='wrap-add-space-step2'>
                <input type='text' name='spaceName' className='input-space-name' value={spaceName}  autoFocus placeholder={placeholder} onChange={this.spaceNameChange} autoComplete="off"  ></input>
                {spaceName &&
                    <div className="next pointer" onClick={e => { this.props.nextStep({ spaceName }) }}>
                        <div className="iconfont iconarrow_right"></div>
                    </div>
                }
            </div>
           
        );
    }
}