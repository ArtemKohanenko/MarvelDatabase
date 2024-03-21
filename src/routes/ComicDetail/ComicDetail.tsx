import { useParams } from "react-router-dom";
import classes from "./ComicDetail.module.scss";

const ComicDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.pictureContainer}>
          <img src='' className={classes.picture}></img>
        </div>
        <div className={classes.textData}>
          <div className={classes.leftColumn}>
            <span className={classes.name}>{}</span>
            <span className={classes.description}>{}</span>
          </div>
          <div className={classes.rightColumn}>
            <span className={classes.title}>Characters</span>
            {/* {comic.charactersLinks.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className={classes.link}
              >
                {item.name}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicDetail;
