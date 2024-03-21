import { useEffect, useState } from "react";
import classes from "./SearchField.module.scss";

const SearchField = (props: {
  searchValue: string;
  setSearchValue: (value: string) => void;
}) => {
  const searchValue = props.searchValue;
  const setSearchValue = props.setSearchValue;

  const [value, setValue] = useState(searchValue);

  let timeoutId: NodeJS.Timeout | undefined;

  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setSearchValue(value);
    }, 3000);
  }, [value]);

  const submitHandler = () => {
    setSearchValue(value);
  };

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.fieldContainer}>
      <input
        className={classes.searchField}
        type="text"
        placeholder="Search for Characters by Name"
        value={value}
        onChange={changeHandle}
      ></input>
      <button className={classes.searchButton} onClick={submitHandler}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchField;
