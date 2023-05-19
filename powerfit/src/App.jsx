import Routes from "./routes";
import { GlobalStyles } from "./GlobalStyles";
import { Header } from "./components";
import { Footer } from "./components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
