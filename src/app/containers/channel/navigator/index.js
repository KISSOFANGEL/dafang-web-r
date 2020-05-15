import React from 'react';
import './index.scss';

function Navi(props) {
    return (
        <div className="wrap-navigator">
            <div className="left">
                <div className="item active">概览</div>
                <div className="item">项目管理</div>
                <div className="item">设计资料</div>
                <div className="iconfont iconaddboard"></div>
            </div>
            <div className="right">
                <div className="iconfont iconchannel_search"></div>
                <div className="iconfont iconchannel_show"></div>
                <div className="iconfont iconchannel_at"></div>
                <div className="iconfont iconchannellist_people1"></div>
                <div className="iconfont iconchannel_setting"></div>
                <div className="add">
                    <div className="iconfont iconaddboard"></div>
                </div>
            </div>
        </div>
    )
}
export default Navi