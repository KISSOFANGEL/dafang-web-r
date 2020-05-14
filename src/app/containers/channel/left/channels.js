import React from 'react';
import './channels.scss'
class Channels extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
           <div className="wrap-cards">
               <div className="card add">
                   <div className="btn">
                        <div className="iconfont iconaddboard"></div>   
                        <div className="desc"> 新建频道</div>
                   </div>
               </div>
                <div className="card active">
                    <div className="title">
                        <div className="desc">自在面包纺品牌升级项目</div>
                        <div className="iconfont iconGroup296"></div>
                    </div>
                    <div className="creater">
                            <div className="username"> Moyan</div>
                            <div className="point">.</div>
                            <div className="cratedon">刚刚更新</div>
                    </div>
                    <div className="users">
                        <img className="avatar" alt="avatar" src={require('@/static/avatar.png')}/>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <div className="desc">智能猫窝硬件系统</div>
                        <div className="iconfont iconchannellist_people1"></div>
                        <div className="count number">16</div>
                    </div>
                    <div className="creater">
                            <div className="username"> Moyan</div>
                            <div className="point">.</div>
                            <div className="cratedon">刚刚更新</div>
                    </div>
                </div>
           </div>
            
        )
    }
}

export default Channels