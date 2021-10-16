import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./img/logo.png";
import Gplus from "./img/gplus.png";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import {
  Menu,
  ExpandLess,
  ExpandMore,
  Inbox,
  Star,
  WatchLater,
  Send,
  InsertDriveFile,
  Label,
  Chat,
  Timelapse,
  Mail,
  Warning,
  Delete,
  Videocam,
  Keyboard,
  ArrowDropDown,
} from "@material-ui/icons/";
import "./css/aside.css";
import Avatar from "@material-ui/core/Avatar";

function Aside({ openNewEmail }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);

  return (
    <aside className="aside">
      <div className="aside__head">
        <IconButton>
          <Menu />
        </IconButton>
        <img src={Logo} alt="GMAIL" />
      </div>

      <div className="compose-email-btn">
        {/* activates email popup form */}
        <button onClick={openNewEmail}>
          <img src={Gplus} alt="+" />
          Compose
        </button>
      </div>

      <div className="aside__list">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon>
              <Inbox fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Star fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <WatchLater fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Snoozed" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Send fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertDriveFile fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={() => setExpand(!expand)}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={expand ? <p>Less</p> : <p>More</p>} />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Label fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Important" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Chat fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Chats" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Timelapse fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Scheduled" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Mail fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="All Mail" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Warning fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Delete fontSize="small" />
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
                  <Videocam fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Start a meeting" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Keyboard fontSize="small" />
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
            <ArrowDropDown className="hangouts_profile_more" />
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
            <Chat fontSize="default" />
          </div>
          <div className="aside__footer-item">
            <PhoneIcon fontSize="default" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
