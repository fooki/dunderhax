import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-nord_dark";

function onChange(newValue) {

}

export default function Editor() {
  return(
    <div className="editor">
      <AceEditor
        mode="java"
        theme="nord_dark"
        tablsize={2}
        name="DunderEditor"
        fontSize={32}
        onChange={onChange}
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
}
