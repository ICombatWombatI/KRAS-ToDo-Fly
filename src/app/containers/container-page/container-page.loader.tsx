import { GenericAbortSignal } from "axios";
import { getBoards } from "../../api/boards";
import { ContainerPage } from "./container-page";

async function loader({ request: { signal } } : { request: { signal: GenericAbortSignal }}) {
  const boards = getBoards({ signal });

  return {
    boards: await boards
  }
}

export const containerRoute = {
  loader,
  element: <ContainerPage/>
}
