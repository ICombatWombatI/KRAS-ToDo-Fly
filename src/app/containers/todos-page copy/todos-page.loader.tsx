import { GenericAbortSignal } from "axios";
import { getTodos } from "../../api/todos";
import { TodosPage } from "./todos-page";

async function loader({ request: { signal } } : { request: { signal: GenericAbortSignal }}) {
  const todos = getTodos({ signal });

  return {
    todos: await todos
  }
}

export const todosRoute = {
  loader,
  element: <TodosPage/>
}
