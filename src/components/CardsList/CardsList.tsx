import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const CardsList = (props: { list: IListable[]; pageSize: number }) => {
  const list = props.list;

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
        <Pagination />
      </div>
    </div>
  );
};

export default CardsList;
