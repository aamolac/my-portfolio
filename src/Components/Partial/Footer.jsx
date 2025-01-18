import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="container">
        <section className="title">
          <Link
            to="/"
            title="Aller à la page d'accueil"
            onClick={scrollToTop}
            aria-label="Aller à la page d'accueil"
            className="name"
          >
            Annaïg MOLAC
          </Link>
        </section>
        <section className="social-media">
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
        </section>
        <section className="legal">
          <p>© 2025 Portfolio Annaïg Molac - Tous droits réservés</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
