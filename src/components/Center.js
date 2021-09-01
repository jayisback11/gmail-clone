import React, { useState, useEffect } from "react";
import "./Center.css";
import { IconButton, Checkbox } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import Sections from "./Sections";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
function Center() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("email").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log(emails);
  }, []);

  return (
    <div className="center">
      <div className="center__top">
        <div className="center__top__left">
          <Checkbox color="black" />
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="center__top__right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="center__sections">
        <Sections Icon={InboxIcon} title="Primary" color="red" selected />
        <Sections Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Sections Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>
      <div className="center__mail">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Center;
