import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState , useEffect } from "react"; 

const LoginForm = ()=>{
  const [email , setEmail] = useState("");
  const [password , setPassword ] = useState("");
  const [res , setRes] = useState("");

  function clickHandler()
  {
    document.querySelector(".body-container").classList.toggle("hidden");
    document.querySelector("#login-form").classList.toggle("hidden");
  }

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/login" , {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();

    if(data.status === "doesn't exist")
    {
      setRes("user doesn't exist")
    }
    else if (data.status === "wrong password")
    {
      setRes("wrong password");
    }
    else if(data.status === "ok")
    {
      localStorage.setItem("token" , data.token);
      window.location.href = "/landingPage/demande";
    }

  }

  return(
    <form id="login-form" onSubmit={ submitHandler }>  
      <div>
        <FaUser style={ { color:"#555" } } />
        <input 
          type="email" 
          placeholder="Enter email..." 
          value={email}
          onChange={ (e)=>{setEmail(e.target.value)} }
        />
      </div>

      <div>
        <FaLock style={ { color:"#555" } } />
        <input 
          type="password" 
          placeholder="Enter password..." 
          value={ password }
          onChange={ (e)=>{setPassword(e.target.value)} }  
        />
      </div>

      <button id="sign-in-btn2">Sign in</button>
      <h3 style={ {color:"red"} }>{res}</h3>
      <FaArrowLeft onClick={ clickHandler  }  style={ {position:"absolute" , top:"30px" , right:"30px" , transform:"scale(1.6)" , cursor:"pointer" } } />
    </form>
  );
}

export default LoginForm;
