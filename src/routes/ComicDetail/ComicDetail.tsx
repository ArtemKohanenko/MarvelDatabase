import { useParams } from "react-router-dom";
import classes from "./ComicDetail.module.scss";
import { useEffect } from "react";
import comicsStore from "../../stores/ComicsStore";
import { observer } from "mobx-react-lite";
import { externalLinkToLocal } from "../../utils/detailUtils";

const ComicDetail = () => {
  const { id } = useParams();
  const { selectedComic, getComicById } = comicsStore;
  const pictureURI =
    selectedComic?.thumbnail.path + "." + selectedComic?.thumbnail.extension;

  useEffect(() => {
    if (id) {
      getComicById(id);
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
            <span className={classes.name}>{}</span>
            <span className={classes.description}>
              {selectedComic?.description}
            </span>
          </div>
          <div className={classes.rightColumn}>
            <span className={classes.title}>Characters</span>
            {selectedComic?.characters.items.map((item) => (
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

export default observer(ComicDetail);
