import React from "react";
import { GlobalStyle, Positioner, ContentWrapper } from "./Style/GlobalStyle";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { SidebarPage } from "./Pages";


const App: React.FC = () => {

  return (
    <BrowserRouter>
        <GlobalStyle />
        <Positioner>
          <SidebarPage />
          <ContentWrapper>
            <Router />
          </ContentWrapper>
        </Positioner>
    </BrowserRouter>
  );
};

export default App;
