import React from "react";
import {  Routes , Route  } from "react-router-dom";
import LoginPage  from "./LoginPage/LoginPage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Demande from "./CongeForm/Form.jsx";
import "./styles.scss";

const App = () => {
  
  return(
    <>
      <Routes>
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/landingPage" element={  <LandingPage/> }  >
          <Route path="demande" element={ <Demande />  } />
          <Route path="" />
        </Route>
        <Route path="/demande" element={  <Demande/> }  />
      </Routes>
    </>
  );
}

export default App;