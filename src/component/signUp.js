import React from 'react'
import "./login.css"
export default function Sign() {


  return (
    <div id="main">
        <div align="center" class="dd">
            <label for="u" class="row">User Name: </label>
            <input id="u"  type="text" placeholder='Enter the first name' required/><br/>
        </div>
        <div align="center" class="dd">
            <label for="e" class="row">Email: </label>
            <input id="e" type="email" placeholder='Enter the email' required/><br />
        </div>
          <img src="https://img.freepik.com/premium-vector/sign-page-illustration-design-template_559664-154.jpg?w=360" id="logo"></img>
    
    </div>
  )
}
