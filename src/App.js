import React from "react";
import classes from "./App.module.css";
import UserScreen from "./components/Messages/UserScreen";

function App() {
  return (
    <div className={classes.app}>
      <UserScreen className="userscreen"></UserScreen>
      <UserScreen></UserScreen>
    </div>
  );
}

export default App;
