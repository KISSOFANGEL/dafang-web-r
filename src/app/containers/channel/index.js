import React from 'react';
import './index.scss';
import Left from './left/index.js'
import Main from './main/index.js'
import Navi from './navigator/index'
import AddSpace from '../addSpace/index'

export default class Channels extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mask: false
        }
    }
    changeMask() {
        this.setState({ mask: !this.state.mask })
        
    }
    componentDidMount() {
        
        React.$store.subscribe(() => {
            let show = React.$store.getState().mask
           
            if (show.mask === "show"){
                this.changeMask()
            }

        })
    }

    render(){
        const { mask } = this.state
        return(
            <div className="container-main">
                <div className="left">
                    <Left />
                </div>
                <div className="right">
                    <Navi />
                    <div className="cards"><Main /></div>
                </div>
                { mask &&
                    <AddSpace changeMask={e => { this.changeMask(e) }}></AddSpace>
                }
                   
               

            </div>

        )
    }


}

