import { IComic } from "../types/comic";
import axios from "./helpers/axios";

interface IComicsRequest {
  limit?: number;
  offset?: number;
  titleStartsWith?: string;
}

interface IComicsResponse {
  data: {
    total: number;
    results: IComic[];
  };
}

export const getComics = (params: IComicsRequest) =>
  axios.get<IComicsResponse>("/comics", {
    params,
  });

export const getComicById = (id: string) =>
  axios.get<IComicsResponse>(`/comics/${id}`, { params: {} });
