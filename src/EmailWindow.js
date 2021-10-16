import React, { useState } from "react";
import "./css/email-window.css";
import { IconButton } from "@material-ui/core";
import {
  Minimize,
  Height,
  Close,
  Undo,
  Redo,
  ArrowDropDown,
  TextFields,
  FormatUnderlined,
  FormatColorText,
  FormatQuote,
  StrikethroughS,
  FormatClear,
  FormatBold,
  FormatItalic,
  AttachFile,
  Link,
  InsertEmoticon,
  Image,
  MoreVert,
  Delete,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
const EmailWindow = () => {
  const [textOptionsOpen, setTextOptionsOpen] = useState(true);
  return (
    <div className="email-window__wrap">
      <div className="email-window__header">
        <p style={{ fontSize: "14px", fontWeight: 600 }}>New Message</p>
        <div className="email-window__controls">
          <Minimize />
          <Height style={{ transform: "rotate(45deg)" }} />
          <Close />
        </div>
      </div>
      <div className="email-window__emailbody">
        <div className="email-window__input">
          <input type="email" placeholder="To" />
          <div className="email-window-cc-options">
            <span>Cc</span>
            <span>Bcc</span>
          </div>
        </div>
        <div className="email-window__input">
          <input type="text" placeholder="Subject" />
        </div>
        <textarea></textarea>
        <div
          className={
            textOptionsOpen
              ? "email-window__text-options options-open"
              : "email-window__text-options"
          }
        >
          <div className="corrections">
            <Undo fontSize="small" />
            <Redo fontSize="small" />
          </div>
          <div className="text-font-select">
            <p>Sans Serif</p>
            <ArrowDropDown fontSize="small" />
          </div>
          <div className="font-size-select">
            <TextFields style={{ transform: "scaleX(-1)" }} />
            <ArrowDropDown fontSize="small" />
          </div>
          <div className="text-style">
            <FormatBold fontSize="small" />
            <FormatItalic fontSize="small" />
            <FormatUnderlined fontSize="small" />
            <FormatColorText fontSize="small" />
            <ArrowDropDown fontSize="small" />
          </div>
          <div className="misc">
            <FormatQuote fontSize="small" />
            <StrikethroughS fontSize="small" />
            <FormatClear fontSize="small" />
          </div>
          <div className="more">
            <ArrowDropDown fontSize="small" />
          </div>
        </div>
        <div className="email-window__footer-options">
          <div>
            <Button variant="contained" style={{ marginRight: "20px" }}>
              Send
            </Button>
            <IconButton
              size="small"
              onClick={() => setTextOptionsOpen(!textOptionsOpen)}
              style={textOptionsOpen ? { background: "#ececec" } : null}
            >
              <FormatColorText />
            </IconButton>
            <IconButton size="small">
              <AttachFile />
            </IconButton>
            <IconButton size="small">
              <Link />
            </IconButton>
            <IconButton size="small">
              <InsertEmoticon />
            </IconButton>
            <IconButton size="small">
              <Image />
            </IconButton>
          </div>
          <div>
            <IconButton size="small">
              <MoreVert />
            </IconButton>
            <IconButton size="small">
              <Delete />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailWindow;
