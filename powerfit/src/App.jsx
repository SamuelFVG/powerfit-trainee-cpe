import Routes from "./routes";
import { GlobalStyles } from "./GlobalStyles";
import { Header, Footer } from "./components";
import { DivGeralApp } from "./Styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <DivGeralApp>
        {/* <Header /> */}
        <Routes />
        <Footer />
      </DivGeralApp>
    </>
  );
}

export default App;
