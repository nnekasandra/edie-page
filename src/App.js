import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="header">
          <h2>Edie</h2>
          <input type="checkbox" id="navtoggle"/>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="https://www.google.com">Our Works</a></li>
              <li><a href="https://www.google.com">Clients</a></li>
              <li><a href="mailto:contact@edie.com">Contact</a></li>
            </ul>
          </nav>
          <label for="navtoggle">
              <FontAwesomeIcon icon={faBars} className="navbutton"/>
          </label>
        </div>
      </header>
    );
  }
}
export default Header;