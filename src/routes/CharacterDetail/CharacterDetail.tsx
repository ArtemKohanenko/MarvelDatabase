import { useParams } from "react-router-dom";
import classes from "./CharacterDetail.module.scss";
import CharactersStore from "../../stores/CharactersStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { externalLinkToLocal } from "../../utils/detailUtils";
import { useTranslation } from "react-i18next";

const CharacterDetail = () => {
  const { id } = useParams();
  const { selectedCharacter, getCharacterById } = CharactersStore;
  const pictureURI =
    selectedCharacter?.thumbnail.path +
    "." +
    selectedCharacter?.thumbnail.extension;

  const { t } = useTranslation();

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
            <span className={classes.title}>{t("comics-title")}</span>
            {selectedCharacter?.comics.items.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={externalLinkToLocal(item.resourceURI)}
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
