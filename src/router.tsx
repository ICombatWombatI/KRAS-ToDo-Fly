import { createBrowserRouter, useRouteError } from "react-router-dom";
import { boardsRoute } from "./app/containers/boards/boards.loader";
import { profileRoute } from "./app/containers/profile/profile.loader";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: "/", ...boardsRoute },
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
