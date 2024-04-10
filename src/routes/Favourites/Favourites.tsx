import CardsList from "../../components/CardsList/CardsList";
import classes from "./Favourites.module.scss";
import favouritesStore from "../../stores/FavouitesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Favourites = () => {
  const {
    amount,
    favourites,
    pagesAmount,
    currentPage,
    getFavourites,
    saveFavourites,
  } = favouritesStore;

  useEffect(() => {
    getFavourites();

    return () => {
      saveFavourites();
    };
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Favourites</span>
            <span className={classes.counter}>({amount})</span>
          </div>
        </div>
        <CardsList
          list={favourites}
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={() => {}}
        />
      </div>
    </>
  );
};

export default observer(Favourites);
