import classes from "./Pagination.module.scss";

const Pagination = (props: {
  pagesAmount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const pagesAmount = props.pagesAmount;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;

  const limit = 6;
  const bottomLimit = currentPage > limit ? currentPage - limit + 1 : 1;
  const upperLimit =
    currentPage + limit < pagesAmount ? currentPage + limit + 1 : pagesAmount;

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
          key={item}
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
