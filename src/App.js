// import React from 'react'
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/index.css'

// // braft-editor 的 value 必须传入的是一个 braft-editor 的

// export default class EditorDemo extends React.Component {
//   state = {
//       editorState: BraftEditor.createEditorState("<p>哈哈哈哈哈</p>")
//   }

//   handleEditorChange = (editorState) => {
//     console.log(editorState.toHTML(), 'editorState')
//     this.setState({ editorState })
//   }

//   render () {

//     const { editorState } = this.state

//     return (
//       <div className="my-component">
//         <BraftEditor
//           value={editorState}
//           onChange={this.handleEditorChange}
//           // onSave={this.submitContent}
//         />
//       </div>
//     )

//   }

// }

import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import 'braft-editor/dist/index.css'

export default class Demo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  clearContent = () => {
    this.setState({
      editorState: ContentUtils.clear(this.state.editorState)
    })
  }

  insertText = () => {
    this.setState({
      editorState: ContentUtils.insertText(this.state.editorState, 'Hello World!')
    })
  }
  
  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const extendControls = [
      {
        key: 'clear-editor',
        type: 'button',
        text: '清空编辑器',
        onClick: this.clearContent
      }, {
        key: 'insert-text',
        type: 'button',
        text: '插入自定义文本',
        onClick: this.insertText
      }
    ]

    return (
      <BraftEditor
       value={this.state.editorState}
       onChange={this.handleChange}
      //  extendControls={extendControls}
      />
    )

  }

}