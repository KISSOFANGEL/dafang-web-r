import React from 'react';
import './index.scss';
import Logo from './logo.js'
import Channels from './channels'
class Left extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="wrap">
                <Logo />
                <div className="channels">
                    <Channels />
                </div>
            </div>

        )
    }
}
export default Left