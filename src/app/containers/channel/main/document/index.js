import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import WebBookmark from './modal/webBookmark'

export default class index extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    onRef = (ref) => {
        this.child = ref
    }

    handleMenuClick = e => {
      console.log('click ', e);
      this.child.showModal();
    }

    render(){
        const menu = (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="0" disabled>
              文档
            </Menu.Item>
            <Menu.Item key="1">
              网页书签
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
              上传
            </Menu.Item>
          </Menu>
        );
        return(
            <div className="document-wrap">
              <Dropdown placement="bottomCenter" overlay={menu}>
                <PlusOutlined className="icon-add" />
              </Dropdown>
              {(!this.props.documentList || !this.props.documentList.length) &&
                <div className="document-none">
                  <div className="document-icon">
                    <img src={require(`@/static/module-doc/icon-none-doc.svg`)} alt=""></img>
                  </div>
                  <div className="document-none-text">
                    <span >拖入以添加</span>
                  </div>
                </div>
              }
              <WebBookmark onRef={this.onRef}></WebBookmark>
            </div>
        )
    }

}