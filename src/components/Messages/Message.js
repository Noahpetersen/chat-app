import React from 'react'

import classes from './Message.module.css'

const Message = (props) => {
  return (
    <li>{props.message}</li>
  )
}

export default Message