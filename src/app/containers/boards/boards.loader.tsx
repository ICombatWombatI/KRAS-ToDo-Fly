import { GenericAbortSignal } from "axios";
import { getBoards } from "../../api/boards";
import { Boards } from "./boards";
import { todosRoute } from "../todos/todos.loader";

async function loader({ request: { signal } } : { request: { signal: GenericAbortSignal }}) {
  const boards = getBoards({ signal });

  return {
    boards: await boards
  }
}

export const boardsRoute = {
  loader,
  element: <Boards/>,
  children: [
    { 
      path: "todos/:boardId", 
      children: [
        { index: true, ...todosRoute }
      ]
    },
  ]
}
