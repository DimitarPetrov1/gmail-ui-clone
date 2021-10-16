import React, { useState, useEffect } from "react";
import "./css/app.css";
import Header from "./Header";
import Emails from "./Emails";
import Aside from "./Aside";
import EmailWindow from "./EmailWindow";

function App() {
  const [newEmailWindowOpen, setNewEmailWindowOpen] = useState(true);
  // useEffect(() => {
  //   setNewEmailWindowOpen(!newEmailWindowOpen);
  // }, []);

  return (
    <div className="app">
      <Aside />
      <div className="right-container">
        <Header />
        <Emails />
      </div>
      <div className="chat-container">
        {newEmailWindowOpen ? <EmailWindow /> : null}
      </div>
    </div>
  );
}

// Things to fix:
// selecting emails- clicking the box just openes the message
// the email window css- bottom is set to 5px due to overflow!

export default App;
