import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import { Virtuoso, VirtuosoGrid } from "react-virtuoso";

interface CardsListProps {
  list: IListable[];
  favourites?: IListable[];
  loadNext: () => void;
  loadPast: () => void;
}

const Loading = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  )
}


const CardsList: React.FC<CardsListProps> = ({
  list,
  favourites = [],
  loadNext,
  loadPast
}) => {
  const favouriteIds = favourites.map((item) => item.id);

  const endReachedHandler = () => {
    console.log('загузка будющих')
    loadNext();
  }

  const startReachedHandler = () => {
    // console.log('загрузка прошлых')
    // setTimeout(() => {
    //   loadPast();
    // }, 200)
  }

  return (
    <div className={classes.wrapper}>
      <VirtuosoGrid
        className={classes.grid}
        totalCount={list.length}
        itemContent={(index: number) => 
            <Card item={list[index]} isFavourite={favouriteIds.includes(list[index].id)} />
        }
        // overscan={12}
        itemClassName={classes.cardSpace}
        listClassName={classes.container}
        endReached={endReachedHandler}
        startReached={startReachedHandler}
        components={{ Footer: Loading }}
      />
    </div>
  );
};

export default CardsList;
