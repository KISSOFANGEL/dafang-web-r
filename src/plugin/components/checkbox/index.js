import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: !!props.isChecked,

        }
    }

    componentWillReceiveProps(nextProps) {
        //父节点指定了isChecked 才更新
        if (nextProps.isChecked === undefined) return
        this.setState({
            isChecked: nextProps.isChecked
        });
    }

    setIsChecked = () => {
        //如果 isChecked 由父节点传入，则由componentWillReceiveProps 来决定 isChecked 状态
        if (this.props.isChecked !== undefined) return
        this.setState({ isChecked: !this.state.isChecked })
        this.props.cb && this.props.cb(this.state.isChecked)
    }
    render() {
        const { isChecked } = this.state;
        return (
            <div className="wrap-component-checkbox pointer" onClick={this.setIsChecked}>
                <div className={`iconfont ${isChecked ? 'iconchecked' : 'normal'}`}></div>
            </div>
        )
    }
}
