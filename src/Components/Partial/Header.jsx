import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MenuContext } from "../../store/ContextMenu.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // Appel au composant isOpen et toggleMenu dans le MenuContext
  const { isOpen, toggleMenu } = useContext(MenuContext);
  //Etat pour la tablette
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const navigate = useNavigate();

  // Met à jour la taille de l'écran lorsque la fenêtre est redimensionnée
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gère la classe no-scroll uniquement pour les écrans mobiles
  useEffect(() => {
    if (isOpen && !isTablet) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen, isTablet]);

  // Réinitialise isOpen lorsque la taille de l'écran passe à un mode tablette ou inférieur
  useEffect(() => {
    if (isTablet && isOpen) {
      // Ferme le menu si on passe en mode tablette
      toggleMenu();
    }
  }, [isTablet, isOpen, toggleMenu]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = (id) => {
    if (window.location.pathname === "/") {
      // Si on est déjà sur la page d'accueil
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        toggleMenu();
      }
    } else {
      // Sinon, redirige vers la page d'accueil avec l'ancre
      navigate(`/#${id}`);
      toggleMenu();
    }
  };

  return (
    <header>
      <section
        className={`${isTablet ? "tablet-header container" : "header-mobile"}`}
        aria-label={isTablet ? "En-tête pour tablette" : "En-tête pour mobile"}
      >
        <Link
          to="/"
          title="Aller à la page d'accueil"
          onClick={scrollToTop}
          aria-label="Aller à la page d'accueil"
          className="name"
        >
          Annaïg MOLAC
        </Link>
        {!isTablet ? (
          <div
            id="burger-menu"
            className={isOpen ? "open" : ""}
            role="navigation"
            aria-label="Menu de navigation mobile"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              onClick={toggleMenu}
              role="button"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            />
            {isOpen && (
              <nav>
                <a
                  onClick={() => handleScroll("presentation")}
                  aria-label="Aller sur la section Présentation"
                >
                  Présentation
                </a>
                <a
                  onClick={() => handleScroll("project")}
                  aria-label="Aller sur la section Projets"
                >
                  Projets
                </a>
                <a
                  onClick={() => handleScroll("contact")}
                  aria-label="Aller sur la section Contact"
                >
                  Contact
                </a>
              </nav>
            )}
          </div>
        ) : (
          <nav>
            <a
              onClick={() => handleScroll("presentation")}
              aria-label="Aller sur la section Présentation"
            >
              Présentation
            </a>
            <a
              onClick={() => handleScroll("project")}
              aria-label="Aller sur la section Projets"
            >
              Projets
            </a>
            <a
              onClick={() => handleScroll("contact")}
              aria-label="Aller sur la section Contact"
            >
              Contact
            </a>
          </nav>
        )}
      </section>
    </header>
  );
}

export default Header;
