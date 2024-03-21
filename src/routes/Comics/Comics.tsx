import { observer } from "mobx-react-lite";
import CardsList from "../../components/CardsList/CardsList";
import SearchField from "../../components/SearchField/SearchField";
import comicsStore from "../../stores/ComicsStore";
import classes from "./Comics.module.scss";
import { useEffect, useState } from "react";

const Comics = () => {
  const pageSize = 18;
  const { comics, amount, loadComics, currentPage, setCurrentPage } =
    comicsStore;

  const pagesAmount = Math.ceil(amount / pageSize)
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    loadComics(currentPage * pageSize, pageSize, searchValue);
  }, [currentPage, searchValue]);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Comics</span>
            <span className={classes.counter}>({amount})</span>
          </div>
          <SearchField
            searchValue={searchValue}
            setSearchValue={(value) => {
              setSearchValue(value);
              setCurrentPage(0);
            }}
          />
        </div>
        <CardsList
          list={comics}
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default observer(Comics);
