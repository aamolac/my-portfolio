import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <h1>Annaïg MOLAC</h1>
      <Link
        to="https://www.linkedin.com/in/annaïg-molac"
        target="_blank"
        aria-label="Aller sur mon profil Linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link
        to="https://github.com/aamolac"
        target="_blank"
        aria-label="Aller sur mon profil GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <p>© 2025 Portfolio Annaïg Molac - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
