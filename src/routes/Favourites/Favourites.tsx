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
    const unloadHandler = () => {
      saveFavourites();
    };
    window.addEventListener("beforeunload", unloadHandler);
    getFavourites();

    return () => {
      saveFavourites();
      window.removeEventListener("beforeunload", unloadHandler);
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
          favourites={favourites}
          setCurrentPage={() => {}}
        />
      </div>
    </>
  );
};

export default observer(Favourites);
