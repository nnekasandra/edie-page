import React from 'react';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import{faCode} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class About extends React.Component{
    render(){
        return(
            <main id="about">
                <div className="about">
                    <p id="first-paragraph">Unhappy with your website?</p>
                    <h1>We create beautiful and fast web services</h1>
                </div>
                <div className="cover-img">
                <img src="assets/heroImage.jpg" alt="people offering services" className="about-img"/>
                </div>
                <div className=" about about-section2">
                    <h2>Story, emotion and purpose</h2>
                    <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
                    <div className="contact">
                        <p>Want us to contact you?</p>
                        <div className="input">
                            <input type="email" className="mail" placeholder="Email"/>
                            <button>Join</button>
                        </div>
                    </div>
                </div>
                <section className="services">
                    <h2>We offer high demand services </h2>
                    <div className="service">
                        <div className="sub-service">
                            <div className="icons pen">
                                <FontAwesomeIcon icon={faPen} className="icon pen-icon"/>
                            </div>
                            <p className="one">UI/UX Design</p>
                            <p className="service-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <button>Get started</button>
                        </div>
                        <div className='sub-service'>
                            <div className="icons code">
                                <FontAwesomeIcon icon={faCode} className="icon code-icon"/>
                            </div>
                            <p className="two">Frontend</p>
                            <p className="service-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <button id="btn">Get started</button>
                        </div>
                        <div className="sub-service">
                            <div className="icons bars">
                                <FontAwesomeIcon icon={faBars} className="icon bars-icon"/>
                            </div>
                            <p className="three">Backend</p>
                            <p className="service-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                            <button>Get started</button>
                        </div>
                    </div>
                    <div>
                        <h2>Good design means good business</h2>
                        <div className="project">
                            <div className="project1">
                                <figure>
                                    <img src="assets/smarthome.jpg" alt="Smart home dashboard"/>
                                    <figcaption>React Dashboard</figcaption>
                                </figure>
                                <p className="desc">Smart Home Dashboard</p>
                            </div>
                            <div className="project2">
                                <figure>
                                    <img src="assets/onboard.png" alt="Onboard application"/>
                                    <figcaption>UI/UX Design</figcaption>
                                </figure>
                                <p className="desc">Onboard application</p>
                            </div>
                           <div className="project3">
                                <figure>
                                    <img src="assets/booking.png" alt="Booking system"/>
                                    <figcaption>Mobile Responsive</figcaption>
                                </figure>
                                <p className="desc">Booking system</p>
                           </div>
                           <div className="project4">
                                <figure>
                                    <img src="assets/juice-product.png" alt="Booking system"/>
                                    <figcaption>Front End application</figcaption>
                                </figure>
                                <p className="desc">Juice Product Homepage</p>
                           </div>
                        </div>
                        <div className="button">
                            <a href="https://www.google.com">See More &#8594;</a>
                        </div>
                    </div>
                    <div className="team">
                        <div>
                            <p>Meet the Team</p>
                            <h3>We are chilled and a laidback team</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="team-members">
                            <img src="assets/person3.png" alt="team member 1" className="image1"/>
                            <img src="assets/person1.png" alt="team member 2"/>
                            <img src="assets/person2.png" alt="team member 3" className="image3"/>
                        </div>
                    </div>
                    <div className="testimonial-section">
                        <p>“Fast and outstanding results. Edie understands their customer’s needs. They have a young and talented team.”</p>
                        <div className="testimony">
                            <img src="assets/person4.png" alt="customer" className="testimony-image"/>
                            <div>
                                <p>Carlos Trans</p>
                                <p>The Decorate Gatsby</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default About;