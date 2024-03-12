import { IListable } from "./IListable";

interface ComicLink {
  name: string;
  link: string;
}

export interface ICharacter extends IListable {
  comicsLinks: ComicLink[];
}
