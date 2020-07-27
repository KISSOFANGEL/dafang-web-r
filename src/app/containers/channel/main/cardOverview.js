import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils } from 'draft-js';
import './cardOverview.scss'
import Toolbar from './toolbar'
import OutsideClickHandler from 'react-outside-click-handler';

class Channels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            isEmpty: false,
            richTextContent: '',
            showToolbar: false,
            clientX: 0,
            clientY: 0

        }
        this.editorRef = React.createRef();
    }
    componentDidMount() {
        this.getModuleContent(this.props.module.id)
    }
    onChange = (editorState, module) => {
        this.setState({ editorState });
        module && this.setState({ curModuleId: module.id })
        let content = editorState.getCurrentContent()
        this.saveRichText(convertToRaw(content))
    };
    saveRichText = async (content) => {
        if (!this.state.curModuleId) return
        let res = await React.$request.post(`/dafang/richText/createOrUpdate/${this.state.curModuleId}`, { content: JSON.stringify(content) })
    }


    getModuleContent = async (id) => {
        let res = await React.$request.get(`/dafang/richText/module/${id}`)
        let content = res.data ? JSON.parse(res.data.content) : ''
        if (this.props.module.type === 1 && content)
            this.setState({ editorState: EditorState.createWithContent(convertFromRaw(content)) })
        let text = this.state.editorState.getCurrentContent().getPlainText();
        this.setState({ isEmpty: !text, richTextContent: text })
    }
    createRichText = (e) => {
        e.stopPropagation();
        let { clientX, clientY } = e
        this.setState({ isEmpty: false, showToolbar: true, clientX, clientY })
        setTimeout(() => {
            this.editorRef.current.focus()
        }, 0);
    }
    clickOutside = () => {
        if (this.state.editorState.getCurrentContent().getPlainText()) return
        this.setState({ isEmpty: true, showToolbar: false })
    }
    // 切换块级样式
    toggleBlockType = (blockType) => {
        console.log(blockType);
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }
    getBlockStyle = (block) => {
        switch (block.getType()) {
            case 'header-one': return 'RichEditor-header-one';
            default: return null;
        }
    }

    render() {
        let { module } = this.props
        let { editorState, isEmpty, showToolbar, clientX, clientY } = this.state
        return (
            <OutsideClickHandler onOutsideClick={this.clickOutside}>
                <div className="wrap-module" onDoubleClick={e => this.createRichText(e)}>
                    {
                        <div className="card">
                            {module.type === 1 && !isEmpty && <Editor
                                ref={this.editorRef}
                                editorState={editorState}
                                onChange={e => this.onChange(e, module)}
                                blockStyleFn={this.getBlockStyle}
                                placeholder="输入文本或插入图片"
                            />}
                            {module.type === 1 && isEmpty &&
                                <div className="empty-rich-text" >
                                    <i className="iconfont iconrichtext_empty"></i>
                                    <div className="desc">双击输入文本或插入图片</div>
                                </div>
                            }
                        </div>}

                    <div className="toolbar" style={{ marginLeft: 20 + "px", marginTop: 75 + "px" }} >
                        {showToolbar && <Toolbar handleCK={this.toggleBlockType} />}
                    </div>
                    {
                        // showPre && <div className="pre card"></div>
                    }

                </div>
            </OutsideClickHandler>

        )
    }
}

export default Channels