import Routes from "./routes";
import { GlobalStyles } from "./GlobalStyles";
import { Header, Footer } from "./components";
import { DivGeralApp } from "./Styles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <DivGeralApp>
      <Outlet />
      <Footer />
    </DivGeralApp>
  );
}

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <DivGeralApp>
//         {/* <Header /> */}
//         <Routes />
//         <Footer />
//       </DivGeralApp>
//     </>
//   );
// }

export default App;
