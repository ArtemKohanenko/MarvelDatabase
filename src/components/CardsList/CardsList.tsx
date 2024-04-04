import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const CardsList = (props: {
  list: IListable[];
  pagesAmount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const list = props.list;
  const pagesAmount = props.pagesAmount;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;
  const isShowPagination = pagesAmount > 1;

  const charactersFavourites: IListable[] = JSON.parse(
    localStorage.getItem("charactersFavourites") ?? "[]",
  );
  const comicsFavourites: IListable[] = JSON.parse(
    localStorage.getItem("comicsFavourites") ?? "[]",
  );
  const charactersIds = charactersFavourites.map((item) => item.id);
  const comicsIds = comicsFavourites.map((item) => item.id);
  const favouriteIds = charactersIds.concat(comicsIds);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {list.map((item) => (
          <div key={item.id} className={classes.cardSpace}>
            <Card item={item} isFavourite={favouriteIds.includes(item.id)} />
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        {
          isShowPagination
            ? <Pagination
              pagesAmount={pagesAmount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            : null
        }
        
      </div>
    </div>
  );
};

export default CardsList;
