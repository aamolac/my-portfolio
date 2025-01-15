import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUser,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

function ProjectMystTravel() {
  return (
    <main>
      <section className="banner-myst-travel">
        <h1>Projet - Myst'Travel</h1>
      </section>
      <section className="presentation-myst-travel container">
        <p>
          Dans le cadre de ma formation Développeur Web FullStack à la 3W
          Academy, j'ai créé un projet intitulé Myst'Travel, un site web d'une
          agence de voyage spécialisée dans les voyages mystères. L'agence
          propose deux formules : des destinations mystères, conçu préalablement
          par l’agence, et des destinations sur-mesure, personnalisés grâce à un
          formulaire. L'objectif était de concevoir une plateforme immersive
          permettant aux utilisateurs de découvrir des destinations surprenantes
          en fonction de leurs préférences personnelles.
        </p>
        <p>
          Ce projet a été réalisé pour valider ma formation en développement
          web, et m'a permis de mettre en pratique plusieurs technologies, tout
          en respectant des exigences essentielles en matière d'accessibilité,
          d'adaptabilité, d'éco-conception, de sécurité, de RGPD et de
          référencement SEO.
        </p>
      </section>
      <section className="screen-page container">
        <img
          src="./src/assets/image/myst-travel-home.png"
          alt="Image de la page d'accueil du site Myst'Travel"
        />
      </section>
      <section className="langage-techno container">
        <h2> Langages et technologies utilisés</h2>
        <div className="front-end">
          <div>
            <h3>Front-end</h3>
            <div>
              <img src="./src/assets/image/html-5.png" alt="logo HTML" />
              <img src="./src/assets/image/css-3.png" alt="logo CSS" />
              <img src="./src/assets/image/sass-logo.png" alt="logo SASS" />
              <img src="./src/assets/image/js.png" alt="logo JavaScript" />
              <img src="./src/assets/image/react.png" alt="logo React.JS" />
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
              <span className="bold">React :</span> pour une interface
              dynamique, avec une gestion d'état via le Context (préféré à Redux
              pour sa simplicité).
            </li>
          </ul>
        </div>
        <div className="back-end">
          <div>
            <h3>Back-end</h3>
            <div>
              <img src="./src/assets/image/node-js.jpeg" alt="logo Node.JS" />
              <img src="./src/assets/image/express.png" alt="logo Express" />
              <img src="./src/assets/image/my-sql.png" alt="logo MySQL" />
            </div>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Node.js et Express :</span> pour la
              création d’une API rapide et légère afin de gérer les requêtes.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">MySQL :</span> pour la gestion des données
              utilisateurs, destinations et réservations, géré via PHPMyAdmin.
            </li>
          </ul>
        </div>
        <div className="tool">
          <div>
            <h3>Outils</h3>
            <div>
              <img
                src="./src/assets/image/visual-studio-code.png"
                alt="logo Visual Studio Code"
              />
              <img src="./src/assets/image/github.png" alt="logo GitHub" />
              <img src="./src/assets/image/postman.png" alt="logo Postman" />
              <img src="./src/assets/image/figma.png" alt="logo Figma" />
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
              <span className="bold">Postman :</span> pour tester et vérifier
              les routes de l'API.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">GitHub :</span> pour le contrôle de version
              et la gestion collaborative du projet.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Figma :</span> pour la création des
              wireframes adaptés aux formats Ordinateur, Tablette et Mobile.
            </li>
          </ul>
        </div>
      </section>

      <section className="functionality container">
        <h2>Fonctionnalités</h2>
        <div className="functionality-user">
          <div>
            <h3>Fonctionnalités Utilisateurs</h3>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Connexion/Inscription :</span> Les
              utilisateurs peuvent créer un compte ou se connecter pour accéder
              à des fonctionnalités comme la réservation de destinations
              mystères ou la soumission de formulaires pour des voyages
              sur-mesure.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Filtrer les destinations mystères :</span>{" "}
              Permet aux utilisateurs de trier les destinations selon
              différentes catégories pour trouver plus facilement celles
              correspondant à leurs attentes.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Réservation d’un voyage :</span> Après
              avoir sélectionné une destination mystère, les utilisateurs
              peuvent demander une réservation en indiquant leurs dates et le
              nombre de participants.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Formulaire des voyages sur-mesure :</span>{" "}
              Les utilisateurs peuvent faire une demande de voyage sur-mesure
              via un formulaire, en précisant des critères comme le type
              d’expérience, le budget, ou le climat.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Formulaire de contact :</span> Un
              formulaire permettant aux utilisateurs de poser leurs questions et
              d'entrer en contact avec l'agence.
            </li>
          </ul>
        </div>
        <div className="functionality-admin">
          <div>
            <h3>Fonctionnalités Administrateurs</h3>
            <FontAwesomeIcon icon={faUserGear} />
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Gérer les utilisateurs :</span>{" "}
              L’administrateur peut visualiser tous les utilisateurs inscrits et
              les supprimer si nécessaire.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Gérer les destinations mystères :</span>{" "}
              L’administrateur peut ajouter, modifier ou supprimer des
              destinations mystères et gérer leur visibilité sur le site.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Gestion des réservations :</span>{" "}
              L’administrateur peut consulter les demandes de réservation,
              modifier leur statut ou supprimer celles annulées.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Gérer les voyages sur-mesure :</span>{" "}
              L’administrateur peut consulter et gérer les demandes de voyages
              sur-mesure, ainsi que modifier leur statut ou les supprimer.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">
                Gestion des demandes d’informations :
              </span>{" "}
              L’administrateur peut consulter, modifier le statut ou supprimer
              les messages reçus via le formulaire de contact.
            </li>
          </ul>
        </div>
      </section>

      <section className="requirement container">
        <h2>Exigences respectées</h2>
        <div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Référencement SEO :</span> J’ai optimisé le
              site pour les moteurs de recherche en ajoutant des balises meta et
              title, en utilisant des balises HTML sémantiques et une approche
              mobile-first.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Accessibilité :</span> J’ai garanti une
              expérience inclusive en utilisant une sémantique HTML appropriée,
              des attributs ARIA, et en assurant un contraste des couleurs
              conforme aux normes WCAG.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Adaptabilité :</span> Le site est
              responsive et compatible avec tous les appareils et navigateurs
              grâce à l’utilisation de Flexbox, Grid, et d’images adaptatives.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Éco-conception :</span> J’ai optimisé les
              ressources en utilisant le format d’image WebP, en réduisant le
              nombre de polices et en minifiant les fichiers CSS.
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span className="bold">Conformité RGPD :</span> Les données
              utilisateurs sont protégées grâce à une politique de
              confidentialité claire et à une collecte limitée et sécurisée des
              informations, notamment en hachant les mots de passe.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ProjectMystTravel;
