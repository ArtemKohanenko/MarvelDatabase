import classes from "./SearchField.module.scss";

const SearchField = () => {

  return (
    <div className={classes.fieldContainer}>
      <input
        className={classes.searchField}
        type="text"
        placeholder="Search for Characters by Name"
      ></input>
      <button
        className={classes.searchButton}
      >SEARCH</button>
    </div>
  );
};

export default SearchField;
