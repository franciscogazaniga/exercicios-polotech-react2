import { Header } from "./components/Header/Header";
import Listview from "./screens/Listview/Listview";
import { AppLayoutContainer, GlobalStyle } from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppLayoutContainer>
        <Listview />
      </AppLayoutContainer>
    </>
  );
};

export default App;
