import React, { Component } from 'react';
import './overview.scss'
class overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modules: props.modules,
            activeModue: 0,

        }
    }
    setActiveModule = (i) => {
        this.setState({ activeModue: i })
    }

    render() {
        const { modules, activeModue } = this.state
        return (
            <div className="wrap-addchannel-overview">
                <div className="modules">
                    {modules.map((item, i) =>
                        <div key={i}>
                            <div className={`module pointer ${activeModue === i ? 'active' : null}`}  onClick={e => { this.setActiveModule(i) }}>
                                <div className="desc">{item.desc}</div>
                            </div>
                        </div>
                    )}
                </div>
                <img src={require(`@/static/add-channel/preview_${modules[activeModue].fileName}.png`)} alt=""></img>
            </div>
        );
    }
}

export default overview;
