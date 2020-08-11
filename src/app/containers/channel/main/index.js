import React, { Component } from 'react'
import './index.scss';
import CreateModulePop from './createModule'
import CardOverview from './cardOverview.js'
import DefalutPanel from '../../addPanel/index'
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientX: 0,
      clientY: 0,
      showpre: false,
      modules: [],
      curModuleId: ''
    }
  }

  componentDidMount() {
    this.getModules()
    React.$store.subscribe(this.getModules)
  }
  getModules = async () => {
    const activedPanel = React.$store.getState().panel.activedPanel
    if (activedPanel && activedPanel.id) {
      let res = await React.$request.get(`/dafang/module/panel/${activedPanel.id}`)

      // 调试代码：插入文件数据
      res.data.unshift({
        id: 'f5582d41a7be4cd980c47cd076162123',
        name: '文件模块',
        type: 2
      })
      this.setState({ modules: res.data })
    }
  }
  dbclick = (e) => {
    let { clientX, clientY } = e
    this.setState({ clientX, clientY })
  }
  resetPop = () => {
    this.setState({ clientX: 0, clientY: 0 })
  }
  activeModule = v => {
    this.setState({ showpre: v })

  }
 
  createConfirm = async v => {
    const activedPanel = React.$store.getState().panel.activedPanel
    let module = { name: v.text, type: v.type }
    await React.$request.post(`/dafang/module/create/${activedPanel.id}`, { ...module })
    await this.getModules()
  }
  render() {
    let { clientX, clientY, showpre, modules } = this.state
    return (
      <div className="wrap-main" onDoubleClick={this.dbclick} onClick={this.resetPop}>
        {modules.map((m, i) =>
          <CardOverview module={m} key={i} getModules = {()=>{this.getModules()}}/>)
        }
        {modules.length === 0 &&
          <DefalutPanel />
        }
        {clientX > 0 && clientY > 0 && <div className="pop" style={{ left: clientX + 5 + "px", top: clientY + 5 + "px" }} onMouseEnter={() => this.activeModule(true)} onMouseLeave={() => this.activeModule(false)} >
          <CreateModulePop confirm={e => this.createConfirm(e)} />
        </div>}
       
       
      </div >
    )
  }
}
