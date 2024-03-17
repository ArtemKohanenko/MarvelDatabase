import { ICharacter } from '../types/character';
import axios from './helpers/axios';

export interface ICharactersResponse {
  data: {
    total: number,
    results: ICharacter[]
  }
}

export const getCharacters = () => axios.get<ICharactersResponse>('/characters');
