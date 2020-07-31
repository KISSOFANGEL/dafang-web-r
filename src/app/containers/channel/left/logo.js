import React from 'react';
import './logo.scss'
import Dropdown from '&/dropdown/dropdown.js'
import Space from './space.js'
import Modal from '&/modal/modal.js'
import AddSpace from '@/app/containers/addSpace'
class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: [],
            modalVisible: false

        }
    }
    hide = () => {
        this.setState({
            modalVisible: false
        })
    };
    ok = () => {
        console.log("ojbk")
    };
    cancel = () => {
        console.log("cancel")
    };
    togglemodalVisible = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    componentDidMount() {
        this.getSpaces()
    }
    getSpaces = async () => {
        const res = await React.$request.get('/dafang/space/user')
        this.setState({ spaces: res.data })
        this.state.spaces.map(item => {
            if (item.space.type === 0) {
                React.$store.dispatch(React.$actions.setActivedSpace(item.space))
                // React.db.ls.set("activeSpace", item)
            }
        })
    }
    render() {
        const { spaces } = this.state
        return (
            <>
                <Dropdown trigger={
                    <div className="wrap-logo">
                        <img className="avator" src={require('@/static/logo.png')} alt="logo" />
                        <div className="userName">渣渣辉</div>
                        <div className="iconfont iconheader_flash"></div>
                    </div>
                } dropdownmenu={
                    <Space spaces={spaces} togglemodalVisible={this.togglemodalVisible} />
                }></Dropdown>
                <Modal visible={this.state.modalVisible}
                    hide={this.hide}
                    onOK={this.ok}
                    onCancel={this.cancel}
                    >
                    <AddSpace></AddSpace>
                </Modal>
            </>
        )
    }
}
export default Logo