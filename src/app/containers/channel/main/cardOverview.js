import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import './cardOverview.scss'

class Channels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            modules: [],
            curModuleId: ''
        }
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
    componentDidMount() {
        React.$store.subscribe(this.getModules)
    }
    getModules = async () => {
        const activedPanel = React.$store.getState().panel.activedPanel
        if (activedPanel && activedPanel.id) {
            let res = await React.$request.get(`/dafang/module/panel/${activedPanel.id}`)
            this.setState({ modules: res.data })
            this.state.modules.map(async m => {
                let content = await this.getModuleContent(m.id)
                if (m.type === 1 && content) {
                    this.setState({ editorState: EditorState.createWithContent(convertFromRaw(content)) })
                    // EditorState.push(this.state.editorState, content)
                }
            })
        }
    }

    getModuleContent = async (id) => {
        let res = await React.$request.get(`/dafang/richText/module/${id}`)
        return res.data ? JSON.parse(res.data.content) : ''
    }
    render() {
        let { showPre } = this.props
        let { modules } = this.state
        return (
            <div className="wrap-module">
                {
                    modules.map((m, i) =>
                        <div className="card" key={i}>
                            {m.type === 1 && <Editor
                                editorState={this.state.editorState}
                                onChange={e => this.onChange(e, m)}
                            />}
                        </div>)}
                {
                    showPre && <div className="pre card"></div>
                }

            </div>


        )
    }
}

export default Channels