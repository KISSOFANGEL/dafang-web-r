import React, { Component } from 'react'

export default class dropdownmenu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { theme ,menu} = this.props
        return (
            <div className="component-dropdownmenu" >
                {
                    <ul className={`dropdown__menu dropdown__menu--${theme||'default'} `} >
                        <div className="dropwdown-solt">{menu}</div>
                    </ul>
                }
            </div>

        )
    }
}
