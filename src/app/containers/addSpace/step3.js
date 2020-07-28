import React, { Component } from 'react';
import './step3.scss'
import { withRouter } from "react-router-dom";

 class AddSpaceStep3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectMsg: '为团队选择一个标识',
            url:'http://localhost:3000',
            checked:'1',
            backgroundColor: "#481A49",
            divLeft: 'dev_left1'
        }

        // this.changeChecked = this.changeChecked.bind(this)
    }

    changeChecked = (checked,color,left,e) => {
        this.setState({
            checked:checked,
            backgroundColor:color,
            divLeft:left
        })
       

    }

    createSpace = async (spaceName_) => {
        
        let params = { name: spaceName_, type: Number(1) } 
        let res = await React.$request.post(`/dafang/space/`, params)
        if (res.code === 1) {
            React.$store.dispatch(React.$actions.setMask("change"))
            // this.props.history.push("/"); //
        }
    }
    render(){
        const { selectMsg, url, checked, backgroundColor, divLeft} = this.state
        const { spaceName } = this.props;
        return(
            <div>
                <div className="wrap-step3-head" style={{background:backgroundColor}} >
                    <p className={`p-space-name ${checked === '2' ? 'p-space-name-color' : ''}`} >{spaceName.spaceName || '次世代开发团队'}</p>

                    <p className={`p-space-msg ${checked === '2' ? 'p-space-msg-color' : ''}`}>{selectMsg}</p>
                </div>
                <div className="wrap-step3-foot">
                    <div className="div-img">
                        <img className='mark' onClick={(e) => this.changeChecked("1", "#481A49","dev_left1", e)} src={require('@/static/add-space/image1.png')} alt="团队标识一"></img>
                        <img className='mark' onClick={(e) => this.changeChecked("2", "#F1F1E7", "dev_left2", e)} src={require('@/static/add-space/image2.png')} alt="团队标识二"></img>
                        <img className='mark' onClick={(e) => this.changeChecked("3", "#041177", "dev_left3", e)} src={require('@/static/add-space/image3.png')} alt="团队标识三"></img>
                        <img className='mark' onClick={(e) => this.changeChecked("4", "#EB3458", "dev_left4", e)} src={require('@/static/add-space/image4.png')} alt="团队标识四"></img>
                        <img className='mark' onClick={(e) => this.changeChecked("5", "#2A166B", "dev_left5", e)} src={require('@/static/add-space/image5.png')} alt="团队标识五"></img>
                        
                    </div>
                    <img className={`check ${divLeft}`}   src={require('@/static/add-space/check.png')} alt="选择团队标识一"></img>
                    
                    <button className='complete-button' onClick={() => this.createSpace(spaceName.spaceName)} >
                        <p>完成创建</p>
                    </button>
                </div>
                
                <div>
                    <div>
                        <p>点击加入“大方开发团队”的大方团队空间</p>
                        <p>{url}</p>    
                    </div>    
                    <button>复制邀请链接</button>
                </div>
            
            </div>       

           
        )
    }
}

export default withRouter(AddSpaceStep3);