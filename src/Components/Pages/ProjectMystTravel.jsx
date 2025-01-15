function ProjectMystTravel() {
  return (
    <main>
      <section className="banner-myst-travel">
        <h1>Projet - Myst'Travel</h1>
      </section>
      <section>
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
      <section>
        <h2> Langages et technologies utilisés</h2>
        <ul>
          <li>
            Front-end :
            <ul>
              <li>
                HTML/CSS : pour la structure et le style des pages, avec SASS
                pour la réutilisation grâce aux variables et mixins.
              </li>
              <li>
                JavaScript : pour ajouter des fonctionnalités interactives et
                dynamiser l'expérience utilisateur.
              </li>
              <li>
                React : pour une interface dynamique, avec une gestion d'état
                via le Context (préféré à Redux pour sa simplicité).
              </li>
            </ul>
          </li>
          <li>
            Back-end :
            <ul>
              <li>
                Node.js et Express : pour la création d’une API rapide et légère
                afin de gérer les requêtes.
              </li>
              <li>
                MySQL : pour la gestion des données utilisateurs, destinations
                et réservations, géré via PHPMyAdmin.
              </li>
            </ul>
          </li>
          <li>
            Outils :
            <ul>
              <li>
                Visual Studio Code : comme éditeur de code principal pour le
                développement.
              </li>
              <li>
                Postman et ThunderClient : pour tester et vérifier les routes de
                l'API.
              </li>
              <li>
                GitHub : pour le contrôle de version et la gestion collaborative
                du projet.
              </li>
              <li>
                Figma : pour la création des wireframes adaptés aux formats
                Ordinateur, Tablette et Mobile.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Fonctionnalités</h2>

        <h3>Fonctionnalités Utilisateurs</h3>
        <ul>
          <li>
            Connexion/Inscription : Les utilisateurs peuvent créer un compte ou
            se connecter pour accéder à des fonctionnalités comme la réservation
            de destinations mystères ou la soumission de formulaires pour des
            voyages sur-mesure.
          </li>
          <li>
            Filtrer les destinations mystères : Permet aux utilisateurs de trier
            les destinations selon différentes catégories pour trouver plus
            facilement celles correspondant à leurs attentes.
          </li>
          <li>
            Réservation d’un voyage : Après avoir sélectionné une destination
            mystère, les utilisateurs peuvent demander une réservation en
            indiquant leurs dates et le nombre de participants.
          </li>
          <li>
            Formulaire des voyages sur-mesure : Les utilisateurs peuvent faire
            une demande de voyage sur-mesure via un formulaire, en précisant des
            critères comme le type d’expérience, le budget, ou le climat.
          </li>
          <li>
            Formulaire de contact : Un formulaire permettant aux utilisateurs de
            poser leurs questions et d'entrer en contact avec l'agence.
          </li>
        </ul>

        <h3>Fonctionnalités Administrateurs</h3>
        <ul>
          <li>
            Gérer les utilisateurs : L’administrateur peut visualiser tous les
            utilisateurs inscrits et les supprimer si nécessaire.
          </li>
          <li>
            Gérer les destinations mystères : L’administrateur peut ajouter,
            modifier ou supprimer des destinations mystères et gérer leur
            visibilité sur le site.
          </li>
          <li>
            Gestion des réservations : L’administrateur peut consulter les
            demandes de réservation, modifier leur statut ou supprimer celles
            annulées.
          </li>
          <li>
            Gérer les voyages sur-mesure : L’administrateur peut consulter et
            gérer les demandes de voyages sur-mesure, ainsi que modifier leur
            statut ou les supprimer.
          </li>
          <li>
            Gestion des demandes d’informations : L’administrateur peut
            consulter, modifier le statut ou supprimer les messages reçus via le
            formulaire de contact.
          </li>
        </ul>
      </section>

      <section>
        <h2>Exigences respectées</h2>
        <ul>
          <li>
            Référencement SEO : J’ai optimisé le site pour les moteurs de
            recherche en ajoutant des balises meta et title, en utilisant des
            balises HTML sémantiques et une approche mobile-first.
          </li>
          <li>
            Accessibilité : J’ai garanti une expérience inclusive en utilisant
            une sémantique HTML appropriée, des attributs ARIA, et en assurant
            un contraste des couleurs conforme aux normes WCAG.
          </li>
          <li>
            Adaptabilité : Le site est responsive et compatible avec tous les
            appareils et navigateurs grâce à l’utilisation de Flexbox, Grid, et
            d’images adaptatives.
          </li>
          <li>
            Éco-conception : J’ai optimisé les ressources en utilisant le format
            d’image WebP, en réduisant le nombre de polices et en minifiant les
            fichiers CSS.
          </li>
          <li>
            Conformité RGPD : Les données utilisateurs sont protégées grâce à
            une politique de confidentialité claire et à une collecte limitée et
            sécurisée des informations, notamment en hachant les mots de passe.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default ProjectMystTravel;
