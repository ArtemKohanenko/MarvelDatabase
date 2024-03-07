import { IListable } from "./IListable";

interface CharacterLink {
    name: string,
    link: string
}

export interface IComic extends IListable {
    charactersLinks: CharacterLink[]
}