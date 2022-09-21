import React from "react";

import Chat from "../../UI/Chat";
import NewMessage from "../NewMessage/NewMessage";
import Message from "./Message";
import classes from "./UserScreen.module.css"




const UserScreen = (props) => {

  
  return (
    <div className= {classes.userscreen}>
      <Chat>
        <ul>
          <Message  className={classes.test} message="Hey"/>
          <Message message="Hey" className={classes.message}/>
        </ul>
      </Chat>
      <NewMessage/>
    </div>
  );
};

export default UserScreen;
