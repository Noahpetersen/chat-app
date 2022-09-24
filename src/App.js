import React from "react";
import classes from "./App.module.css";
import UserScreen from "./components/Messages/UserScreen";

function App() {
  return (
    <div className={classes.app}>
      <UserScreen id="user1"></UserScreen>
      <UserScreen id="user2"></UserScreen>
    </div>
  );
}

export default App;
