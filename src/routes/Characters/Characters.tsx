import CardsList from "../../components/CardsList/CardsList";
import classes from "./Characters.module.scss";
import SearchField from "../../components/SearchField/SearchField";
import CharactersStore from "../../stores/CharactersStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

const Characters = () => {
  const {
    characters,
    amount,
    pageSize,
    pagesAmount,
    loadCharacters,
    currentPage,
    setCurrentPage,
  } = CharactersStore;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    loadCharacters(currentPage * pageSize, pageSize, searchValue);
  }, [currentPage, searchValue]);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Characters</span>
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
          list={characters}
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default observer(Characters);
