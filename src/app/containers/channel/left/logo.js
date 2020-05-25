import React from 'react';
import './logo.scss'
import Dropdown from '&/dropdown/dropdown.js'
function Logo(params) {
    return (
        <>
            <Dropdown trigger={

                <div className="wrap-logo">
                    <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                    <div className="userName">渣渣辉</div>
                    <div className="iconfont iconheader_flash"></div>
                </div>
            } dropdownmenu={
                <div className="wrap-logo-menu">
                    <div className="items">
                        <div className="item">
                            <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                            <div className="name">
                                <div className="userName">渣渣辉的个人空间</div>
                                <div className="desc">个人空间</div>
                            </div>
                            <div className={`iconfont`}></div>
                        </div>
                        <div className="item">
                            <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                            <div className="name">
                                <div className="userName">wework 中国</div>
                                <div className="desc">主理人</div>
                            </div>
                            <div className={`iconfont iconchecked`}></div>
                        </div>
                        <div className="item">
                            <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                            <div className="name">
                                <div className="userName">爱彼迎市场部</div>
                                <div className="desc">成员</div>
                            </div>
                            <div className={`iconfont`}></div>
                        </div>
                        <div className="create-space">创建团队空间</div>
                        <div className="line"></div>
                    </div>
                    <div className="setting">
                        <div className="set">设置</div>
                        <div className="set">帮助</div>
                        <div className="set logoout">退出登录</div>
                    </div>
                </div>
            }></Dropdown>

        </>
    )
}

export default Logo