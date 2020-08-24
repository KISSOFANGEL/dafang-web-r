import React, { Component } from 'react';
import './step3.scss'
import { withRouter } from "react-router-dom";

class AddSpaceStep3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectMsg: '为团队选择一个标识',
            curLogo: 0,
            backgroundColors: ["#481A49", "#F1F1E7", "#041177", "#EB3458", "#2A166B"]
        }
    }
    changeChecked = (curLogo, color) => {
        this.setState({
            curLogo,
            backgroundColor: color,
        })
    }
    createSpace = async (spaceName_) => {
        let params = { name: spaceName_, type: Number(1) }
        await React.$request.post(`/dafang/space/`, params)
        this.props.parent.toggleVisible()
        React.$store.dispatch(React.$actions.setAddSpace(Number(1)))
    }
    render() {
        const { selectMsg, curLogo, backgroundColors } = this.state
        const { spaceName } = this.props;
 
        return (
            <div className='wrap-add-space-step3'>

                <div key="11" style={{ background: backgroundColors[curLogo] }} className={`wrap-add-space-step3-header ${curLogo === 1 ? 'white-theme' : null}`}>
                    <div className="wrap-add-space-header">
                        <i className={`iconfont iconclose pointer`} onClick={this.props.parent.toggleVisible}></i>
                    </div>
                    <p className={`p-space-name `} >{spaceName.spaceName || '次世代开发团队'}</p>
                    <p className={`p-space-msg `}>{selectMsg}</p>
                </div>

                <div key="22" className="wrap-add-space-step3-foot">
                    <div className="space-logos">
                        {
                            backgroundColors.map((item, index) => {
                                return <div className="img" key={index}>
                                    <img key={index} onClick={(e) => this.changeChecked(index, item)} src={require(`@/static/add-space/image${index + 1}.png`)} alt="团队标识" className={curLogo === index ? 'active' : null}></img>
                                    {curLogo === index ? <div className="mask"> <i className="iconfont iconchecked"></i></div> : null}
                                </div>
                            })
                        }
                    </div>

                    <button className='dafang-button' onClick={() => this.createSpace(spaceName.spaceName)} >
                        <p>完成创建</p>
                    </button>
                </div>

                {/* <div>
                    <div>
                        <p>点击加入“大方开发团队”的大方团队空间</p>
                        <p>{url}</p>
                    </div>
                    <button>复制邀请链接</button>
                </div> */}

            </div>


        )
    }
}

export default withRouter(AddSpaceStep3);