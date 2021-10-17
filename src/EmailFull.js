import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowBack,
  Archive,
  Error,
  Delete,
  MarkunreadMailbox,
  WatchLater,
  AssignmentTurnedIn,
  CreateNewFolder,
  Label,
  MoreVert,
  NavigateBefore,
  NavigateNext,
  Print,
  OpenInNew,
  StarBorder,
  Reply,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

import "./css/email-full.css";

const EmailFull = ({ userName, emailTopic, emailContent, userEmail }) => {
  return (
    <div className="email-full">
      <div className="email-full__head">
        <div className="email-full__head__left">
          <div className="email-full__head-separator">
            <Link to="/">
              <IconButton className="email-full__head__backbutton">
                <ArrowBack />
              </IconButton>
            </Link>
            <IconButton>
              <Archive fontSize="small" />
            </IconButton>
            <IconButton>
              <Error fontSize="small" />
            </IconButton>
            <IconButton>
              <Delete fontSize="small" />
            </IconButton>
          </div>
          <div className="email-full__head-separator">
            <IconButton>
              <MarkunreadMailbox fontSize="small" />
            </IconButton>
            <IconButton>
              <WatchLater fontSize="small" />
            </IconButton>
            <IconButton>
              <AssignmentTurnedIn fontSize="small" />
            </IconButton>
          </div>
          <div className="email-full__head-separator">
            <IconButton>
              <CreateNewFolder fontSize="small" />
            </IconButton>
            <IconButton>
              <Label fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVert fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="email-full__head__right">
          <small>1 of 10</small>
          <IconButton>
            <NavigateBefore />
          </IconButton>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </div>
      </div>
      <div className="email-full__content">
        <div className="email-full__topic">
          <h2>{emailTopic}</h2>
          <div className="email-full__topic__right">
            <IconButton>
              <Print fontSize="small" />
            </IconButton>
            <IconButton>
              <OpenInNew fontSize="small" />
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
              <StarBorder fontSize="small" />
            </IconButton>
            <IconButton>
              <Reply fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVert fontSize="small" />
            </IconButton>
          </small>
        </div>
        <br />
        {emailContent}
      </div>
    </div>
  );
};

export default EmailFull;
