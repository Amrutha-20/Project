import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import SignInSide from '../component/login';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Spin from './spin';
import Front from './front';
import axios from 'axios';

//google
import {GoogleOAuthProvider} from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
const Home = () => {

  const c1 = useRef();
  const c2 = useRef();
  const pp = useRef();
  const cp = useRef();
  const un=useRef();
  const em=useRef();
  const navigate = useNavigate();
  const handleSign=()=>{
   navigate("/final");
  }

  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };

  const fun1 = () => {
    if (c2.current.checked) {
      cp.current.type = "text";
    } else {
      cp.current.type = "password";
    }
  };

  // const ch = (e) => {
  //   e.preventDefault();
  //   if(un.current.value==="")
  //  {
  //      alert("Enter the User Name.")
  //  }
  // else if(em.current.value==="")
  //   {
  //       alert("Enter the Email.")
  //   }
  //   else if (pp.current.value !== cp.current.value) {
  //     alert("Password must be the same");
  //   }
  //   else if(pp.current.value===""||cp.current.value==="")
  //   {
  //     alert("Enter the password");
  //   }
  //   else if(em.current.value!=="" && un.current.value!=="" && pp.current.value!=="" && cp.current.value!=="")
  //   {
  //     <Front />
  //       navigate("/hhome");
  //   }
  // };
  const ch = async (e) => {
    e.preventDefault();
    
    // Form validation logic (same as before)
  
    if (un.current.value === "") {
      alert("Enter the User Name.");
    } else if (em.current.value === "") {
      alert("Enter the Email.");
    } else if (pp.current.value !== cp.current.value) {
      alert("Password must be the same");
    } else if (pp.current.value === "" || cp.current.value === "") {
      alert("Enter the password");
    } else if (em.current.value !== "" && un.current.value !== "" && pp.current.value !== "" && cp.current.value !== "") {
      try {
        const response = await axios.post(`http://localhost:3000/user`, {
          username: un.current.value,
          email: em.current.value,
          password: pp.current.value,
        });
  
        if (response.data.valid) {
          navigate("/hhome");
        } else {
          alert("Form validation failed. Please check your input.");
        }
      } 
      catch (error) {
        console.error('Error during form validation:', error);
      }
    }
  };
  
 

  //mine
  // const  chh=(e)=>
  // {
  //   if(un.current.value==="")
  //  {
  //      alert("Enter the User Name.")
  //  }
  // else if(em.current.value==="")
  //   {
  //       alert("Enter the Email.")
  //   }
  //   else if (pp.current.value !== cp.current.value) {
  //     alert("Password must be the same");
  //   }
  //   else if(pp.current.value===""||cp.current.value==="")
  //   {
  //     alert("Enter the password");
  //   }
  //   if(em.current.value!=="" && un.current.value!=="" && pp.current.value!=="" && cp.current.value!=="")
  //   {
  //     <Front />
  //       navigate("/hhome");
  //     axios.post(`http://localhost:3001/user`,{
  //     name:un.current.value,
  //     email:em.current.value,
  //     password:c2.current.value
  //   }).then((res)=>{console.log(res.data);<Front />; navigate("/hhome");})
  //   .catch((err)=>{console.log(err);})
  //   }
    
  // }

  return (
    <div id="main">
      <div id="product">
      <h1>DigitalDreams </h1>
      <h4>A perfect platform for Marketing</h4></div>
      
      <form id="fin">
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd">
          <input id="u" type="text" placeholder="User name*" ref={un}  />
          {/* <input id="u" type="text" placeholder="User name*" required /> */}
        </div>
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" ref={em}  />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" autoComplete="off" id="pp" ref={pp}  />
          <input onClick={fun} type="checkbox" id="p1" className="check" check="false" ref={c1} />
        </div>
        <div id="pass1">
          <input type="password" placeholder="Confirm Password*"  autoComplete="off"id="cp" ref={cp}  />
          <input onClick={fun1} type="checkbox" id="p2" className="check"  ref={c2} />
        </div>

        <button onClick={ch} id="b1">
          Sign In
        </button>



        <div id="gg" >
      <GoogleOAuthProvider clientId='424453219764-2e1d2mk9vvo1sovmoflnd6snooircfvk.apps.googleusercontent.com'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const details=jwtDecode(credentialResponse.credential);
          {navigate("/hhome")};
          console.log(details);
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
            </GoogleOAuthProvider>
      </div>



        <button id="b2" onClick={handleSign}>
          Already have an account
        </button>
      </form> </div>
  );
};

export default Home;
