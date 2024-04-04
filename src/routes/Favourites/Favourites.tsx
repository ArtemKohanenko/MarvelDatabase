import CardsList from "../../components/CardsList/CardsList";
import classes from "./Favourites.module.scss";
import { useState } from "react";
import { IListable } from "../../types/IListable";

const Favourites = () => {
  const pageSize = 18;
  const [currentPage, setCurrentPage] = useState(0);

  const charactersFavourites: IListable[] = JSON.parse(
    localStorage.getItem("charactersFavourites") ?? "[]",
  );
  const comicsFavourites: IListable[] = JSON.parse(
    localStorage.getItem("comicsFavourites") ?? "[]",
  );
  const favouritesList = charactersFavourites.concat(comicsFavourites);
  const amount = favouritesList.length;
  const pagesAmount = Math.ceil(amount / pageSize);

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
          list={favouritesList}
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Favourites;
