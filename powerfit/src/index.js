export { default as Home } from "./pages/Home";
export { default as Editar } from "./pages/Editar";
export { default as Login } from "./pages/Login";
export { default as Inicio } from "./pages/Inicio";

const app = require("./App");
const Loaders = require("./Loaders/index")

Loaders.start();

app.listen(8000, () => console.log("Servidor Rodando"))