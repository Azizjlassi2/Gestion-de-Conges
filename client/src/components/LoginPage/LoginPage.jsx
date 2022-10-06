import React from "react";
import isimm from "./isimm.png";
import Form from "./loginForm/LoginForm.jsx";

const LandingPage = () => {

  function clickHandler(e)
  {
    const container =  document.querySelector(".body-container");
    const form = document.querySelector("#login-form");

    form.classList.toggle("hidden");
    container.classList.toggle("hidden");

  }

  return (
    <div className="landing-container">

      <div className="left-section">
        <div className="title-container">
          <img src={isimm} style={{ height: "100%" }} />

          <h2 style={{ textAlign: "center", fontWeight: "700", transform: "scale(1.05)", color:"#8DC2EE" }} >Institut Supérieur d'Informatique et de Mathématique de Monastir</h2>
        </div>

        <div className="body-container hidden">
          <h1 style={{ fontWeight: "700", fontSize: "40px", color: "#8Dc2EE" , marginBottom:"30px" }}>
            Gestion des congés
          </h1>
          <h2 style={ { lineHeight:"40px" , color:"#555" } }>
            Notre site web facilite la gestion des congées
            des employés de l’institut supérieur de l’informatique
            et de mathématiques de monastir
          </h2>

          <button onClick={ clickHandler } id="sign-in-btn">
            Sign in
          </button>
        </div>
        <Form/>
      </div>

      <div className="right-section">

      </div>
    </div>
  );
}

export default LandingPage;