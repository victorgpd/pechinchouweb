import { loggedScreensRoutes, screensRoutes } from "./app/routes";
import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

function App() {
  const routesLogged: RouteObject[] = loggedScreensRoutes.map((route) => ({
    ...route,
    // element: <ProtectedRoute>{route.element}</ProtectedRoute>,
  }));

  const router = createBrowserRouter([...screensRoutes, ...routesLogged]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
