import { GenericAbortSignal } from "axios";
import { Todos } from "./todos";
import { getTodosByBoardId } from "../../api/todos";

async function loader({ request: { signal }, params: { boardId } } : { request: { signal: GenericAbortSignal }, params: any}) {
  const todos = getTodosByBoardId(boardId, { signal });

  return {
    todos: await todos
  }
}

export const todosRoute = {
  loader,
  element: <Todos/>
}
