import React, { Component } from 'react';
import { Modal } from 'antd';
import { EnterOutlined } from '@ant-design/icons';
import './webBookmark.scss';

export default class webBookmark extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    }
  }

  componentDidMount(){
    this.props.onRef(this)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
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
          wrapClassName="web-bookmark-modal-wrap"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="input-wrap">
            <input className="input" ref={refs => this.input = refs} autofocus="autofocus" />
            <EnterOutlined />
            <span>创建</span>
          </div>
        </Modal>
      </>
    );
  }
}
