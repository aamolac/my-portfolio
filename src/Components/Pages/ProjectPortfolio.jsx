import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function ProjectPortfolio() {
  return (
    <main>
      <section className="banner banner-portfolio">
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
          Ce projet a pour objectif de concevoir et intégrer{" "}
          <span className="bold">mon portfolio personnel</span>. Il a été pensé
          pour présenter de manière claire et organisée{" "}
          <span className="bold">mon parcours</span>,{" "}
          <span className="bold">mes compétences</span> et{" "}
          <span className="bold">mes réalisations</span> dans le développement
          web. J’ai porté une attention particulière à créer une{" "}
          <span className="bold">interface simple, moderne et responsive</span>,
          permettant une navigation fluide et agréable sur tous les appareils.
          Ce portfolio reflète mon savoir-faire technique ainsi que mon souci du
          détail, en combinant esthétique et fonctionnalité pour offrir une
          expérience utilisateur optimale.
        </p>
      </section>
      <section className="langage-techno container portfolio-langage">
        <h2> Langages et technologies utilisés</h2>
        <div className="front-end">
          <div>
            <h3 className="title-front-end">Front-end</h3>
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
              style des pages, avec SASS pour la réutilisation grâce aux
              variables et mixins.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">JavaScript :</span> pour ajouter des
              fonctionnalités interactives et dynamiser l'expérience
              utilisateur.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">React.js :</span> pour une interface
              dynamique, avec une gestion d'état via le Context.
            </li>
          </ul>
        </div>
        <div className="tool">
          <div>
            <h3 className="title-tool">Outils</h3>
            <div>
              <img
                src="/my-portfolio//image/visual-studio-code.png"
                alt="logo Visual Studio Code"
              />
              <img src="/my-portfolio//image/github.webp" alt="logo GitHub" />
              <img src="/my-portfolio//image/emailjs.png" alt="logo Figma" />
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
              <span className="bold">GitHub :</span> utilisé principalement pour
              le contrôle de version et pour héberger le projet sur GitHub
              Pages.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">EmailJS :</span> pour gérer l'envoi des
              formulaires de contact directement depuis le front-end de manière
              simple et efficace.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectPortfolio;
