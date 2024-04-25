import {
  action,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { getCharacterById, getCharacters } from "../api/characters";
import { ICharacter } from "../types/character";

class CharactersStore {
  @observable
  characters: ICharacter[] = [];

  @observable
  total: number = 0;

  @observable
  selectedCharacter: ICharacter | null = null;

  @observable
  nameStartsWith: string = '';

  @observable
  loading: boolean = false;

  count: number = 0;

  defaultLoadLimit: number = 36;

  constructor() {
    makeObservable(this);
  }

  @action
  loadFirstCharacters = async (
    limit: number
  ): Promise<void> => {
    try {
      this.loading = true;
      let params = { limit };

      if (this.nameStartsWith) {
        params = Object.assign(params, {
          nameStartsWith: this.nameStartsWith,
        });
      }
      
      const { data } = await getCharacters(params);
      runInAction(() => {
        this.characters = [...data.data.results];
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
  loadNextCharacters = async (
    offset: number,
    limit: number
  ): Promise<void> => {
    try {
      this.loading = true;
      let params = { limit, offset };

      if (this.nameStartsWith) {
        params = Object.assign(params, {
          nameStartsWith: this.nameStartsWith,
        });
      }
      
      const { data } = await getCharacters(params);
      runInAction(() => {
        this.characters = [...this.characters, ...data.data.results];
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
  setNameStartsWith = (newString: string) => {
    this.nameStartsWith = newString;
  }
}

const characetrsStore = new CharactersStore();

export default characetrsStore;
