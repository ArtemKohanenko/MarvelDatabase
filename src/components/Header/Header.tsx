import { NavLink } from "react-router-dom";
import IconHeartOutline from "../icons/IconHeartOutline/IconHeartOutline";
import IconHeartFilled from "../icons/IconHeartFilled/IconHeartFilled";
import classes from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import LangSwitch from "../LangSwitch/LangSwitch";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.container}>
      <div className={classes.leftBlock}>
        <img className={classes.logo} src="public/Marvel_Logo.svg"></img>
      </div>

      <div className={classes.rightBlock}>
        <LangSwitch />

        <nav>
          <ul className={classes.links}>
            <li>
              <NavLink to="characters" className={classes.navLink}>
                {({ isActive }) => (
                  <a className={isActive ? classes.linkActive : classes.link}>
                    {t("characters-link")}
                  </a>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="comics" className={classes.navLink}>
                {({ isActive }) => (
                  <span
                    className={isActive ? classes.linkActive : classes.link}
                  >
                    {t("comics-link")}
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="favourites" className={classes.navLink}>
                {({ isActive }) =>
                  isActive ? (
                    <IconHeartFilled className={classes.icon} />
                  ) : (
                    <IconHeartOutline className={classes.icon} />
                  )
                }
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
