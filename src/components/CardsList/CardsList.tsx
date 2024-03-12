import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";

const CardsList = (props: { list: IListable[] }) => {
  const list = props.list;

  return (
    <>
      <div className={classes.container}>
        {list.map((item) => (
          <div className={classes.cardSpace}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsList;
