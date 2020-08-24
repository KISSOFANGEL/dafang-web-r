import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import WebBookmark from './modal/webBookmark'

export default class index extends Component{
    constructor(props){
        super(props)
        this.state = {
          documentList: []
        }
    }

    onRef = (ref) => {
        this.child = ref
    }

    handleMenuClick = e => {
      console.log('click ', e);
      this.child.showModal();
    }

    addBookmark = (bookmark) => {
      let documentList = this.state.documentList || [];
      documentList.push(bookmark);
      this.setState({
        documentList: documentList
      })
    }

    render(){
        const menu = (
          <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="0" disabled>
              <img className="menu-item-icon" src={require('@/static/icon/file.svg')} alt="" />
              <span className="menu-item-text">文档</span>
            </Menu.Item>
            <Menu.Item key="1">
              <img className="menu-item-icon" src={require('@/static/icon/bookmark.svg')} alt="" />
              <span className="menu-item-text">网页书签</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
              <img className="menu-item-icon" src={require('@/static/icon/upload.svg')} alt="" />
              <span className="menu-item-text">上传</span>
            </Menu.Item>
          </Menu>
        );
        return(
            <div className="document-wrap">
              <Dropdown placement="bottomCenter" overlay={menu} overlayClassName="doc-add-dropdown">
                <PlusOutlined className="icon-add" />
              </Dropdown>
              {(!this.state.documentList || this.state.documentList.length === 0) &&
                <div className="document-none">
                  <div className="document-icon">
                    <img src={require(`@/static/module-doc/icon-none-doc.svg`)} alt=""></img>
                  </div>
                  <div className="document-none-text">
                    <span >拖入以添加</span>
                  </div>
                </div>
              }
              {(this.state.documentList && this.state.documentList.length > 0) &&
                <div className="doc-list-wrap">
                  {
                    this.state.documentList.map((item, index) => {
                      return <div className="doc-item">
                        <img className="doc-item-icon" src={require(`@/static/icon/doc/bookmark.svg`)} alt=""></img>
                        <span className="doc-item-name">{index + "-" + item.name}</span>
                        <span className="doc-writer">添加</span>
                        <span className="doc-writer" style={{'margin-right': '12px'}}>{item.crUser}</span>
                      </div>
                    })
                  }
                </div>
              }
              <WebBookmark onRef={this.onRef} addBookmark={this.addBookmark}></WebBookmark>
            </div>
        )
    }
}