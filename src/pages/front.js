import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./front.css"
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Front() {
  const nav=useRef();
  const navi=useNavigate();
  const handleHome=()=>{
    navi("/login");
    // nav.current.style.display="none";

}
  return (
    <div id="cc">
    <div class="navbar"  ref={nav}>
      
        <div class="logo"  >DigitalDreams</div>
        <div class="links">
          <ul>
            <li ><Link to="/hhome">Home </Link></li>
           <li><Link to="/about">About </Link></li>
            <li><Link to="/service">Service </Link></li>
            <li><Link to="/contact">Contact     </Link></li>
            </ul>
        </div>
            <button id="log"onClick={handleHome}>Log out</button>
            <Avatar id="imgg" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>

    </div>
  )
}
