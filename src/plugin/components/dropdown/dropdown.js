import React, { Component } from 'react'
import './dropdown.scss'
import Dropdownmenu from './dropdownmenu.js'
export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { positioning: true, innerVisible: false,}
    }
    componentDidMount() {
        if (!this.props.trigger) {
            this.positioning = false
        }
    }
    triggerMenu = () => {
        this.setState({ innerVisible: !this.state.innerVisible })
    }
    render() {
        const { trigger, dropdownmenu } = this.props
        const { innerVisible,positioning } = this.state
        return (
            <div className="component-dropdown">
                <div onClick={this.handleClick} className={`dropdown ${positioning ? 'dropdown--positioning' : 'dropdown--non-positioning'}`}>
                    <div className="default" onClick={this.triggerMenu}>{trigger}</div>
                    {innerVisible && <div className="dropdownmenu">
                        <Dropdownmenu menu = {dropdownmenu}> </Dropdownmenu>
                    </div>}
                </div>
            </div>
        )
    }
}
