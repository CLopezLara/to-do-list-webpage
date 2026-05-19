import "./Footer.css";
import { MdContactMail } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
function Footer() {
  return (
    <section className="footer-container">
      <nav className="footer-navbar-container">
        <ul className="footer-navbar-list">
          <li className="footer-navbar-option">
            <a
              href="mailto:1i.lopez.lara.carlos@gmail.com"
              className="footer-navbar-link"
            >
              <MdContactMail className="footer-icon" />
              Contacto
            </a>
          </li>
          <li className="footer-navbar-option">
            <NavLink to="/Privacy" className="footer-navbar-link">
              <MdOutlinePrivacyTip className="footer-icon" />
              Privacidad
            </NavLink>
          </li>
          <li className="footer-navbar-option">
            <a
              href="https://github.com/CLopezLara"
              target="_blank"
              className="footer-navbar-link"
            >
              <FaGithub className="footer-icon" />
              Github
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Footer;
