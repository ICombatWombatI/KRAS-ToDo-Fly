import { createBrowserRouter, useRouteError } from "react-router-dom";
import { todosRoute } from "./app/containers/todos-page/todos-page.loader";
import { App } from "./App";
import { containerRoute } from "./app/containers/container-page/container-page.loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            ...containerRoute,
            children: [
              { 
                path: "todos/:boardId", 
                children: [
                  { index: true, ...todosRoute }
                ]
              },
            ]
          },
          //{ path: "profile", ...profileRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
])

function ErrorPage() {
  const error = useRouteError() as { message: string; stack: string };

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
