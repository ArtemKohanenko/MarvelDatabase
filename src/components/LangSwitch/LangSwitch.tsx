import { useState } from "react";
import classes from "./LangSwitch.module.scss";
import { Languages } from "../../types/languages";
import { useTranslation } from "react-i18next";

const LangSwitch = () => {

  const [lang, setLang] = useState(Languages.EN)
  const { i18n } = useTranslation()

  const changeLangHandler = (newLang: Languages) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  }

  return (
    <div className={classes.container}>
      <span
        className={`${classes.button} ${lang == Languages.EN ? classes.active : ''}`}
        onClick={() => changeLangHandler(Languages.EN)}
      >EN</span>
      <span className={classes.divider}>/</span>
      <span
        className={`${classes.button} ${lang == Languages.RU ? classes.active : ''}`}
        onClick={() => changeLangHandler(Languages.RU)}
      >RU</span>
    </div>
  );
};

export default LangSwitch;
