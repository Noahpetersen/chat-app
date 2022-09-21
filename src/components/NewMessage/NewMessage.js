import React, { useState } from 'react'

import NewMessageBtn from './NewMessageBtn'
import NewMessageInput from './NewMessageInput'
import classes from './NewMessage.module.css'


const NewMessage = () => {
    const [enteredMessage, setEntereMessage]  = useState('')

    const messageChangeHandler = (event) => {
        setEntereMessage(event.target.value)
    }

    const messageIsValid = enteredMessage.trim() === ''

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        setEntereMessage('')
    }

  return (
    <form className={classes['new-message']}>
        <NewMessageInput onChange={messageChangeHandler}
        value={enteredMessage}/>
        <NewMessageBtn onSubmit={formSubmissionHandler} disabled={messageIsValid}/>
    </form>
  )
}

export default NewMessage