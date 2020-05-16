import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: !!props.isChecked
        }
    }
    setIsChecked=()=>{
        this.setState({isChecked:!this.state.isChecked})
        this.props.cb(this.state.isChecked)
    }
    render() {
        return (
            <div className="wrap-component-checkbox pointer" onClick={this.setIsChecked}>
                <div className={`iconfont ${this.state.isChecked?'iconchecked':'normal'}`}></div>
            </div>
        )
    }
}
