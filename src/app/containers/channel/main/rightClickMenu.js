import React, { Component } from 'react'
import './rightClickMenu.scss'
import OutsideClickHandler from 'react-outside-click-handler';
export default class rightClickMenu extends Component {
    constructor(props) {
        super(props)
    }
    clickOutside = () => {

    }
    render() {
        let { show, rcBack } = this.props
        return (
            <OutsideClickHandler onOutsideClick={this.clickOutside}>
                {show &&
                    <div className="wrap-right-click-menu" >
                        <div className="menu">
                            <div className="item" onClick={e => rcBack('del')}>
                                <i className="iconfont iconclose">
                                </i>
                                <div className="desc" >
                                    删除
                        </div>
                            </div>
                        </div>
                    </div>
                }
            </OutsideClickHandler>
        )
    }
}
