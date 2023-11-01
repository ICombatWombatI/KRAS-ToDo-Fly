import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Board } from "../models/boards.model";

export function getBoards(options: AxiosRequestConfig<any> | undefined): Promise<Board[]> {
  return baseApi.get("boards", options).then(res => res.data)
}
