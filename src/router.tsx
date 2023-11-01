import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
 import { profileRoute } from "./app/containers/profile-page/profile-page.loader";
import { todosRoute } from "./app/containers/todos-page copy/todos-page.loader";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/todos" /> },
          { path: "todos", ...todosRoute },
          { path: "profile", ...profileRoute },
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
