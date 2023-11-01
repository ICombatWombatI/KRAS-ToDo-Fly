import { AxiosRequestConfig } from "axios";
import { baseApi } from "./base";
import { Todo } from "../models/todo.model";

export function getTodos(options: AxiosRequestConfig<any> | undefined): Promise<Todo[]> {
  return baseApi.get("todos", options).then(res => res.data)
}

export function getTodoById(todoId: string, options: AxiosRequestConfig<any> | undefined): Promise<Todo> {
  return baseApi.get(`todos/${todoId}`, options).then(res => res.data)
}
