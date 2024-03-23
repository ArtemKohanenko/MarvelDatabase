import { useNavigate } from "react-router-dom";
import classes from "./Card.module.scss";
import { IListable } from "../../types/IListable";
import { shortText } from "../../utils/cardListUtils";

const Card = (props: { item: IListable }) => {
  const item = props.item;
  const pictureURI = item.thumbnail.path + "." + item.thumbnail.extension;
  const cardTitle = item.name ? item.name : item.title;
  const maxSymbols = 128;

  let printedDescription = "";

  if (item.description) {
    printedDescription =
      item.description.length < 128
        ? item.description
        : shortText(item.description, maxSymbols);
  }

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(item.id.toString());
  };

  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={classes.pictureContainer}>
        <img src={pictureURI} className={classes.picture}></img>
      </div>
      <div className={classes.textData}>
        <span className={classes.name}>{cardTitle}</span>
        <p className={classes.description}>{printedDescription}</p>
      </div>
    </div>
  );
};

export default Card;
