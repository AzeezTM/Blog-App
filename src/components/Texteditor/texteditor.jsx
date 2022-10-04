import React, { Component } from 'react'
// import {useParams} from 'react-router'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
// import img from './file.png';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';

export default class texteditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

  render() {
    const {editorState} = this.state
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
        />
      {/* ge" /></div>  <input type="ima */}
      {/* <textarea disabled value={
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }></textarea> */}

      </div>

    );
  }
}

