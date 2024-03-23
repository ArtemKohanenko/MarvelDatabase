import { IListable } from "./IListable";

interface CharacterLink {
  name: string;
  resourceURI: string;
}

export interface IComic extends IListable {
  characters: {
    items: CharacterLink[];
  };
}
