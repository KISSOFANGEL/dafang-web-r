import React, { Component } from 'react'
import 'dropdown.scss'
export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { positioning: true, innerVisible: false }
    }
    componentDidMount() {
        if (!this.props.trigger) {
            this.positioning = false
        }
    }
    render() {
        const { trigger, dropdownmenu, positioning } = this.props
        return (
            <div className="component-dropdown">
                <div onClick={this.handleClick} className={`dropdown ${positioning ? 'dropdown--positioning' : 'dropdown--non-positioning'}`}>
                    <div className="default">{trigger}</div>
                    <div className="dropdown">
                        {/* <dropdownmenu></dropdownmenu> */}
                    </div>
                </div>
            </div>
        )
    }
}
