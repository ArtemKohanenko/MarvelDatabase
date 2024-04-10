import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

interface CardsListProps {
  list: IListable[];
  pagesAmount: number;
  currentPage: number;
  favourites?: IListable[];
  setCurrentPage: (page: number) => void;
}

const CardsList: React.FC<CardsListProps> = ({list, pagesAmount, currentPage, favourites=[], setCurrentPage}) => {
  const isShowPagination = pagesAmount > 1;

  const favouriteIds = favourites.map((item) => item.id);

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
        {isShowPagination ? (
          <Pagination
            pagesAmount={pagesAmount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CardsList;
