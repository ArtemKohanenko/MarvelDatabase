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

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const isComic = (item: any): item is IComic => {
  return "characters" in item && "items" in item.characters;
};
