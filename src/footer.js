import React from 'react';
import './App.css'
class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Works</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h2 className="edie">Edie</h2>
                    <div className="socials">
                        <ul>
                            <li><img src="assets/instagram.svg" alt="instagram icon"/></li>
                            <li><img src="assets/linkedin.svg" alt="linkedin icon"/></li>
                            <li><img src="assets/twitter.svg" alt="twitter icon"/></li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <p className="contact-footer">Want us to contact you?</p>
                    <input type="email" className="mail" placeholder="email"/>
                    <button>Join</button>
                </div>
                <center>
                    <p>Created by <a href="https://www.github.com/nnekasandra">NnekaSandra @devChallenges.io</a></p>
                </center>
            </footer>
        );
    }
}
export default Footer;