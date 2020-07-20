import React, { Component } from 'react';

class space extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSpace: React.db.ls.get("activeSpace")
        }
    }
    componentDidMount() {

    }
    setActiveSpace = (item) => {
        React.db.ls.set("activeSpace", item)
        this.setState({ activeSpace: item })
    }
    render() {
        const { spaces } = this.props
        const { activeSpace } = this.state
        return (
            <>
                <div className="wrap-logo-menu">
                    <div className="items">
                        {
                            spaces.map((item, index) =>
                                <div className="item cursor" key={index} onClick={() => this.setActiveSpace(item)}>
                                    <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                                    <div className="name">
                                        <div className="userName">{item.space.name}</div>
                                        <div className="desc">{item.space.type === 0 ? '个人空间' : item.userType === 1 ? '主理人' : '成员'}</div>
                                    </div>
                                    <div className={`iconfont ${activeSpace.space.id === item.space.id ? 'iconchecked' : ''}`}></div>
                                </div>
                            )
                        }
                    </div>
                    <div className="create">
                        <div className="create-space">创建团队空间</div>
                        <div className="line"></div>
                    </div>
                    <div className="setting">
                        <div className="set">设置</div>
                        <div className="set">帮助</div>
                        <div className="set logoout">退出登录</div>
                    </div>
                </div>
            </>
        );
    }
}

export default space;
