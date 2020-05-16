import React from 'react';
import './channels.scss'
import { Link } from 'react-router-dom'
import Channel from './channelComponent'
class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.createChannel = this.createChannel.bind(this)
    }
    createChannel() {

    }
    render() {
        return (
            <div className="wrap-cards">
                <div className="add-channel">
                    <Link to="/channel/add">
                        <div className="btn" onClick={this.createChannel}>
                            <div className="iconfont iconaddboard"></div>
                            <div className="desc"> 新建频道</div>

                        </div>
                    </Link>
                </div>
                <Channel></Channel>
                <Channel type={'normal'}></Channel>
                <Channel type={'outside'}></Channel>
                <Channel type={'folder'}></Channel>
            </div>

        )
    }
}

export default Channels