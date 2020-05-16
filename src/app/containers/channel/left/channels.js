import React from 'react';
import './channels.scss'
import { Link } from 'react-router-dom'
import Channel from './channelComponent'
class Channels extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                <Channel></Channel>
                <Channel type={'normal'}></Channel>
                <Channel type={'outside'}></Channel>
                <Channel type={'folder'}></Channel>
            </div>

        )
    }
}

export default Channels