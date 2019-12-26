import React from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import Socials from '../components/socials'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <div className="footer-column-wrapper">
                    <div className="footer-content logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="footer-content usefull-links">
                        <h3 className="footer-title">Usefull Links</h3>
                        <div className="links">
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="footer-content stay-connected">
                        <h3 className="footer-title">Usefull Links</h3>
                        <Socials/>
                    </div>
                </div>
            </div>

            <div className="footer-copy">
                Muhammad Bagus Zulmi, Copyright &copy; 2019 
            </div>
        </footer>
    )
}

export default Footer;
