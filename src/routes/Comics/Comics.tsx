import CardsList from "../../components/CardsList/CardsList";
import SearchField from "../../components/SearchField/SearchField";
import classes from "./Comics.module.scss";

const Comics = () => {
  const counter = 1562;

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.searchBlock}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>Comics</span>
            <span className={classes.counter}>({counter})</span>
          </div>
          <SearchField />
        </div>
        <CardsList list={[]} />
      </div>
    </>
  );
};

export default Comics;
