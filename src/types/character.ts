import { IListable } from "./IListable";

interface ComicLink {
  resourceURI: string;
  name: string;
}

export interface ICharacter extends IListable {
  comics: {
    available: number;
    collectionURI: string;
    items: ComicLink[];
  };
}
