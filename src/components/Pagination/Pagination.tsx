import classes from "./Pagination.module.scss";
import characetrsStore from "../../stores/CharactersStore";

const Pagination = () => {
  const { amount, currentPage, setCurrentPage } = characetrsStore;

  const limit = 6;
  const bottomLimit = currentPage > limit ? currentPage - limit + 1 : 1;
  const upperLimit =
    currentPage + limit < amount ? currentPage + limit + 1 : amount - 1;

  const pageNums = [];
  for (let i = bottomLimit; i <= upperLimit; i++) {
    pageNums.push(i);
  }

  const clickHandler = (indx: number) => {
    setCurrentPage(indx);
  };

  return (
    <div className={classes.container}>
      {pageNums.map((item) => (
        <div
          onClick={() => clickHandler(item - 1)}
          className={`${classes.cell} ${item - 1 == currentPage ? classes.selected : ""}`}
        >
          <span
            className={
              item - 1 == currentPage ? classes.selected : classes.notSelected
            }
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
