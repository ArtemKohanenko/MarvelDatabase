import CardsList from "../../components/CardsList/CardsList";
import classes from "./Characters.module.scss";
import SearchField from "../../components/SearchField/SearchField";
import CharactersStore from "../../stores/CharactersStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import favouritesStore from "../../stores/FavouitesStore";

const Characters = () => {
  const {
    characters,
    total,
    count,
    defaultLoadLimit,
    nameStartsWith,
    setNameStartsWith,
    loadFirstCharacters,
    loadNextCharacters,
  } = CharactersStore;
  const { favourites, getFavourites, saveFavourites } = favouritesStore;

  useEffect(() => {
    loadFirstCharacters(defaultLoadLimit);
  }, [nameStartsWith]);

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
            <span className={classes.title}>Characters</span>
            <span className={classes.counter}>({total})</span>
          </div>
          <SearchField
            searchValue={nameStartsWith}
            setSearchValue={(value) => {
              setNameStartsWith(value);
              // setCurrentPage(0);
            }}
          />
        </div>
        <CardsList
          list={characters}
          favourites={favourites}
          loadData={() => loadNextCharacters(count, defaultLoadLimit)}
        />
      </div>
    </>
  );
};

export default observer(Characters);
