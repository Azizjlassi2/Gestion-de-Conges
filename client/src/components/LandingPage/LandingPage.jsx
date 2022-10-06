import React from "react";
import Dashboard from "./Dashboard";
import Form from "../CongeForm/Form.jsx";
import img from "./a.webp";
import { Route , Routes  } from "react-router-dom";

const LandingPage = () => {
  const a = 5;

  return(
    <div style={ {display:"flex"} } >
      <Dashboard/>
      
      <div className="middle">
        <Routes>
          <Route path="demande" element={ <Form/>  }/>
        </Routes>
      </div>

      <div className="img">
        <img style={ {width:"100%"} } src={ img } />
      </div>
    </div>
  );
}

export default LandingPage;