import { action, makeObservable, observable } from "mobx";
import { getCharacters } from "../api/characters";
import { ICharacter } from "../types/character";


class CharacetrsStore {
    @observable
    characters: ICharacter[] | [] = [];

    @observable
    amount: number = 0;
    
    loading: boolean = false;

    constructor() {
      makeObservable(this);
    }
    
    @action
    loadCharacters = async (): Promise<void> => {
      try {
        this.loading = true;
        const { data } = await getCharacters({limit: 10});
        this.characters = data.data.results;
        this.amount = data.data.total;
      } catch (error) {
        console.error(error);
      } finally {
        console.log(this.characters)
        this.loading = false;
      }
    };
}
  
const characetrsStore = new CharacetrsStore();
  
export default characetrsStore;
