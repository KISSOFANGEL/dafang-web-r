import React from 'react';
import  './index.scss';

function Navi(props){
    return(
        <div className="wrap-component">
             <div className="item active">概览</div>
             <div className="item">项目管理</div>
             <div className="item">设计资料</div>
             <div className="iconfont iconaddboard"></div>
        </div>
    )
}
export default Navi