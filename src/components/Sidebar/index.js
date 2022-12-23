import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser,faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link to="/">
            <img className='logo' src={logo} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/projects">
                <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferer" href="#">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferer" href="#">
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferer" href="#">
                    <FontAwesomeIcon icon={faFacebook} color="4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
);
export default Sidebar;