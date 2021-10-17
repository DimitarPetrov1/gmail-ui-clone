import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Email from "./Email";
import EmailFull from "./EmailFull";
import IconButton from "@material-ui/core/IconButton";
import {
  ArrowDropDown,
  Replay,
  MoreVert,
  NavigateBefore,
  NavigateNext,
  Inbox,
  Group,
  LocalOffer,
  CalendarToday,
  Note,
  PlaylistAddCheck,
  Add,
} from "@material-ui/icons";

import "./css/emails.css";

const Emails = (props) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        // Needed to render the emails
        setEmails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // Check total width later
    <div className="emails">
      <div className="emails__head">
        <div className="emails__head-sorting">
          <input type="checkbox" />
          <ArrowDropDown />
          <IconButton>
            <Replay />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emails__head-more">
          <small className="emails__head-pagecounter">
            1-{emails.length} of {emails.length}
          </small>
          <IconButton>
            <NavigateBefore />
          </IconButton>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </div>
      </div>
      <div className="emails__list">
        <div className="emails__list-container">
          <Router>
            <div className="emails__sort">
              <div className="emails__sort-item sort-item-primary-mail">
                <Inbox fontSize="small" />
                <p>Primary</p>
              </div>
              <div className="emails__sort-item sort-item-social">
                <Group fontSize="small" />
                <p>Social</p>
              </div>
              <div className="emails__sort-item sort-item-promotions">
                <LocalOffer fontSize="small" />
                <p>Promotions</p>
              </div>
            </div>

            {/* With .slice(0, 5) we can limit the amount of emails */}
            {emails.map((email, index) => (
              <div key={index}>
                <Link to={`/emails/id/${email.id}`}>
                  <Email
                    key={email.id}
                    userName={email.name}
                    emailTopic={email.company.catchPhrase}
                  />
                </Link>
                <Switch>
                  <Route path={`/emails/id/${email.id}`}>
                    <EmailFull
                      userName={email.name}
                      userEmail={email.email}
                      emailTopic={email.company.catchPhrase}
                      emailContent={email.company.bs}
                    />
                  </Route>
                </Switch>
              </div>
            ))}
          </Router>
        </div>
      </div>
      <div className="emails__aside-right">
        <div className="emails__aside-right-container">
          <IconButton>
            <CalendarToday fontSize="small" />
          </IconButton>
          <IconButton>
            <Note fontSize="small" />
          </IconButton>
          <IconButton>
            <PlaylistAddCheck fontSize="small" />
          </IconButton>
          <span className="emails__aside-add">
            <IconButton>
              <Add fontSize="small" />
            </IconButton>
          </span>
        </div>
        <IconButton>
          <NavigateNext />
        </IconButton>
      </div>
    </div>
  );
};

export default Emails;
