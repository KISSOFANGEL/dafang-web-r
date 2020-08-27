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
            modalVisible: false,
            user:null

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
        this.unsubscribe = React.$store.subscribe(this.getSpaces)
        this.setState({ user: React.db.ls.get("userToken") ? React.db.ls.get("userToken").user : null})
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

    getSpaces = async () => {
        let addSpace = React.$store.getState().addSpace.addSpace
        if (addSpace !== 2){
            const res = await React.$request.get('/dafang/space/user')
            this.setState({ spaces: res.data })
            this.state.spaces.map(item => {
                if (item.space.type === 0) {
                    React.$store.dispatch(React.$actions.setActivedSpace(item.space))
                    // React.db.ls.set("activeSpace", item)
                }
            })

            React.$store.dispatch(React.$actions.setAddSpace(Number(2)))
        }
    }
    render() {
        const { spaces,user } = this.state
        const imgUrl = user ? "./" + user.pic : null
        return (
            <>
                <Dropdown trigger={
                    <div className="wrap-logo">
                        <img className="avator" src={imgUrl ? imgUrl : require('@/static/logo.png')} alt="logo" />
                    <div className="userName">{user ? user.name : ''}</div>
                        <div className="iconfont iconheader_flash"></div>
                    </div>
                } dropdownmenu={
                    <Space spaces={spaces} togglemodalVisible={this.togglemodalVisible}  />
                }></Dropdown>
                <Modal visible={this.state.modalVisible}
                    hide={this.hide}
                    onOK={this.ok}
                    onCancel={this.cancel}
                    >
                    <AddSpace togglemodalVisible={this.togglemodalVisible} parent={this}></AddSpace>
                </Modal>
            </>
        )
    }
}
export default Logo