import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import './cardOverview.scss'
import OutsideClickHandler from 'react-outside-click-handler';

class Channels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            isEmpty: false,
            richTextContent: ''
        }
        this.editorRef = React.createRef();
    }
    componentDidMount() {
        this.getModuleContent(this.props.module.id)
    }
    onChange = (editorState, module) => {
        this.setState({ editorState, curModuleId: module.id });
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
        this.setState({ isEmpty: false })
        setTimeout(() => {
            this.editorRef.current.focus()
        }, 0);
    }
    clickOutside = () => {
        if (this.state.editorState.getCurrentContent().getPlainText()) return
        this.setState({ isEmpty: true })
    }
   

    render() {
        let { module } = this.props
        let { editorState, isEmpty } = this.state
        return (
            <OutsideClickHandler onOutsideClick={this.clickOutside}>
                <div className="wrap-module" onDoubleClick={e => this.createRichText(e)}>
                    {
                        <div className="card">
                            {module.type === 1 && !isEmpty && <Editor
                            ref={this.editorRef} 
                                editorState={editorState}
                                onChange={e => this.onChange(e, module)}
                            placeholder="输入文本或插入图片"
                            />}
                            {module.type === 1 && isEmpty &&
                                <div className="empty-rich-text" >
                                    <i className="iconfont iconrichtext_empty"></i>
                                    <div className="desc">双击输入文本或插入图片</div>
                                </div>
                            }
                        </div>}
                    {
                        // showPre && <div className="pre card"></div>
                    }

                </div>
            </OutsideClickHandler>

        )
    }
}

export default Channels