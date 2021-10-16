import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Logo from './img/logo.png';
import Gplus from './img/gplus.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ChatIcon from '@material-ui/icons/Chat';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import MailIcon from '@material-ui/icons/Mail';
import WarningIcon from '@material-ui/icons/Warning';
import DeleteIcon from '@material-ui/icons/Delete';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

import './css/aside.css';
import Avatar from '@material-ui/core/Avatar';

function Aside() {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(3),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <aside className="aside">
            <div className="aside__head">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={Logo} alt="GMAIL" />
            </div>

            <div className="compose-email-btn">
                {/* activates email popup form */}
                <form>
                    <button type="submit"><img src={Gplus} alt="+" /> Compose</button>
                </form>
            </div>

            <div className="aside__list">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <WatchLaterIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Snoozed" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Sent" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InsertDriveFileIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText
                            primary={open ? (<p>Less</p>) : (<p>More</p>)} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <LabelImportantIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Important" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <ChatIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Chats" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <TimelapseIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Scheduled" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <MailIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="All Mail" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <WarningIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <DeleteIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Trash" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>

            <div className="aside__additions">
                <div className="aside__additions-meet">
                    <h4>Meet</h4>
                    <div className="aside__list">
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className={classes.root}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    <VideocamIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Start a meeting" />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>
                                    <KeyboardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Join a meeting" />
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div className="aside__additions-hangouts">
                    <h4>Hangouts</h4>
                    <div className="aside__hangouts">
                        <Avatar />
                        <small>Dohn Doe</small>
                        <ArrowDropDownIcon className="hangouts_profile_more" />
                        <div className="hangouts-add">
                            <AddIcon />
                        </div>
                    </div>
                </div>
            </div>

            <div className="aside__footer">
                <div className="aside__footer-container">
                    <div className="aside__footer-item">
                        <PersonIcon fontSize="default" />
                    </div>
                    <div className="aside__footer-item">
                        <ChatIcon fontSize="default" />
                    </div>
                    <div className="aside__footer-item">
                        <PhoneIcon fontSize="default" />
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default Aside;
