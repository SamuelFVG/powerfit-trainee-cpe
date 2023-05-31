import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Editar from "./pages/Editar/Editar";
import Inicio from "./pages/Inicio/Inicio";
import App from "./App";
import useAuthStore from "./stores/auth";

function Routes() {
  const token = useAuthStore((state) => state.token);
  const router = token
    ? createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route element={<App />}>
              <Route path="home" element={<Home />} />
              <Route path="editar" element={<Editar />} />
            </Route>
          </Route>
        )
      )
    : createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path="/" element={<App />}>
              <Route index element={<Inicio />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
            </Route>
          </Route>
        )
      );
  return <RouterProvider router={router} />;
}

export default Routes;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Inicio />} />
//       <Route path="login" element={<Login />} />
//       <Route path="cadastro" element={<Cadastro />} />
//       <Route path="home" element={<Home />} />
//       <Route path="editar" element={<Editar />} />
//     </Route>
//   )
// );
