import React from 'react'

import classes from './NewMessageInput.module.css'

const ChatInput = (props) => {

  

  return (
    <input type= "text" className={classes.input} onChange={props.onChange} value ={props.value}></input>
  )
}

export default ChatInput