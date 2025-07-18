import { RoutesEnum } from "../enums/enums";
import type { RouteObject } from "react-router-dom";

import Screen from "../components/Screen";
import Home from "../pages/Home";

export const screensRoutes: RouteObject[] = [
  {
    path: RoutesEnum.Home,
    element: <Screen />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutesEnum.Login,
        element: (
          <div>Login</div>
          //   <PublicOnlyRoute>
          // <Login />
          //   </PublicOnlyRoute>
        ),
      },
      {
        path: RoutesEnum.Register,
        element: (
          <div>Register</div>
          //   <PublicOnlyRoute>
          // <Register />
          //   </PublicOnlyRoute>
        ),
      },
    ],
  },
];

export const loggedScreensRoutes: RouteObject[] = [
  {
    path: RoutesEnum.Home,
    element: <Screen />,
    children: [
      //   {
      //     path: RoutesEnum.Painel,
      //     element: <Painel />,
      //   },
      //   {
      //     path: RoutesEnum.Fotos,
      //     element: <div>Fotos</div>,
      //   },
      //   {
      //     path: RoutesEnum.FotosCadastrar,
      //     element: <div>FotosCadastrar</div>,
      //   },
      //   {
      //     path: RoutesEnum.Clientes,
      //     element: <div>Clientes</div>,
      //   },
      //   {
      //     path: RoutesEnum.ClientesCadastrar,
      //     element: <div>ClientesCadastrar</div>,
      //   },
      //   {
      //     path: RoutesEnum.Ensaios,
      //     element: <div>Ensaios</div>,
      //   },
      //   {
      //     path: RoutesEnum.EnsaiosCadastrar,
      //     element: <div>EnsaiosCadastrar</div>,
      //   },
    ],
  },
];
