import { useState } from "react";
import CardsList from "../../components/CardsList/CardsList";
import characters from "../../stores/MockCharacters";
import classes from "./Characters.module.scss";
import SearchField from "../../components/SearchField/SearchField";

const Characters = () => {
  const counter = 1562;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Characters</span>
            <span className={classes.counter}>({counter})</span>
          </div>
          <SearchField />
        </div>
        <CardsList list={characters} />
      </div>
    </>
  );
};

export default Characters;
