import CardsList from "../../components/CardsList/CardsList";
import classes from "./Characters.module.scss";
import SearchField from "../../components/SearchField/SearchField";
import CharactersStore from "../../stores/CharactersStore";
import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import favouritesStore from "../../stores/FavouitesStore";
import { VirtuosoGridHandle } from "react-virtuoso";
import { useTranslation } from "react-i18next";

const Characters = () => {
  const {
    characters,
    total,
    count,
    defaultLoadLimit,
    nameStartsWith,
    loading,
    setNameStartsWith,
    loadFirstCharacters,
    loadNextCharacters,
  } = CharactersStore;
  const { favourites, getFavourites, saveFavourites } = favouritesStore;
  const listRef = useRef<VirtuosoGridHandle>(null);
  const { t } = useTranslation();

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
            <span className={classes.title}>{t("characters-title")}</span>
            <span className={classes.counter}>({total})</span>
          </div>
          <SearchField
            listRef={listRef}
            searchPlaceholder={t("search-character-placeholder")}
            searchValue={nameStartsWith}
            setSearchValue={(value) => {
              setNameStartsWith(value);
            }}
          />
        </div>
        <CardsList
          listRef={listRef}
          list={characters}
          favourites={favourites}
          loadData={() => loadNextCharacters(count, defaultLoadLimit)}
          isLoading={loading}
        />
      </div>
    </>
  );
};

export default observer(Characters);
