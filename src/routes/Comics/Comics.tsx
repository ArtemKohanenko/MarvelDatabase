import { observer } from "mobx-react-lite";
import CardsList from "../../components/CardsList/CardsList";
import SearchField from "../../components/SearchField/SearchField";
import comicsStore from "../../stores/ComicsStore";
import classes from "./Comics.module.scss";
import { useEffect } from "react";

const Comics = () => {
  const { amount, comics, loadComics } = comicsStore;

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Comics</span>
            <span className={classes.counter}>({amount})</span>
          </div>
          <SearchField />
        </div>
        <CardsList list={comics} />
      </div>
    </>
  );
};

export default observer(Comics);
