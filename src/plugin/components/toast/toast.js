import React, { Component } from 'react'

export default class toast extends Component {
    constructor(props) {
        super(props)
    }
    mouseEnter = () => { }
    mouseLeave = () => { }
    render() {
        const { typeClass, top,children } = this.props
        return (
            <div className={`component-toast ${typeClass}`} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{ 'top': top }}>
                <div className="toast__content">
                {children}
                </div>
            </div>

            // (v-show="show" :id="id" :class="typeClass" @mouseenter.self="clearTick" @mouseleave.self="setTick" :style="{'top': top}")
            // .ic-toast__content(v-html="content")
            // i.ibass-close.ibass--default(@click="close()")
        )
    }
}
