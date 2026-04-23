"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import Canvas from '../_components/Canvas'
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { FILE } from '../../dashboard/_components/FileList'

function Workspace({ params }: any) {
const [triggerSave, setTriggerSave] = useState(false)
const convex = useConvex()
const [fileData, setFileData] = useState<FILE | any>()

useEffect(() => {
params.fileId && getFileData()
}, [])

const getFileData = async () => {
const result = await convex.query(api.files.getFileById, {
_id: params.fileId
})
setFileData(result)
}

return ( <div className="flex flex-col h-screen">


  <WorkspaceHeader
    onSave={() => setTriggerSave(!triggerSave)}
    fileName={fileData?.fileName}
  />

  <div className="flex flex-col md:flex-row flex-1 overflow-hidden">

    <div className="flex-1 overflow-auto border-b md:border-b-0 md:border-r">
      <Editor
        onSaveTrigger={triggerSave}
        fileId={params.fileId}
        fileData={fileData}
      />
    </div>

    <div className="flex-1 overflow-auto">
      <Canvas
        onSaveTrigger={triggerSave}
        fileId={params.fileId}
        fileData={fileData}
      />
    </div>

  </div>
</div>


)
}

export default Workspace
