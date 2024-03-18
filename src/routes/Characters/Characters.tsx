import CardsList from "../../components/CardsList/CardsList";
import classes from "./Characters.module.scss";
import SearchField from "../../components/SearchField/SearchField";
import characetrsStore from "../../stores/CharactersStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Characters = () => {

  const { characters, amount, loadCharacters } = characetrsStore;

  useEffect(() => {
    loadCharacters();
  }, [])

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Characters</span>
            <span className={classes.counter}>({amount})</span>
          </div>
          <SearchField />
        </div>
        <CardsList list={characters} />
      </div>
    </>
  );
};

export default observer(Characters);
