import React from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedMail } from "../features/mailSlice";

function Mail() {
  const history = useHistory();
  const selectedEmail = useSelector(selectSelectedMail);

  return (
    <div className="mail">
      <div className="mailTools">
        <div className="mailTools__left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailTools__right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon onClick={() => history.push("/")} />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body__top">
          <h2>{selectedEmail?.title}</h2>
          <LabelImportantIcon style={{ color: "e8ab02" }} />
          <p>{selectedEmail?.subject}</p>
          <p className="mail__body__time">{selectedEmail?.time}</p>
        </div>

        <div className="mail__message">
          <p>{selectedEmail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
