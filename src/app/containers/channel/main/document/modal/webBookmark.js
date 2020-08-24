import React, { Component } from 'react';
import { Modal } from 'antd';
import './webBookmark.scss';

export default class webBookmark extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
      url: "",
      iframeUrl: ""
    }
  }

  setUrl = (e) => {
    e.preventDefault()
    let url = (e.target.value || "").trim()
    let iframeUrl = url;
    if(url && url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
      iframeUrl = "http://"+iframeUrl
    }
    this.setState({
      url: url,
      iframeUrl: iframeUrl
    })
  }
  
  componentDidMount(){
    this.props.onRef(this)
  }

  showModal = () => {
    this.setState({
      visible: true,
      url: "",
      iframeUrl: ""
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.addBookmark({
      icon: "@/static/icon/doc/bookmark.svg",
      name: "示例标题示例标题",
      crUser: "张家辉"
    })
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Modal
          title={[]}
          footer={null}
          closable={false}
          visible={this.state.visible}
          mask={false}
          wrapClassName="web-bookmark-modal-wrap"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="input-wrap">
            <input type="text" name="url" value={this.state.url} onChange={this.setUrl} placeholder="请输入链接" className="input" ref={refs => this.input = refs} autoFocus />
            <div className={`input-desc ${this.state.url? "input-desc-active": null}`} onClick={this.handleOk}>
              <img className="icon-enter icon-gray" src={require('@/static/icon/enter-gray.svg')} alt="" />
              <img className="icon-enter icon-black" src={require('@/static/icon/enter-black.svg')} alt="" />
              <span className="create-text">创建</span>
            </div>
          </div>
          {this.state.iframeUrl && 
          <div className="web-wrap">
            <iframe title="页面预览" src={this.state.iframeUrl} width="100%" height="100%" className="iframe" />
          </div>
          }
        </Modal>
      </>
    );
  }
}
