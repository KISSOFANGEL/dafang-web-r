import React, { Component } from 'react'
import './dropdown.scss'
import Dropdownmenu from './dropdownmenu.js'
import OutsideClickHandler from 'react-outside-click-handler';

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
    clickOutside = () => {
        console.log('outsizd');
        
        if (!this.props.noclosebyoutside) this.triggerMenu()
    }
    triggerMenu = () => {
        this.setState({ innerVisible: !this.state.innerVisible })
        setTimeout(() => {
            if (this.state.innerVisible) {
                this.setState({ style: { left: this.triggerRef.current.clientWidth / 2 - this.menuRef.current.clientWidth / 2 + 'px' } })
            }
        }, 0);
    }
    menuClick = () => {
        setTimeout(() => {
            this.triggerMenu()
        }, 0);

    }
    render() {
        const { trigger, dropdownmenu } = this.props
        const { innerVisible, positioning } = this.state
        return (
            <div className="component-dropdown">
                <div onClick={this.handleClick} className={`dropdown ${positioning ? 'dropdown--positioning' : 'dropdown--non-positioning'}`}>
                    <div className="default" onClick={this.triggerMenu} ref={this.triggerRef} >{trigger}</div>
                    {innerVisible &&
                        <OutsideClickHandler onOutsideClick={this.clickOutside}>
                            <div className="dropdownmenu" ref={this.menuRef} style={this.state.style} onClick={this.menuClick}>
                                <Dropdownmenu menu={dropdownmenu}> </Dropdownmenu>
                            </div>
                        </OutsideClickHandler>
                    }
                </div>
            </div>
        )
    }
}
