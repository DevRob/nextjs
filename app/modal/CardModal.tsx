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
        <div className="p-3">
          <div className="relative rounded-md w-80 h-60 mx-auto overflow-hidden">
            <Media imageName={media}></Media>
          </div>
          <div className="p-3">
            <p className="leading-8">{description}</p>
          </div>
        </div>
        <div className="flex justify-end p-3">
          <a
            href={url}
            data-disabled={!url}
            className='bg-teal-500 text-white border border-teal-500 hover:bg-white hover:text-teal-500 py-2 px-5 rounded-md ml-8'>
              example
              <BiLinkExternal className="inline-block ml-3"/>
          </a>
          <a
            href={srcUrl}
            data-disabled={!srcUrl}
            className='bg-teal-500 text-white border border-teal-500 hover:bg-white hover:text-teal-500 py-2 px-5 rounded-md ml-8'>
              source code
              <BiLinkExternal className="inline-block ml-3"/>
            </a>
        </div>
      </Dialog>
    </>
  )
}