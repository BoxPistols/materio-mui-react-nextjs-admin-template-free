// Next Import
import dynamic from 'next/dynamic'

// Types
import type { EditorProps } from 'react-draft-wysiwyg'

// ! To avoid 'Window is not defined' error
const ReactDraftWysiwyg = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false
})

export default ReactDraftWysiwyg
