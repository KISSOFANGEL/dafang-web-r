import React, { Component } from 'react'
import './index.scss';
import CreateModulePop from './createModule'
import CardOverview from './cardOverview.js'
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
    React.$store.subscribe(this.getModules)
  }
  getModules = async () => {
    const activedPanel = React.$store.getState().panel.activedPanel
    if (activedPanel && activedPanel.id) {
      let res = await React.$request.get(`/dafang/module/panel/${activedPanel.id}`)
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
        {clientX > 0 && clientY > 0 && <div className="pop" style={{ left: clientX + 5 + "px", top: clientY + 5 + "px" }} onMouseEnter={() => this.activeModule(true)} onMouseLeave={() => this.activeModule(false)} >
          <CreateModulePop confirm={e => this.createConfirm(e)} />
        </div>}
       
       
      </div >
    )
  }
}
