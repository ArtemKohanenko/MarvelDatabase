import CardsList from "../../components/CardsList/CardsList";
import classes from "./Favourites.module.scss";
import favouritesStore from "../../stores/FavouitesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const Favourites = () => {
  const { amount, favourites, getFavourites, saveFavourites } = favouritesStore;

  const { t } = useTranslation();

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
            <span className={classes.title}>{t("favourites-title")}</span>
            <span className={classes.counter}>({amount})</span>
          </div>
        </div>
        <CardsList list={favourites} favourites={favourites} />
      </div>
    </>
  );
};

export default observer(Favourites);
