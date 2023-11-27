import React from 'react'
import './ContactPage.css';
import Action from './material';
import { Alert } from '@mui/material';
export default function Form() {
  const oc=(e)=>
  {
    e.preventDefault();
    <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
  }
  return (
    <div>

    <div id="flexer">
      
      

      <div id="getter">
        <h1 id="copying">Contact Us</h1>
         <h3 id="ghost">Get in touch</h3>
         <address>
          <p id="gm-com">
          <strong >Email : developer@gmail.com</strong>
          <br></br>
          </p>
          <p id="ppppp">
            <strong >Phone : +91 xxxxx xxxxx</strong>
          </p>
         </address>
         <div id="pointt">
          
         <p id="para-pp">
          <>Connect with our dedicated team members, such as the Head of Digital Dreams and Marketing Manager, who bring their expertise to ensure your brand stands out. Join us on Twitter, Facebook, and Instagram to stay updated on the latest trends and insights</></p>
         </div>

      </div>

      <div id="getter2">
        <form className='contform'> 
        <div>
          <div id="form-cont">
            <input id="name" name="name" placeholder='Enter Name' type="text">
            </input>

          </div>
        </div>

        <div>
          <div id="form-cont">
            <input id="email" name="email" placeholder='Enter Email' type="text">
            </input>

          </div>
        </div>
        <div>
          
            
          
          <textarea id="ttttt" name="message" placeholder="Enter Message" rows="9"  ></textarea>
          
        </div>
        <div>
          <div id="form-cont">
            <button type="submit" onClick={oc}>Send</button>

          </div>
        </div>

        </form>
      </div>
      </div>


    </div>
  )
}
