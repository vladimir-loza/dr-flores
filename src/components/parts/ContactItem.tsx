import { useState } from 'react'
import { IconType, icons } from 'react-icons'
import {MdContentCopy} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'

interface Props {
  title: String,
  contact: String,
  Icon: IconType,
  copyValue?: string
}

export const ContactItem = ({title, contact, Icon, copyValue}: Props) => {
  const [hoverClipboard, setHoverClipboard] = useState<boolean>(false)
  
  const showCopyIcon = () => {
    setHoverClipboard(true)
  }

  const hideCopyIcon = () => {
    setHoverClipboard(false)
  }

  const copyToClipboard = () => {
    if (!copyValue) return
    navigator.clipboard.writeText(copyValue)
  }


  return (
    <div className='w-80 flex flex-row justify-evenly px-5 mx-5 my-10'>
      <div className="icon-container flex items-center justify-center">
        <Icon className='bg-cyan-100 text-cyan-700 p-2 rounded' size="3rem"/>
      </div>
      <div className="contact-container w-80 ml-3">
        <h4 className='text-[#1F63ED] font-bold'>{title}</h4>
        <p 
          className='text-emerald-500 font-bold cursor-pointer' 
          onClick={copyToClipboard}
          onMouseEnter={showCopyIcon}
          onMouseLeave={hideCopyIcon}
        >
          {contact}
          {
            hoverClipboard && <MdContentCopy className='inline-block ml-2' />
          } 
        </p>
      </div>
    </div>
  )
}
