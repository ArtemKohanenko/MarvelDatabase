import { action, computed, makeObservable, observable } from "mobx";
import { IListable } from "../types/IListable";

class FavouritesStore {
  @observable
  favourites: IListable[] = [];

  favouritesChanged: IListable[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed
  get amount() {
    return this.favourites.length;
  }

  @action
  getFavourites = () => {
    const favourites: IListable[] = JSON.parse(
      localStorage.getItem("favourites") ?? "[]",
    );

    this.favourites = favourites;
    this.favouritesChanged = favourites.slice();
  };

  @action
  addToFavourites = (item: IListable) => {
    this.favouritesChanged.push(item);
  };

  @action
  removeFromFavourites = (item: IListable) => {
    this.favouritesChanged = this.favouritesChanged.filter(
      (el) => el.id != item.id,
    );
  };

  @action
  saveFavourites = () => {
    this.favouritesChanged.sort((a, b) => {
      const aName = a.name ? a.name : a.title!;
      const bName = b.name ? b.name : b.title!;
      if (aName < bName) {
        return -1;
      } else if (aName > bName) {
        return 1;
      } else {
        return 0;
      }
    });

    localStorage.setItem("favourites", JSON.stringify(this.favouritesChanged));
  };
}

const favouritesStore = new FavouritesStore();

export default favouritesStore;
