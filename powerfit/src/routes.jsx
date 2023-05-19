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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Inicio />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="home" element={<Home />} />
      <Route path="editar" element={<Editar />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
