// Import necessary React modules
import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Form from './Form';
import Front from '../pages/front';


// Contact component
const Contact = () => {
  return (
    <div>
      <Front />
      <div id="amrutha">
      <section className='section-white'>
            <div>
              <h2 className="section-title" >
                The Team Behind DigitalDreams
              </h2>
             
            </div>
      <div id="Monkeys">
          
              <div className='team-item'>

                <img src="amreth.jpg" className="team-img" alt="im"/>
                  <h3>Amreth S</h3>
                  <div className='team-info'>
                    <br></br>
                    <p>Head of DigitalDreams</p>
                    <br></br>
                    <ul className='team-icon'>
                      <li>
                      <FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
                      </li>

                    </ul>
                    <br></br>
                    <br></br>
                  </div>
              </div>
                

            
              <div className='team-item'>

                <img src="Amrutha.jpg" className="team-img" alt="im"/>
                  <h3>Amrutha A</h3>
                  <div className='team-info'>
                  <br></br>
                    <p>Marketing Manager</p>
                  <br></br>
                    <ul className='team-icon'>
                      <li>
                      <FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
                      </li>

                    </ul>
                    <br></br>
                    <br></br>

                    
                  </div>
                

              </div>
              <div className='team-item'>

                <img src="chandru.jpg" className="team-img" alt="im"/>
                  <h3>Chandru Guru C</h3>
                  <div className='team-info'>
                    <br></br>
                    <p>Designer</p>
                    <br></br>
                    <ul className='team-icon'>
                      <li>
                      <FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faFacebook} className="fa-facebook" />
                      </li>
                      <li>
                      <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
                      </li>

                    </ul>
                    <br></br>
                    <br></br>

                   
                  </div>
                

              </div>
             </div> 
           
          
        
      </section>

    

      </div>
     
     <Form/>
     
    </div>
      

  );
};

// Export the Contact component
export default Contact;

