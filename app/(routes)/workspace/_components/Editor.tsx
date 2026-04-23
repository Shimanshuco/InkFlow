"use client"
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
// @ts-ignore
import Header from '@editorjs/header'
// @ts-ignore
import List from "@editorjs/list"
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Paragraph from '@editorjs/paragraph'
// @ts-ignore
import Warning from '@editorjs/warning'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { FILE } from '../../dashboard/_components/FileList'

const rawDocument = {
  time: Date.now(),
  blocks: [],
  version: "2.8.1"
}

function Editor({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {
  const ref = useRef<EditorJS>()
  const updateDocument = useMutation(api.files.updateDocument)

  useEffect(() => {
    fileData && initEditor()
  }, [fileData])

  useEffect(() => {
    onSaveTrigger && onSaveDocument()
  }, [onSaveTrigger])

  const initEditor = () => {
    if (ref.current) return

    const editor = new EditorJS({
      holder: 'editorjs',
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
      tools: {
        header: { class: Header },
        list: { class: List, inlineToolbar: true },
        checklist: { class: Checklist, inlineToolbar: true },
        paragraph: Paragraph,
        warning: Warning,
      },
    })

    ref.current = editor

  }

  const onSaveDocument = () => {
    if (!ref.current) return

    ref.current.save().then((outputData) => {
      updateDocument({
        _id: fileId,
        document: JSON.stringify(outputData)
      }).then(() => toast('Document Updated!'))
    })

  }

  return (<div className="w-full px-4 sm:px-6 md:px-10 py-4"> <div id="editorjs" className="max-w-3xl mx-auto"></div> </div>
  )
}

export default Editor
