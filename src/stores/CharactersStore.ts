import { action, makeObservable, observable } from "mobx";
import { getCharacterById, getCharacters } from "../api/characters";
import { ICharacter } from "../types/character";

class CharacetrsStore {
  @observable
  characters: ICharacter[] | [] = [];

  @observable
  amount: number = 0;

  @observable
  currentPage: number = 0;

  @observable
  selectedCharacter: ICharacter | null = null;

  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  loadCharacters = async (offset: number, limit: number): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getCharacters({ limit, offset });
      this.characters = data.data.results;
      this.amount = data.data.total;
    } catch (error) {
      console.error(error);
    } finally {
      console.log(this.characters);
      this.loading = false;
    }
  };

  @action
  getCharacterById = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      const { data } = await getCharacterById(id);
      this.selectedCharacter = data.data.results[0];
    } catch (error) {
      console.error(error);
    } finally {
      console.log(this.characters);
      this.loading = false;
    }
  };

  @action
  setCurrentPage = (currentPage: number): void => {
    this.currentPage = currentPage;
  };
}

const characetrsStore = new CharacetrsStore();

export default characetrsStore;
