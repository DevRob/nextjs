import Button from '@mui/material/Button'
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import { useState } from 'react'
import { Card } from '../card/Card'
import IconButton from "@mui/material/IconButton"
import { IoMdClose } from 'react-icons/io'
import { BiLinkExternal } from  'react-icons/bi'
import { Media } from './Media'

interface Props {
  title: string,
  description: string,
  url: string,
  srcUrl: string,
  svg: any,
  media: any,
}

export default function CardModal(props: Props) {
  const { title, description, url, srcUrl, svg, media} = props
  const [openDialog, handleDisplay] = useState(false)

  const handleClose = () => {
    handleDisplay(false)
  }

  const openDialogBox = () => {
    handleDisplay(true)
  }

  return (
    <>
      <button className="scale-75" onClick={openDialogBox} aria-label={title}>
        <Card svg={svg} />
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle>
          {title}
          <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={handleClose}
          >
            <IoMdClose />
          </IconButton>
        </DialogTitle>
        <div className="px-4">
          <a href={url} target="_blank" data-disabled={!url} className="relative rounded-md w-80 h-60 mx-auto overflow-hidden block">
            <Media imageName={media}></Media>
          </a>
          <div className="p-3">
            <p className="leading-8">{description}</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-3 p-3 mt-auto">
          <a
            href={url}
            target="_blank"
            data-disabled={!url}
            className='Link bg-teal-500 text-slate-50 border border-teal-500 hover:bg-white hover:text-teal-500 py-2 px-2 rounded-md'>
              example
              <BiLinkExternal className="inline-block ml-3"/>
          </a>
          <a
            href={srcUrl}
            target="_blank"
            data-disabled={!srcUrl}
            className='Link bg-teal-500 text-slate-50 border border-teal-500 hover:bg-white hover:text-teal-500 py-2 px-2 rounded-md'>
              source code
              <BiLinkExternal className="inline-block ml-3"/>
            </a>
        </div>
      </Dialog>
    </>
  )
}