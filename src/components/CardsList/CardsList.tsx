import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import { VirtuosoGrid } from "react-virtuoso";

interface CardsListProps {
  list: IListable[];
  favourites?: IListable[];
  loadData: () => void;
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
  loadData
}) => {
  const favouriteIds = favourites.map((item) => item.id);

  const endReachedHandler = () => {
    console.log('загузка будющих')
    loadData();
  }

  return (
    <div className={classes.wrapper}>
      <VirtuosoGrid
        className={classes.grid}
        totalCount={list.length}
        itemContent={(index: number) => 
            <Card item={list[index]} isFavourite={favouriteIds.includes(list[index].id)} />
        }
        itemClassName={classes.cardSpace}
        listClassName={classes.container}
        endReached={endReachedHandler}
        components={{ Footer: Loading }}
      />
    </div>
  );
};

export default CardsList;
