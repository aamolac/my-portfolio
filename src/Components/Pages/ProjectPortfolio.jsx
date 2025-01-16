import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function ProjectPortfolio() {
  return (
    <main>
      <section className="banner-portfolio">
        <h1>Projet - Mon Portfolio</h1>
        <div>
          <p>Lien GitHub du projet</p>
          <Link
            to="https://github.com/aamolac/my-portfolio"
            target="_blank"
            aria-label="Aller sur le GitHub du projet Mon Portfolio"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </section>
      <section className="presentation-portfolio container">
        <p>
          Ce projet a pour objectif de concevoir et intégrer mon portfolio
          personnel. Il a été pensé pour présenter de manière claire et
          organisée mon parcours, mes compétences et mes réalisations dans le
          développement web. J’ai porté une attention particulière à créer une
          interface simple, moderne et responsive, permettant une navigation
          fluide et agréable sur tous les appareils. Ce portfolio reflète mon
          savoir-faire technique ainsi que mon souci du détail, en combinant
          esthétique et fonctionnalité pour offrir une expérience utilisateur
          optimale.
        </p>
      </section>
      <section className="langage-techno container">
        <h2> Langages et technologies utilisés</h2>
        <div>
          <h3>Front-end</h3>
          <div>
            <img src="/my-portfolio/image/html-5.png" alt="logo HTML" />
            <img src="/my-portfolio//image/css-3.png" alt="logo CSS" />
            <img src="/my-portfolio//image/sass-logo.png" alt="logo SASS" />
            <img src="/my-portfolio//image/js.png" alt="logo JavaScript" />
            <img src="/my-portfolio//image/react.png" alt="logo React.JS" />
          </div>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faArrowRight} />{" "}
            <span className="bold">HTML/CSS :</span> pour la structure et le
            style des pages, avec SASS pour la réutilisation grâce aux variables
            et mixins.
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight} />{" "}
            <span className="bold">JavaScript :</span> pour ajouter des
            fonctionnalités interactives et dynamiser l'expérience utilisateur.
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRight} />{" "}
            <span className="bold">React.js :</span> pour une interface
            dynamique, avec une gestion d'état via le Context (préféré à Redux
            pour sa simplicité).
          </li>
        </ul>

        <div className="tool">
          <div>
            <h3>Outils</h3>
            <div>
              <img
                src="/my-portfolio//image/visual-studio-code.png"
                alt="logo Visual Studio Code"
              />
              <img src="/my-portfolio//image/github.png" alt="logo GitHub" />
            </div>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Visual Studio Code :</span> comme éditeur
              de code principal pour le développement.
            </li>

            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">GitHub :</span> pour le contrôle de version
              et la gestion collaborative du projet.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectPortfolio;
