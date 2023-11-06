import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Todo } from "../models/todo.model";

export function getTodosByBoardId(boardId: string,options: AxiosRequestConfig) {
  console.log(boardId)
  return baseApi.get<Todo[]>(`todos/${boardId}`, options).then(res => res.data);
}
