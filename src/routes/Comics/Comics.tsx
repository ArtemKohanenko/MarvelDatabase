import { observer } from "mobx-react-lite";
import CardsList from "../../components/CardsList/CardsList";
import SearchField from "../../components/SearchField/SearchField";
import comicsStore from "../../stores/ComicsStore";
import classes from "./Comics.module.scss";
import { useEffect } from "react";
import favouritesStore from "../../stores/FavouitesStore";

const Comics = () => {
  const {
    comics,
    total,
    count,
    defaultLoadLimit,
    titleStartsWith,
    loading,
    setNameStartsWith,
    loadFirstComics,
    loadNextComics
  } = comicsStore;
  const { favourites, getFavourites, saveFavourites } = favouritesStore;

  useEffect(() => {
    loadFirstComics(defaultLoadLimit);
  }, [titleStartsWith]);

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
            <span className={classes.title}>Comics</span>
            <span className={classes.counter}>({total})</span>
          </div>
          <SearchField
            searchValue={titleStartsWith}
            setSearchValue={(value) => {
              setNameStartsWith(value);
            }}
          />
        </div>
        <CardsList
          list={comics}
          favourites={favourites}
          loadData={() => loadNextComics(count, defaultLoadLimit)}
          isLoading={loading}
        />
      </div>
    </>
  );
};

export default observer(Comics);
