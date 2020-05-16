import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onDesc: props.onDesc || '公开',
            offDesc: props.onDesc || '私密',
            isOn: props.isOn || true,
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState((state)=> { return { isOn: !state.isOn } })
    }
    render() {
        return (
            <div className={`wrap-switch pointer ${this.state.isOn ? 'is-on' : null}`} onClick={this.toggle} >
                <div className="switch-desc">{this.state.isOn ? this.state.onDesc : this.state.offDesc}</div>
                <div className="circle" ></div>
            </div>
        )
    }
}
