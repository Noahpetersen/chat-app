import React, { useEffect, useState } from "react";

import Chat from "../../UI/Chat";
import NewMessage from "../NewMessage/NewMessage";
import Message from "./Message";
import classes from "./UserScreen.module.css";
import useHttp from "../../hooks/use-http";

const UserScreen = (props) => {
  const { isLoading, error, sendRequest: fetchMessages } = useHttp();
  const [messages, setMessages] = useState([])
  const [userId, setUserId] =  useState('')
  
  useEffect(() => {
    setUserId(props.id)
  },[]); 

  
  let messageClass 
  
  // if (userId === 'user1') {
  //   messageClass = classes.user1
  // } else {
  //   messageClass = classes.user2
  // }





  useEffect(() => {
    const showMessage = (messages) => {

      const loadedMessages = [];

      for (const messageKey in messages) {
        loadedMessages.push({id: messageKey, text: messages[messageKey].text, userId: messages[messageKey].userId})
      }
      console.log(loadedMessages)
    
     setMessages(loadedMessages)
     
    };

    fetchMessages(
      {
        url: "https://chat-app-a5173-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      },
      showMessage
    );

    
    
 
  },[]);

 

  
  return (
    <div className={classes.userscreen}>
      <Chat>
        <ul>
          {messages.map((message) =>  
            
          (<Message key = {message.id} id={message.id} message={message.text} className={messageClass}/>))}
        </ul>
      </Chat>
      <NewMessage userId = {userId} />
    </div>
  );
};

export default UserScreen;
