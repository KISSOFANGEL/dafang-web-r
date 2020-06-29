import React, { Component } from 'react'
import './dropdown.scss'
import Dropdownmenu from './dropdownmenu.js'
export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { positioning: true, innerVisible: false, style: {} }
        this.triggerRef = React.createRef();
        this.menuRef = React.createRef();
    }
    componentDidMount() {

        if (!this.props.trigger) {
            this.positioning = false
        }

    }
    triggerMenu = () => {
        this.setState({ innerVisible: !this.state.innerVisible })
        setTimeout(() => {
            if (this.state.innerVisible) {
                this.setState({ style: { left: this.triggerRef.current.clientWidth / 2 - this.menuRef.current.clientWidth / 2+'px' } })
                console.log(this.state.style)
            }
        }, 0);
    }
    render() {
        const { trigger, dropdownmenu } = this.props
        const { innerVisible, positioning } = this.state
        return (
            <div className="component-dropdown">
                <div onClick={this.handleClick} className={`dropdown ${positioning ? 'dropdown--positioning' : 'dropdown--non-positioning'}`}>
                    <div className="default" onClick={this.triggerMenu} ref={this.triggerRef} >{trigger}</div>
                    {innerVisible && <div className="dropdownmenu" ref={this.menuRef} style={this.state.style}>
                        <Dropdownmenu menu={dropdownmenu}> </Dropdownmenu>
                    </div>}
                </div>
            </div>
        )
    }
}
