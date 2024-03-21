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

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {list.map((item) => (
          <div className={classes.cardSpace}>
            <Card item={item} />
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
