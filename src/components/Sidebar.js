import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DraftsIcon from "@material-ui/icons/Drafts";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt=""
        />
        <p>Compose</p>
      </div>
      <div className="sidebar__options">
        <SidebarOptions Icon={InboxIcon} title={"Inbox"} active={true} />
        <SidebarOptions Icon={StarIcon} title={"Starred"} />
        <SidebarOptions Icon={WatchLaterIcon} title={"Snoozed"} />
        <SidebarOptions Icon={SendIcon} title={"Sent"} />
        <SidebarOptions Icon={DraftsIcon} title={"Drafts"} />
        <SidebarOptions Icon={ExpandMoreIcon} title={"More"} />
      </div>
    </div>
  );
}

export default Sidebar;
