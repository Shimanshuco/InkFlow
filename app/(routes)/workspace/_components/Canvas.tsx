import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw"
import { FILE } from '../../dashboard/_components/FileList'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

function Canvas({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {

    const [whiteBoardData, setWhiteBoardData] = useState<any>()
    const updateWhiteboard = useMutation(api.files.updateWhiteboard)

    useEffect(() => {
        onSaveTrigger && saveWhiteboard()
    }, [onSaveTrigger])

    const saveWhiteboard = () => {
        updateWhiteboard({
            _id: fileId,
            whiteboard: JSON.stringify(whiteBoardData)
        })
    }

    return (<div className="h-[500px] md:h-[calc(100vh-80px)] w-full">
        {fileData && (
            <Excalidraw
                initialData={{
                    elements: fileData?.whiteboard && JSON.parse(fileData.whiteboard)
                }}
                onChange={(elements) => setWhiteBoardData(elements)}
            > <MainMenu>
                    <MainMenu.DefaultItems.ClearCanvas /> </MainMenu>


                <WelcomeScreen>
                    <WelcomeScreen.Center>
                        <WelcomeScreen.Center.MenuItemHelp />
                    </WelcomeScreen.Center>
                </WelcomeScreen>
            </Excalidraw>
        )}
    </div>


    )
}

export default Canvas
