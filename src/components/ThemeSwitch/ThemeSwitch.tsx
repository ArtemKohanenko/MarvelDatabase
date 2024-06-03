import { useEffect, useState } from "react";
import classes from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const changeThemeHandler = () => {
    if (!isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <label className={`${classes.label} ${classes.toggle}`}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeThemeHandler}
        className={classes.toggleInput}
      />
      <div className={classes.toggleControl}></div>
    </label>
  );
};

export default ThemeSwitch;
