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

export const isCharacter = (item: any): item is ICharacter => {
  return 'comics' in item && 'available' in item.comics && 'collectionURI' in item.comics && 'items' in item.comics;
}