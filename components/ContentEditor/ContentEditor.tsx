import { useState } from 'React'
import { Editor, EditorState, convertFromRaw, RawDraftContentState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'

type ContentEditorType = {
  onSave: (content: object) => void
}

const ContentEditor = ({ onSave }: ContentEditorType) => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(emptyContentState))

  return (
    <div>
      <Editor
        editorKey={'editorKey'}
        editorState={editorState}
        onChange={(data) => {
          console.log('data: ', data)
          const content = editorState.getCurrentContent();
          console.log('content: ', convertToRaw(content));
        }}
      />
    </div>
  )
}

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
    },
  ],
} as unknown as RawDraftContentState)

export default ContentEditor
