import React, { Component } from 'react';
import './index.scss';
import AddSpaceStep1 from './step1';
import AddSpaceStep2 from './step2';
import AddSpaceStep3 from './step3';


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curStep: 1,
            spaceName: '',
            checked: 0

        }
    }
    next = (nextPage, spaceName) => {
        this.setState({
            curStep: nextPage,
            spaceName: spaceName
        })
    }

    setCheck = (e, checked) => {
        this.setState({
            checked: checked
        })
    }
    render() {
        const { curStep, spaceName, checked } = this.state
        return (
            <div className='wrap-add-space'>
               {curStep !== 3 && <div className="wrap-add-space-header">
                    <i className={`iconfont iconclose pointer `} onClick={this.props.changeMask}></i>
                </div>}
                {curStep === 1 &&
                    <AddSpaceStep1 nextStep={v => { this.next(2, v) }}></AddSpaceStep1>
                }
                {curStep === 2 &&
                    <AddSpaceStep2 nextStep={v => { this.next(3, v) }}></AddSpaceStep2>
                }

                {curStep === 3 &&
                    <AddSpaceStep3 spaceName={spaceName} parent={this}></AddSpaceStep3>

                }
            </div>



        );
    }
}