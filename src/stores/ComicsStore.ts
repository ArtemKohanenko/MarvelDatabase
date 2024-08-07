import { action, makeObservable, observable, runInAction } from "mobx";
import { IComic } from "../types/comic";
import { getComicById, getComics } from "../api/comics";

class ComicsStore {
  @observable
  comics: IComic[] = [];

  @observable
  total: number = 0;

  @observable
  selectedComic: IComic | null = null;

  @observable
  titleStartsWith: string = "";

  @observable
  loading: boolean = false;

  count: number = 0;

  defaultLoadLimit: number = 36;

  constructor() {
    makeObservable(this);
  }

  @action
  loadFirstComics = async (limit: number): Promise<void> => {
    try {
      this.loading = true;
      let params = { limit };

      if (this.titleStartsWith) {
        params = Object.assign(params, {
          titleStartsWith: this.titleStartsWith,
        });
      }

      const { data } = await getComics(params);
      runInAction(() => {
        this.comics = [...data.data.results];
        this.count = data.data.count;
        this.total = data.data.total;
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
  loadNextComics = async (offset: number, limit: number): Promise<void> => {
    try {
      if (offset >= this.total) {
        return;
      }

      this.loading = true;
      let params = { limit, offset };

      if (this.titleStartsWith) {
        params = Object.assign(params, {
          titleStartsWith: this.titleStartsWith,
        });
      }

      const { data } = await getComics(params);
      runInAction(() => {
        this.comics = [...this.comics, ...data.data.results];
        this.count += data.data.count;
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
  setNameStartsWith = (newString: string) => {
    this.titleStartsWith = newString;
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
