import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.container}>
      <div className={classes.leftBlock}>
        <div>
          <img className={classes.logo} src="public/Marvel_Logo.svg"></img>
        </div>
        <span className={classes.text}>
          Data provided by Marvel. @{year} MARVEL
        </span>
        <Link
          to={{ pathname: "developer.marvel.com" }}
          target="_blank"
          className={classes.text}
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.marvel.com"
          className={classes.text}
        >
          developer.marvel.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
