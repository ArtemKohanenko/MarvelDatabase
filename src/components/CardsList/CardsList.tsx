import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import {
  VirtuosoGrid,
  VirtuosoGridHandle,
} from "react-virtuoso";
import Loader from "../Loader/Loader";
import { RefObject } from "react";

interface CardsListProps {
  list: IListable[];
  favourites?: IListable[];
  loadData?: () => void;
  isLoading?: boolean;
  listRef?: RefObject<VirtuosoGridHandle>;
}

const CardsList: React.FC<CardsListProps> = ({
  list,
  favourites = [],
  isLoading,
  loadData,
  listRef,
}) => {
  const favouriteIds = favourites.map((item) => item.id);

  const endReachedHandler = () => {
    if (loadData) {
      loadData();
    }
  };

  return (
    <div className={classes.wrapper}>
      <VirtuosoGrid
        ref={listRef}
        className={classes.grid}
        useWindowScroll
        totalCount={list.length}
        itemContent={(index: number) => (
          <Card
            item={list[index]}
            isFavourite={favouriteIds.includes(list[index].id)}
          />
        )}
        itemClassName={classes.cardSpace}
        listClassName={classes.container}
        endReached={endReachedHandler}
        components={{ Footer: () => <Loader visible={isLoading} /> }}
      />
    </div>
  );
};

export default CardsList;
