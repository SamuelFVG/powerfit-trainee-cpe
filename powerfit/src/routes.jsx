import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Editar from "./pages/Editar/Editar";
import Inicio from "./pages/Inicio/Inicio";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token)
  if (token) return <Outlet/>;

  return <Navigate to="/login" replace/>

}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Inicio />} />

        <Route  element={<RotasPrivadas/>}>
        <Route path="home" element={<Home />} />
        <Route path="editar" element={<Editar />} />          
          </Route>

      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
