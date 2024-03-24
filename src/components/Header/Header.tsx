import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import IconHeartOutline from "../icons/IconHeartOutline/IconHeartOutline";
import IconHeartFilled from "../icons/IconHeartFilled/IconHeartFilled";
import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const iconColor = '#fbc338';
  
  return (
    <header className={classes.container}>
      <img className={classes.logo} src="src/assets/Marvel_Logo.svg"></img>
      <nav>
        <ul className={classes.links}>
          <li>
            <NavLink
              to="characters"
              className={() =>
                activeTab=='/characters' ? classes.linkActive : classes.link
              }
              onClick={() => setActiveTab('/characters')}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="comics"
              className={() =>
                activeTab=='/comics' ? classes.linkActive : classes.link
              }
              onClick={() => setActiveTab('/comics')}
            >
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favourites"
              onClick={() => setActiveTab('/favourites')}
            >
              {
                activeTab=='/favourites'
                ? <IconHeartFilled styles={{width: '40px', height: '40px', fill: iconColor}}/>
                : <IconHeartOutline styles={{width: '40px', height: '40px', fill: iconColor}}/>
              }
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
