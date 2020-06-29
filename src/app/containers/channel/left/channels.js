import React from 'react';
import './channels.scss'
import { Link } from 'react-router-dom'
import Channel from './channelComponent'
class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
    }
    componentDidMount() {
        this.getChannels()
    }
    getChannels = async () => {
        let spaceid = React.db.ls.get("activeSpace") ? React.db.ls.get("activeSpace").space.id : -1
        let res = await React.$request.get(`/dafang/channel/list/${spaceid}`)
        this.setState({ channels: res.data.singleList })
    }
    render() {
        const { channels } = this.state
        return (
            <div className="wrap-cards">
                <Link to="/channel/add">
                    <div className="add-channel">
                        <div className="btn" >
                            <div className="iconfont iconaddboard"></div>
                            <div className="desc"> 新建频道</div>
                        </div>

                    </div>
                </Link>
                {
                    channels.map((channel, index) => <Channel type={index === 0 ? 'active' : 'normal'} key={index} channel={channel}></Channel>)
                }

                {/* <Channel type={'normal'}></Channel>
                <Channel type={'outside'}></Channel>
                <Channel type={'folder'}></Channel> */}
            </div>

        )
    }
}

export default Channels