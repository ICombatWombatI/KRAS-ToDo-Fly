import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Board } from "../models/boards.model";

export function getBoards(options: AxiosRequestConfig) {
  return baseApi.get<Board[]>("boards", options).then(res => res.data);
}
