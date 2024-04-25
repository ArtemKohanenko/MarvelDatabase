import classes from "./CardsList.module.scss";
import { IListable } from "../../types/IListable";
import Card from "../Card/Card";
import { VirtuosoGrid } from "react-virtuoso";
import { Audio, Oval } from 'react-loader-spinner'
import Loader from "../Loader/Loader";

interface CardsListProps {
  list: IListable[];
  favourites?: IListable[];
  loadData: () => void;
  isLoading? :boolean;
}

const CardsList: React.FC<CardsListProps> = ({
  list,
  favourites = [],
  isLoading,
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
        components={{ Footer: () => <Loader visible={isLoading}/>}}/>
    </div>
  );
};

export default CardsList;
