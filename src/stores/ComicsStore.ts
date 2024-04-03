import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { IComic } from "../types/comic";
import { getComicById, getComics } from "../api/comics";

class ComicsStore {
  @observable
  comics: IComic[] | [] = [];

  @observable
  amount: number = 0;

  pageSize: number = 18;

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

  @computed
  get pagesAmount() {
    return Math.ceil(this.amount / this.pageSize);
  }

  @action
  loadComics = async (
    offset: number,
    limit: number,
    titleStartsWith?: string,
  ): Promise<void> => {
    try {
      this.loading = true;
      let params = { limit, offset };

      if (titleStartsWith) {
        params = Object.assign(params, {
          titleStartsWith,
        });
      }

      const { data } = await getComics(params);
      runInAction(() => {
        this.comics = data.data.results;
        this.amount = data.data.total;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getComicById = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getComicById(id);
      runInAction(() => {
        this.selectedComic = data.data.results[0];
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  setCurrentPage = (currentPage: number): void => {
    this.currentPage = currentPage;
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
