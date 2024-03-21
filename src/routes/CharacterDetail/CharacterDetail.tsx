import { useParams } from "react-router-dom";
import classes from "./CharacterDetail.module.scss";
import characetrsStore from "../../stores/CharactersStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const CharacterDetail = () => {
  const { id } = useParams();
  const { selectedCharacter, getCharacterById } = characetrsStore;
  const pictureURI =
    selectedCharacter?.thumbnail.path +
    "." +
    selectedCharacter?.thumbnail.extension;

  useEffect(() => {
    if (id) {
      getCharacterById(id);
    }
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.pictureContainer}>
          <img src={pictureURI} className={classes.picture}></img>
        </div>
        <div className={classes.textData}>
          <div className={classes.leftColumn}>
            <span className={classes.name}>{selectedCharacter?.name}</span>
            <span className={classes.description}>
              {selectedCharacter?.description}
            </span>
          </div>
          <div className={classes.rightColumn}>
            <span className={classes.title}>Comics</span>
            {selectedCharacter?.comics.items.map((item) => (
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

export default observer(CharacterDetail);
