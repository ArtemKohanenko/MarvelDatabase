import { ICharacter } from '../types/character';
import axios from './helpers/axios';

interface ICharacterRequest {
  limit?: number,
  offset?: number
}

interface ICharactersResponse {
  data: {
    total: number,
    results: ICharacter[]
  }
}

export const getCharacters = (params: ICharacterRequest) => axios.get<ICharactersResponse>(
  '/characters',
  {
    params
  });
