import { action, makeObservable, observable } from "mobx";
import { IComic } from "../types/comic";
import { getComicById, getComics } from "../api/comics";

class ComicsStore {
  @observable
  comics: IComic[] | [] = [];

  @observable
  amount: number = 0;

  @observable
  currentPage: number = 0;

  @observable
  selectedCharacter: IComic | null = null;

  @observable
  selectedComic: IComic | null = null;

  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  loadComics = async (offset: number, limit: number): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getComics({ limit, offset });
      this.comics = data.data.results;
      console.log(this.comics);
      this.amount = data.data.total;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  };

  @action
  getComicById = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getComicById(id);
      this.selectedComic = data.data.results[0];
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  };

  @action
  setCurrentPage = (currentPage: number): void => {
    this.currentPage = currentPage;
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
