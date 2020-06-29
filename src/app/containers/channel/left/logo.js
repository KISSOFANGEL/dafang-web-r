import React from 'react';
import './logo.scss'
import Dropdown from '&/dropdown/dropdown.js'
import Space from './space.js'
class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: []
        }
    }
    componentDidMount() {
        this.getSpaces()
    }
    getSpaces = async () => {
        const res = await React.$request.get('/dafang/space/user', {})
        this.setState({spaces:res.data})
       this.state.spaces.map(item=>{
           if(item.space.type===0&&!React.db.ls.get("activeSpace")){
               React.db.ls.set("activeSpace",item)
           }
       })
    }
    render() {
        const {spaces} = this.state
        return (
            <>
                <Dropdown trigger={

                    <div className="wrap-logo">
                        <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                        <div className="userName">渣渣辉</div>
                        <div className="iconfont iconheader_flash"></div>
                    </div>
                } dropdownmenu={
                    <Space spaces={spaces}/>
                }></Dropdown>

            </>
        )
    }
}
export default Logo