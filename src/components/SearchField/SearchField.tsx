import { useEffect, useRef, useState } from "react";
import classes from "./SearchField.module.scss";

const SearchField = (props: {
  searchValue: string;
  setSearchValue: (value: string) => void;
}) => {
  const searchValue = props.searchValue;
  const setSearchValue = props.setSearchValue;

  const [value, setValue] = useState(searchValue);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchValue(value);
    }, 3000);
  }, [value]);

  const submitHandler = () => {
    clearTimeout(timeoutRef.current);
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
      <button className={classes.searchButton} onClick={() => submitHandler()}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchField;
