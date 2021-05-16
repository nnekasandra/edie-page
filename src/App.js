import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css'
class Header extends React.Component{
  render(){
    return(
      <header>
        <h2>Edie</h2>
        <input type="checkbox" id="navtoggle"/>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Works</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <label>
            <FontAwesomeIcon icon={faBars} className="navbutton"/>
        </label>
      </header>
    );
  }
}
export default Header;