import { useNavigate } from "react-router-dom";
import classes from "./Card.module.scss";
import { IListable } from "../../types/IListable";
import { shortText } from "../../utils/cardListUtils";
import IconHeartOutline from "../icons/IconHeartOutline/IconHeartOutline";
import { MouseEventHandler, useEffect, useState } from "react";
import IconHeartFilled from "../icons/IconHeartFilled/IconHeartFilled";
import { isCharacter } from "../../types/character";
import { isComic } from "../../types/comic";

const Card = (props: { item: IListable, isFavourite?: boolean }) => {
  const item = props.item;
  const isFavouriteDefault = props.isFavourite ?? false;
  
  const pictureURI = item.thumbnail.path + "." + item.thumbnail.extension;
  const cardTitle = item.name ? item.name : item.title;
  
  const maxSymbols = 128;
  const iconStyle = {
    fill: '#ed1a3b',
    width: '50px',
    height: '50px'
  }
  const [isFavouriteButtonHover, setIsFavouriteButtonHover] = useState(false)
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
    navigate(item.id.toString());
  };

  const favouriteButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    console.log(isFavourite)
    if (isFavourite) {
      removeFromFavourites();
    }
    else {
      addToFavourites();
    }
    setIsFavourite(!isFavourite);
  }

  const addToFavourites = () => {
    if (isCharacter(item)) {
      const charactersFavourites: IListable[] = JSON.parse(localStorage.getItem("charactersFavourites") ?? "[]");
      localStorage.setItem('charactersFavourites', JSON.stringify([...charactersFavourites, item]));
    }
    else if (isComic(item)) {
      const comicsFavourites: IListable[] = JSON.parse(localStorage.getItem("comicsFavourites") ?? "[]");
      localStorage.setItem('comicsFavourites', JSON.stringify([...comicsFavourites, item]));
    }
  }

  const removeFromFavourites = () => {
    if (isCharacter(item)) {
      const charactersFavourites: IListable[] = JSON.parse(localStorage.getItem("charactersFavourites") ?? "[]");
      const newList = charactersFavourites.filter(el => el.id != item.id);
      localStorage.setItem('charactersFavourites', JSON.stringify(newList));
      console.log('удаляю персонажа, список после удаления:')
      console.log(newList)
    }
    else if (isComic(item)) {
      const comicsFavourites: IListable[] = JSON.parse(localStorage.getItem("comicsFavourites") ?? "[]");
      const newList = comicsFavourites.filter(el => el.id != item.id);
      localStorage.setItem('comicsFavourites', JSON.stringify(newList));
    }
  }

  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={classes.cover}>
        <div className={classes.darkness}></div>
        <button
          className={classes.favouriteButton}
          onClick={favouriteButtonClickHandler}
          onMouseEnter={() => setIsFavouriteButtonHover(true)}
          onMouseLeave={() => setIsFavouriteButtonHover(false)}>
            { isFavouriteButtonHover || isFavourite
              ? <IconHeartFilled styles={iconStyle}/>
              : <IconHeartOutline styles={iconStyle}/>
            }
        </button>
        
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
