import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./../features/userSlice";
import { auth } from "./firebase";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </div>

      {/* center */}
      <div className="header__center">
        <IconButton>
          <SearchIcon style={{ color: "dimgray" }} />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <div>
          <IconButton>
            <TuneIcon style={{ color: "dimgray" }} />
          </IconButton>
        </div>
      </div>

      {/* right */}
      <div className="header__right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar
          style={{ cursor: "pointer" }}
          src={user.photoUrl}
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
}

export default Header;
