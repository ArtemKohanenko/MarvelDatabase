import { NavLink } from "react-router-dom";
import IconHeartOutline from "../icons/IconHeartOutline/IconHeartOutline";
import IconHeartFilled from "../icons/IconHeartFilled/IconHeartFilled";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.container}>
      <img className={classes.logo} src="src/assets/Marvel_Logo.svg"></img>
      <nav>
        <ul className={classes.links}>
          <li>
            <NavLink
              to="characters"
              className={classes.navLink}
            >
              {({isActive}) => (
                <a 
                  className={isActive ? classes.linkActive : classes.link}
                >
                  Characters
                </a>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
                to="comics"
                className={classes.navLink}
            >
              {({isActive}) => (
                <span 
                  className={isActive ? classes.linkActive : classes.link}
                >
                  Comics
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="favourites"
              className={classes.navLink}
            >
              {({isActive}) => (
                isActive ? (
                  <IconHeartFilled className={classes.icon}/>
                  ) : (
                  <IconHeartOutline className={classes.icon}/>
                )
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
