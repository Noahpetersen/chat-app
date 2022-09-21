import React from 'react'



const Message = (props) => {

  return (
    <li id={props.id}  className={`${props.className}`}>{props.message}</li>
  )
}

export default Message