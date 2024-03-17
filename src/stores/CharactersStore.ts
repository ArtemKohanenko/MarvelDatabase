import { action, makeObservable, observable } from "mobx";
import { getCharacters } from "../api/characters";
import { ICharacter } from "../types/character";


class CharacetrsStore {
    @observable
    characters: ICharacter[] | [] = [];
    
    loading: boolean = false;

    constructor() {
      makeObservable(this);
    }
    
    @action
    loadCharacters = async (): Promise<void> => {
      try {
        this.loading = true;
        const { data } = await getCharacters();
        this.characters = data.data.results;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    };
}
  
const characetrsStore = new CharacetrsStore();
  
export default characetrsStore;
