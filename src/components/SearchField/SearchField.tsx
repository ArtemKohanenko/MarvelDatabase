import { RefObject, useEffect, useRef, useState } from "react";
import classes from "./SearchField.module.scss";
import { VirtuosoGridHandle } from "react-virtuoso";
import { useTranslation } from "react-i18next";

const SearchField = (props: {
  searchValue: string;
  searchPlaceholder?: string;
  listRef?: RefObject<VirtuosoGridHandle>;
  setSearchValue: (value: string) => void;
}) => {
  const searchValue = props.searchValue;
  const searchPlaceholder = props.searchPlaceholder ?? "";
  const listRef = props.listRef;
  const setSearchValue = props.setSearchValue;

  const { t } = useTranslation();
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
    listRef?.current?.scrollToIndex(0);
  };

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.fieldContainer}>
      <input
        className={classes.searchField}
        type="text"
        placeholder={searchPlaceholder}
        value={value}
        onChange={changeHandle}
      ></input>
      <button className={classes.searchButton} onClick={() => submitHandler()}>
        {t("search-button")}
      </button>
    </div>
  );
};

export default SearchField;
