import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { isCharacter } from "../../types/character";
import { isComic } from "../../types/comic";

const CardsList = (props: {
  list: IListable[];
  pagesAmount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const list = props.list;
  let favouriteIds: string[];
  const pagesAmount = props.pagesAmount;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  if (list[0]) {
    if (isCharacter(list[0])) {           // defining list content type
      const favouritesList: IListable[] = JSON.parse(localStorage.getItem("charactersFavourites") ?? "[]");
      favouriteIds = favouritesList.map(item => item.id);
    }
    else if (isComic(list[0])) {
      const favouritesList: IListable[] = JSON.parse(localStorage.getItem("comicsFavourites") ?? "[]");
      favouriteIds = favouritesList.map(item => item.id);
    }
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {list.map((item) => (
          <div key={item.id} className={classes.cardSpace}>
            <Card item={item} isFavourite={favouriteIds.includes(item.id)}/>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        <Pagination
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CardsList;
