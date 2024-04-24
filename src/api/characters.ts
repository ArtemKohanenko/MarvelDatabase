import { ICharacter } from "../types/character";
import axios from "./helpers/axios";

interface ICharacterRequest {
  limit?: number;
  offset?: number;
  nameStartsWith?: string;
}

interface ICharactersResponse {
  data: {
    total: number;
    count: number;
    results: ICharacter[];
  };
}

export const getCharacters = (params: ICharacterRequest) =>
  axios.get<ICharactersResponse>("/characters", {
    params,
  });

export const getCharacterById = (id: string) =>
  axios.get<ICharactersResponse>(`/characters/${id}`, { params: {} });
