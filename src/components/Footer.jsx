import './Footer.css';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return(
        
        <div className="footer-container">
        <div className="socials-footer">
            <div className='socials'>
                <div className='logo-text'>
                    <img src={Logo} alt='logo' className='logo'/>
                    <h4>CHOICEMATRIX</h4>
                </div>
                <div className='social-links'>
                    <FontAwesomeIcon icon={faFacebookF} style={{color: "#1264f3", margin: '20px', height: '25px', width: '25px'}} />
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#5fc1f2", margin: '20px',  height: '25px', width: '25px'}} />
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#cf21f2", margin: '20px',  height: '25px', width: '25px'}} />
                </div>
            </div>
            <div className='about-text-container'>
                <div className='programs'>
                    <h4>Programs</h4>
                    <h5>About Us</h5>
                    <h5>Team</h5>
                    <h5>Blog</h5>
                    <h5>Contact Us</h5>
                </div>
                <div className='resources'>
                    <h4>Resources</h4>
                    <h5>Features</h5>
                    <h5>Pricing</h5>
                    <h5>Login</h5>
                    <h5>Signup</h5>
                </div>
                <div className='legal'>
                    <h4>Legal</h4>
                    <h5>Terms of Use</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Legal Notice</h5>
                </div>
            </div>
        </div>
        <div className="end-footer">
            <p>Terms Of Service | Privacy Policy</p>
            <p>Copyright 2023. All right reserved</p>
        </div>
        </div>
    );
}

export default Footer;