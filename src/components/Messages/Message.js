import React from 'react'

import classes from './Message.module.css'

const Message = (props) => {
  return (
    <li id={props.id}  className={props.class}>{props.message}</li>
  )
}

export default Message