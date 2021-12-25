import React, {useContext} from 'react'
import MainContext from '../context/MainContext'
import {getContrastYIQ} from '../helper'

const Copied = () => {
  const {copied} = useContext(MainContext)
  return (
    <div className="copied" style={{'--bgColor': `#${copied}`, '--textColor': `${getContrastYIQ(copied)}`}}>
      Copied to {copied} Clipboard
    </div>
  )
}

export default Copied
