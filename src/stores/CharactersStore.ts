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

  firstCharacterIndx = 0;

  lastCharacterIndx = 0;

  @observable
  selectedCharacter: ICharacter | null = null;

  defaultLoadLimit: number = 36;

  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  loadCharacters = async (
    nameStartsWith?: string,
  ): Promise<void> => {
    try {
      this.loading = true;
      let params = {limit: this.defaultLoadLimit};
      
      if (nameStartsWith) {
        params = Object.assign(params, {
          nameStartsWith,
        });
      }

      const { data } = await getCharacters(params);
      runInAction(() => {
        this.characters = data.data.results;
        this.lastCharacterIndx = data.data.count - 1;
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
    nameStartsWith?: string,
  ): Promise<void> => {
    if (!this.loading) {
      try {
        this.loading = true;
        let params = { limit: this.defaultLoadLimit, offset: this.lastCharacterIndx + 1 };
  
        if (nameStartsWith) {
          params = Object.assign(params, {
            nameStartsWith,
          });
        }
  
        const { data } = await getCharacters(params);
        runInAction(() => {
          this.characters = [...this.characters, ...data.data.results];
          this.lastCharacterIndx += data.data.count;
          console.log(this.lastCharacterIndx)
        });
      } catch (error) {
        console.error(error);
      } finally {
        runInAction(() => {
          this.loading = false;
        });
      }
    }
  };

  @action
  loadPastCharacters = async (
    nameStartsWith?: string,
  ): Promise<void> => {
    try {
      this.loading = true;

      if (this.firstCharacterIndx != 0) {
        const limit = this.firstCharacterIndx >= this.defaultLoadLimit
          ? this.defaultLoadLimit
          : this.firstCharacterIndx;
        const offset = this.firstCharacterIndx - limit;

        let params = { limit, offset };

        if (nameStartsWith) {
          params = Object.assign(params, {
            nameStartsWith,
          });
        }

        const { data } = await getCharacters(params);
        runInAction(() => {
          this.characters = [...data.data.results, ...this.characters];
          this.firstCharacterIndx -= data.data.count;
        });
      }
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
}

const characetrsStore = new CharactersStore();

export default characetrsStore;
