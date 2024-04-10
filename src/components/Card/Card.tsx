import { useNavigate } from "react-router-dom";
import classes from "./Card.module.scss";
import { IListable } from "../../types/IListable";
import { shortText } from "../../utils/cardListUtils";
import IconHeartOutline from "../icons/IconHeartOutline/IconHeartOutline";
import { MouseEventHandler, useState } from "react";
import IconHeartFilled from "../icons/IconHeartFilled/IconHeartFilled";
import { isCharacter } from "../../types/character";
import { isComic } from "../../types/comic";
import favouritesStore from "../../stores/FavouitesStore";

const Card = (props: { item: IListable; isFavourite?: boolean }) => {
  const item = props.item;
  const isFavouriteDefault = props.isFavourite ?? false;

  const pictureURI = item.thumbnail.path + "." + item.thumbnail.extension;
  const cardTitle = item.name ? item.name : item.title;

  const { removeFromFavourites, addToFavourites } = favouritesStore;

  const maxSymbols = 128;
  const charactersUrl = "characters";
  const comicsUrl = "comics";
  const [isFavourite, setIsFavourite] = useState(isFavouriteDefault);

  let printedDescription = "";

  if (item.description) {
    printedDescription =
      item.description.length < 128
        ? item.description
        : shortText(item.description, maxSymbols);
  }

  const navigate = useNavigate();

  const clickHandler = () => {
    if (isCharacter(item)) {
      navigate("/" + charactersUrl + "/" + item.id.toString(), {
        replace: true,
      });
    } else if (isComic(item)) {
      navigate("/" + comicsUrl + "/" + item.id.toString(), { replace: true });
    }
  };

  const favouriteButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.stopPropagation();
    if (isFavourite) {
      removeFromFavourites(item);
    } else {
      addToFavourites(item);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={classes.cover}>
        <div className={classes.darkness}></div>
        <div className={classes.favouriteButtonContainer}>
          <button
            className={classes.favouriteButton}
            onClick={favouriteButtonClickHandler}
          >
            {isFavourite ? (
              <IconHeartFilled className={classes.icon} />
            ) : (
              <IconHeartOutline className={classes.icon} />
            )}
          </button>
        </div>
      </div>
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
