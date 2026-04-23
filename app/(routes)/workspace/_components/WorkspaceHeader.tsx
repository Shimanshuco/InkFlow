import { Button } from '@/components/ui/button'
import { Link as LinkIcon, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
  onSave?: () => void
  fileName?: string
}

function WorkspaceHeader({ onSave, fileName }: Props) {
  const displayName =
    fileName && fileName.trim() !== "" ? fileName : "Untitled File"

  return (
    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 border-b bg-white'>
      
      {/* Left */}
      <div className='flex items-center gap-2'>
        <Image src='/logo.png' alt='InkFlow' height={36} width={36} />
        <h2 className='font-semibold text-sm sm:text-base'>
          {displayName}
        </h2>
      </div>

      {/* Right */}
      <div className='flex gap-2 w-full sm:w-auto'>
        <Button
          className='flex-1 sm:flex-none h-8 text-xs gap-2 bg-yellow-500 hover:bg-yellow-600'
          onClick={() => onSave?.()}
        >
          <Save className='h-4 w-4' /> Save
        </Button>

        <Button className='flex-1 sm:flex-none h-8 text-xs gap-2 bg-blue-600 hover:bg-blue-700'>
          Share <LinkIcon className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader