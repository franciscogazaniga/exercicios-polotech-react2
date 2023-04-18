import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import Listview from "./screens/Listview/Listview";
import { AppLayoutContainer, GlobalStyle, LoadingContainer } from "./styles";
import ReactLoading from 'react-loading';

const App = () => {
  const[isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    //Loading forçado apenas para demonstração
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <GlobalStyle />
      {
        isLoading ?
        <LoadingContainer>
          <ReactLoading type="bubbles" color="#65ACEA"/>
        </LoadingContainer>
        :
        <>
          <Header />
          <AppLayoutContainer>
            <Listview />
          </AppLayoutContainer>
        </>
      }
    </>
  );
};

export default App;
