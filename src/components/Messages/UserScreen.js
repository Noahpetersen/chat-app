import React from "react";
import Chat from "../../UI/Chat";
import NewMessage from "../NewMessage/NewMessage";
import Message from "./Message";
import classes from "./UserScreen.module.css"


const UserScreen = (props) => {

  const classTest = "message"
  return (
    <div className= {classes.userscreen}>
      <Chat>
        <ul>
          <Message  message="Hey"/>
          <Message message="Hey" class={classes.message}/>
        </ul>
      </Chat>
      <NewMessage/>
    </div>
  );
};

export default UserScreen;
