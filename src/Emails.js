import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    // useHistory,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import Email from './Email';
import EmailFull from './EmailFull';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NoteIcon from '@material-ui/icons/Note';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddIcon from '@material-ui/icons/Add';
import './css/emails.css';

function Emails(props) {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // console.log(response);
                // Needed to render the emails
                setEmails(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, [])

    return (
        // Check total width later
        <div className="emails">
            <div className="emails__head">
                <div className="emails__head-sorting">
                    <input type="checkbox" />
                    <ArrowDropDownIcon />
                    <IconButton>
                        <ReplayIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emails__head-more">
                    <small className="emails__head-pagecounter">1-{emails.length} of {emails.length}</small>
                    <IconButton>
                        <NavigateBeforeIcon />
                    </IconButton>
                    <IconButton>
                        <NavigateNextIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emails__list">
                <div className="emails__list-container">
                    <Router>
                        <div className="emails__sort">
                            <div className="emails__sort-item sort-item-primary-mail">
                                <InboxIcon fontSize="small" />
                                <p>Primary</p>
                            </div>
                            <div className="emails__sort-item sort-item-social">
                                <GroupIcon fontSize="small" />
                                <p>Social</p>
                            </div>
                            <div className="emails__sort-item sort-item-promotions">
                                <LocalOfferIcon fontSize="small" />
                                <p>Promotions</p>
                            </div>
                        </div>

                        {/* With .slice(0, 5) we can limit the amount of emails */}
                        {emails.map(email => (
                            <>
                                <Link to={`/emails/id/${email.id}`}>
                                    <Email key={email.id} userName={email.name} emailTopic={email.company.catchPhrase} />
                                </Link>
                                <Switch>
                                    <Route path={`/emails/id/${email.id}`}>
                                        <EmailFull userName={email.name} userEmail={email.email} emailTopic={email.company.catchPhrase} emailContent={email.company.bs} />
                                    </Route>
                                </Switch>
                            </>
                        ))}
                    </Router>
                </div>
            </div>
            <div className="emails__aside-right">
                <div className="emails__aside-right-container">
                    <IconButton>
                        <CalendarTodayIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <NoteIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <PlaylistAddCheckIcon fontSize="small" />
                    </IconButton>
                    <span className="emails__aside-add">
                        <IconButton>
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </span>
                </div>
                <IconButton>
                    <NavigateNextIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Emails;
