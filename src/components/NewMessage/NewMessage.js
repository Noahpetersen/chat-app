import React, { useState } from "react";

import NewMessageBtn from "./NewMessageBtn";
import NewMessageInput from "./NewMessageInput";
import classes from "./NewMessage.module.css";
import useHttp from "../../hooks/use-http";

const NewMessage = (props) => {
  const { isLoading, error, sendRequest: postMessage } = useHttp();
  const [enteredMessage, setEnteredMessage] = useState("");
 

  

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  
  const createMessage = () => {

    
      const createdId = enteredMessage.name
      const createdText = enteredMessage
      const sendFromId = props.userId
      const createdMessage = {id: createdId, text: createdText, userId: sendFromId}
  }

  const messageIsValid = enteredMessage.trim() === "";

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    
    postMessage({
      url: "https://chat-app-a5173-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      method: "POST",
      headers: { "content-type": "application/json" },
      body: {text: enteredMessage, userId: props.userId},
    }, createMessage());


    setEnteredMessage("");

  };



  return (
    <form className={classes["new-message"]}>
      <NewMessageInput onChange={messageChangeHandler} value={enteredMessage} />
      <NewMessageBtn
        onSubmit={formSubmissionHandler}
        disabled={messageIsValid}
      />
    </form>
  );
};

export default NewMessage;
