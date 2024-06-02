import { observer } from "mobx-react-lite";
import CardsList from "../../components/CardsList/CardsList";
import SearchField from "../../components/SearchField/SearchField";
import comicsStore from "../../stores/ComicsStore";
import classes from "./Comics.module.scss";
import { useEffect, useRef } from "react";
import favouritesStore from "../../stores/FavouitesStore";
import { VirtuosoGridHandle } from "react-virtuoso";
import { useTranslation } from "react-i18next";

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
    loadNextComics,
  } = comicsStore;
  const { favourites, getFavourites, saveFavourites } = favouritesStore;
  const listRef = useRef<VirtuosoGridHandle>(null);
  const { t } = useTranslation();

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
            <span className={classes.title}>{t("comics-title")}</span>
            <span className={classes.counter}>({total})</span>
          </div>
          <SearchField
            listRef={listRef}
            searchValue={titleStartsWith}
            searchPlaceholder={ t('search-comics-placeholder') }
            setSearchValue={(value) => {
              setNameStartsWith(value);
            }}
          />
        </div>
        <CardsList
          listRef={listRef}
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
