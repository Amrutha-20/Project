import logo from './logo.svg';
import './App.css';
import SignInSide from './component/login';
import Sign from './component/signUp';
import Home from './pages/home';
import MyComponent from './pages/Pass';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Front from './pages/front';
import About from './linkingPages/About';
import Contact from './linkingPages/Contact';
import Service from './linkingPages/Service';
import HomePage from './linkingPages/HomePage';
import Final from './component/FinalLog';
import {GoogleOAuthProvider} from '@react-oauth/google'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         {/* <Front /> */}
      <Routes>
          <Route  path="/hhome" element={<HomePage />}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/login" element={<Home />}></Route>
          <Route path="/sign" elment={<SignInSide />}></Route>
          <Route path="/final" element={<Final />}></Route>
      </Routes>
     </BrowserRouter>

    

    </div>
  );
}

export default App;
