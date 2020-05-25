import React, { Component } from 'react'

export default class dropdownmenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { theme, type, menu, visible } = this.props
        return (
            <div className="component-dropdownmenu">
                {
                    visible &&
                    <ul className={`dropdown__menu dropdown__menu--${theme} ${type ? 'dropdown__menu--${type}' : ''}`} >
                        <div className="dropwdown-solt">{menu}</div>
                    </ul>
                }
            </div>

        )
    }
}
