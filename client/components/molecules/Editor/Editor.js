import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_TOOLS } from "./Tools";
import { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";

import FileBase64 from 'react-file-base64';
import { defaultValue } from "./DefaultText";

const Editor = () => {
  const [body, setBody] = useState()
  const [headerImg, setHeaderImg] = useState('')
  const [title, setTitle] = useState('')

  console.log(headerImg, title, body)

  let editor = null

  const onReady = () => {
    console.log('Editor.js is ready to work!')
  }

  const onChange = () => {
    console.log("Now I know that Editor's content changed!")
  }

  const onSave = async () => {
    try {
      const outputData = await editor.save()
      console.log('Article data: ', outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '900px', p: 0 }}>
        <TextField onChange={(e) => setTitle(e.target.value)} sx={{ mb: 1 }} fullWidth align="center" variant="outlined" label="Blog Title" />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', mt: 2, mb: 2 }}>
          <Typography mb={1} variant="body1">Set the Header Image</Typography>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setHeaderImg(base64)} />
        </Box>
        <Box sx={{bgcolor: 'black'}}>
          <EditorJs
            className="mainContainer"
            editorInstance={editorInstance => { editor = editorInstance }}
            tools={EDITOR_TOOLS}
            data={defaultValue}
            onReady={onReady}
            onChange={onChange}
            holder="custom-editor-container"
          >
            <div id="custom-editor-container"></div>
          </EditorJs>
          <Button
            variant="contained"
            sx={{
              mb: 5,
              mt: -60
            }}
            onClick={onSave}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Editor;