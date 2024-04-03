import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { getCharacterById, getCharacters } from "../api/characters";
import { ICharacter } from "../types/character";

class CharactersStore {
  @observable
  characters: ICharacter[] | [] = [];

  @observable
  amount: number = 0;

  pageSize: number = 18;

  @observable
  currentPage: number = 0;

  @observable
  selectedCharacter: ICharacter | null = null;

  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  get pagesAmount() {
    return Math.ceil(this.amount / this.pageSize);
  }

  @action
  loadCharacters = async (
    offset?: number,
    limit?: number,
    nameStartsWith?: string,
  ): Promise<void> => {
    try {
      this.loading = true;
      let params = { limit, offset };

      if (nameStartsWith) {
        params = Object.assign(params, {
          nameStartsWith,
        });
      }

      const { data } = await getCharacters(params);
      runInAction(() => {
        this.characters = data.data.results;
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
  getCharacterById = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getCharacterById(id);
      runInAction(() => {
        this.selectedCharacter = data.data.results[0];
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

const characetrsStore = new CharactersStore();

export default characetrsStore;
