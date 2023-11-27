import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const c1 = useRef();
  const pp = useRef();
  const em=useRef();
  const navigate = useNavigate();
 

  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };
  const ch = (e) => {
    e.preventDefault();
    navigate("/signUp");
  };

 

  return (
    <div id="main" >
      
      <form>
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" ref={em} required />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" autoComplete="off" id="pp" ref={pp} required />
          <input onClick={fun} type="checkbox" id="p1" className="check" check="false" ref={c1} />
        </div>
        

        <button onClick={ch} id="b1">
          Login
        </button>
        
      </form>
      <img src="https://img.freepik.com/premium-vector/sign-page-illustration-design-template_559664-154.jpg?w=360" id="logo"></img>
    
    </div>
  );
};

export default Login;


