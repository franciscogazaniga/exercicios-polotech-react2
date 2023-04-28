import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { AppLayoutContainer, GlobalStyle, LoadingContainer } from "./styles";
import ReactLoading from 'react-loading';
import { TaskProvider } from "context/task.context";
import { IUser } from "screens/Register/Register.type";

import { lazy } from "react"; 
const ListView = lazy(() => import('./screens/Listview/Listview'))
const Register = lazy(() => import('./screens/Register/Register'))

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
      <TaskProvider>
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
              <Suspense fallback={<LoadingContainer />}>
                <Router>
                  <Routes>
                    <Route path="/" element={<Register onSubmit={function handleOnSubmit(data: IUser): void {}} />} />
                    <Route path="/listview" element={<ListView />} />
                  </Routes>
                </Router>
              </Suspense>
              {/* <Listview /> */}
            </AppLayoutContainer>
          </>
        }
      </TaskProvider>
    </>
  );
};

export default App;
