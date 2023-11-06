import { GenericAbortSignal } from "axios";
import { getTodosByBoardId } from "../../api/todos";
import { TodosPage } from "./todos-page";

async function loader({ request: { signal }, params: { boardId } } : { request: { signal: GenericAbortSignal }, params: any}) {
  const todos = getTodosByBoardId(boardId, { signal });

  return {
    todos: await todos
  }
}

export const todosRoute = {
  loader,
  element: <TodosPage/>
}
