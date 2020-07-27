import React, { Component } from 'react';
import './index.scss';
import AddSpaceStep1 from './step1';
import AddSpaceStep2 from './step2';
import AddSpaceStep3 from './step3';


export default class index extends Component{
    constructor(props){
        super(props)
        this.state = {
            curStep: 1,
            spaceName: ''
        }
    }
    next = (nextPage,spaceName) => {
        this.setState({ 
            curStep: nextPage,
            spaceName: spaceName
        })
    }
    render(){
        const { curStep, spaceName} = this.state
        return(
            <div className='mask' >
                <div className='wrap-add-space'>
                    <div className='close iconfont iconclose pointer' onClick={this.props.changeMask}></div>
                    {curStep === 1 &&
                        <AddSpaceStep1 nextStep={v => { this.next(2,v) }}></AddSpaceStep1>

                    }
                    {curStep === 2 &&
                        <AddSpaceStep2 nextStep={v => { this.next(3,v) }}></AddSpaceStep2>

                    }

                    {curStep === 3 &&
                        <AddSpaceStep3 spaceName={spaceName}></AddSpaceStep3>

                    }
                </div>
                
               
            </div>

        );
    }
}