import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import WatchLater from "@material-ui/icons/WatchLater";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PrintIcon from "@material-ui/icons/Print";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Avatar } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ReplyIcon from "@material-ui/icons/Reply";

import "./css/email-full.css";

function EmailFull({ userName, emailTopic, emailContent, userEmail }) {
  return (
    <div className="email-full">
      <div className="email-full__head">
        <div className="email-full__head__left">
          <div className="email-full__head-separator">
            <Link to="/">
              <IconButton className="email-full__head__backbutton">
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <IconButton>
              <ArchiveIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ErrorIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="email-full__head-separator">
            <IconButton>
              <MarkunreadMailboxIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <WatchLater fontSize="small" />
            </IconButton>
            <IconButton>
              <AssignmentTurnedInIcon fontSize="small" />
            </IconButton>
          </div>
          <div className="email-full__head-separator">
            <IconButton>
              <CreateNewFolderIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LabelIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="email-full__head__right">
          <small>1 of 10</small>
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
      <div className="email-full__content">
        <div className="email-full__topic">
          <h2>{emailTopic}</h2>
          <div className="email-full__topic__right">
            <IconButton>
              <PrintIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="email-full__about">
          <div className="email-full__about__info">
            <Avatar />
            <p>{userName}</p>
            <small>{userEmail}</small>
          </div>
          <small className="email-full__about__info__right">
            11.10.20
            <IconButton className="email-full__about__info__right__print">
              <StarBorderIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ReplyIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </small>
        </div>
        <br />
        {emailContent}
      </div>
    </div>
  );
}

export default EmailFull;
