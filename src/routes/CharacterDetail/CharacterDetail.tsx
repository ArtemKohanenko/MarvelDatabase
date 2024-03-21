import { useParams } from "react-router-dom";
import classes from "./CharacterDetail.module.scss";
import characetrsStore from "../../stores/CharactersStore";

const CharacterDetail = () => {
  const { id } = useParams();
  const { getCharacterById } = characetrsStore;

  const character = getCharacterById(id);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.pictureContainer}>
          <img src={character?.picture} className={classes.picture}></img>
        </div>
        <div className={classes.textData}>
          <div className={classes.leftColumn}>
            <span className={classes.name}>{character?.name}</span>
            <span className={classes.description}>{character?.description}</span>
          </div>
          <div className={classes.rightColumn}>
            <span className={classes.title}>Comics</span>
            {character?.comics.items.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.resourceURI}
                className={classes.link}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
