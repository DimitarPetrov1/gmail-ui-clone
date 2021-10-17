import React, { useState } from "react";
import "./css/app.css";
import Header from "./Header";
import Emails from "./Emails";
import Aside from "./Aside";
import EmailWindow from "./EmailWindow";

const App = () => {
  const [newEmailWindowOpen, setNewEmailWindowOpen] = useState(true);

  const handleEmailOpen = () => {
    setNewEmailWindowOpen(true);
  };

  const removeNewEmail = () => {
    setNewEmailWindowOpen(false);
  };

  return (
    <div className="app">
      <Aside openNewEmail={handleEmailOpen} />
      <div className="right-container">
        <Header />
        <Emails />
      </div>
      <div className="chat-container">
        {newEmailWindowOpen ? (
          <EmailWindow removeNewEmail={removeNewEmail} />
        ) : null}
      </div>
    </div>
  );
};

// Things to fix:
// selecting emails- clicking the box just openes the message
// the email window css- bottom is set to 10px due to overflow!

export default App;
