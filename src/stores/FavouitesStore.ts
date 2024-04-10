import { action, computed, makeObservable, observable } from "mobx";
import { IListable } from "../types/IListable";
import { ICharacter, isCharacter } from "../types/character";
import { IComic, isComic } from "../types/comic";

class FavouritesStore {
  @observable
  favourites: IListable[] = [];

  @observable
  charactersFavourites: ICharacter[] = [];

  @observable
  comicsFavourites: IComic[] = [];

  pagesAmount: number = 1;

  currentPage: number = 0;

  constructor() {
    makeObservable(this);
  }

  @computed
  get amount() {
    return this.favourites.length;
  }

  @computed
  get pageSize() {
    return this.pagesAmount;
  }

  @action
  getFavourites = () => {
    const charactersFavourites: ICharacter[] = JSON.parse(
      localStorage.getItem("charactersFavourites") ?? "[]",
    );
    const comicsFavourites: IComic[] = JSON.parse(
      localStorage.getItem("comicsFavourites") ?? "[]",
    );

    const favourites: IListable[] = (
      charactersFavourites as IListable[]
    ).concat(comicsFavourites);
    favourites.sort((a, b) => {
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

    this.charactersFavourites = charactersFavourites;
    this.comicsFavourites = comicsFavourites;
    this.favourites = favourites;
  };

  @action
  addToFavourites = (item: IListable) => {
    if (isCharacter(item)) {
      this.charactersFavourites.push(item as ICharacter);
    } else if (isComic(item)) {
      this.comicsFavourites.push(item as IComic);
    }
  };

  @action
  removeFromFavourites = (item: IListable) => {
    if (isCharacter(item)) {
      this.charactersFavourites = this.charactersFavourites.filter(
        (el) => el.id != item.id,
      );
    } else if (isComic(item)) {
      this.comicsFavourites = this.comicsFavourites.filter(
        (el) => el.id != item.id,
      );
    }
  };

  @action
  saveFavourites = () => {
    localStorage.setItem(
      "charactersFavourites",
      JSON.stringify(this.charactersFavourites),
    );
    localStorage.setItem(
      "comicsFavourites",
      JSON.stringify(this.comicsFavourites),
    );
  };
}

const favouritesStore = new FavouritesStore();

export default favouritesStore;
