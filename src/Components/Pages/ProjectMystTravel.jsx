function ProjectMystTravel() {
  return (
    <main>
      <h2>Projet - Myst'Travel</h2>
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
        <h3> Langages et technologies utilisés</h3>
        <ul>
          <li>
            Frontend :
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
            Backend :
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
        <h3>Fonctionnalités</h3>

        <h4>Fonctionnalités Utilisateurs</h4>
        <ul>
          <li>
            <strong>Connexion/Inscription :</strong> Les utilisateurs peuvent
            créer un compte ou se connecter pour accéder à des fonctionnalités
            comme la réservation de destinations mystères ou la soumission de
            formulaires pour des voyages sur-mesure.
          </li>
          <li>
            <strong>Filtrer les destinations mystères :</strong> Permet aux
            utilisateurs de trier les destinations selon différentes catégories
            pour trouver plus facilement celles correspondant à leurs attentes.
          </li>
          <li>
            <strong>Réservation d’un voyage :</strong> Après avoir sélectionné
            une destination mystère, les utilisateurs peuvent demander une
            réservation en indiquant leurs dates et le nombre de participants.
          </li>
          <li>
            <strong>Formulaire des voyages sur-mesure :</strong> Les
            utilisateurs peuvent faire une demande de voyage sur-mesure via un
            formulaire, en précisant des critères comme le type d’expérience, le
            budget, ou le climat.
          </li>
          <li>
            <strong>Formulaire de contact :</strong> Un formulaire permettant
            aux utilisateurs de poser leurs questions et d'entrer en contact
            avec l'agence.
          </li>
        </ul>

        <h4>Fonctionnalités Administrateurs</h4>
        <ul>
          <li>
            <strong>Gérer les utilisateurs :</strong> L’administrateur peut
            visualiser tous les utilisateurs inscrits et les supprimer si
            nécessaire.
          </li>
          <li>
            <strong>Gérer les destinations mystères :</strong> L’administrateur
            peut ajouter, modifier ou supprimer des destinations mystères et
            gérer leur visibilité sur le site.
          </li>
          <li>
            <strong>Gestion des réservations :</strong> L’administrateur peut
            consulter les demandes de réservation, modifier leur statut ou
            supprimer celles annulées.
          </li>
          <li>
            <strong>Gérer les voyages sur-mesure :</strong> L’administrateur
            peut consulter et gérer les demandes de voyages sur-mesure, ainsi
            que modifier leur statut ou les supprimer.
          </li>
          <li>
            <strong>Gestion des demandes d’informations :</strong>{" "}
            L’administrateur peut consulter, modifier le statut ou supprimer les
            messages reçus via le formulaire de contact.
          </li>
        </ul>
      </section>

      <section>
        <h3>Exigences respectées</h3>

        <h4>Accessibilité</h4>
        <p>
          Le projet a été conçu pour être accessible à tous, y compris aux
          personnes handicapées. Les points clés incluent :
        </p>
        <ul>
          <li>
            <strong>Navigation au clavier</strong> : L’ensemble du site est
            navigable via le clavier.
          </li>
          <li>
            <strong>Couleurs contrastées</strong> : Les couleurs et contrastes
            ont été choisis pour garantir une bonne lisibilité, même pour les
            personnes malvoyantes.
          </li>
          <li>
            <strong>Texte alternatif pour les images</strong> : Des descriptions
            textuelles ont été ajoutées à toutes les images pour faciliter la
            navigation pour les utilisateurs de lecteurs d’écran.
          </li>
        </ul>

        <h4>Adaptabilité</h4>
        <p>
          Le site est <strong>responsive</strong> et s’adapte parfaitement à
          tous les types d’écrans :
        </p>
        <ul>
          <li>
            <strong>Mobile-first</strong> : Le design est optimisé pour les
            appareils mobiles, en utilisant des <strong>media queries</strong>{" "}
            pour ajuster la mise en page en fonction de la taille de l’écran.
          </li>
          <li>
            <strong>Utilisation de flexbox et grid</strong> : Ces techniques
            permettent d'organiser les contenus de manière flexible et fluide.
          </li>
        </ul>

        <h4>Éco-conception</h4>
        <p>
          Le projet a été conçu dans une optique de{" "}
          <strong>réduction de l'empreinte écologique</strong>, en privilégiant
          :
        </p>
        <ul>
          <li>
            <strong>Optimisation des images</strong> : Toutes les images sont
            compressées pour réduire leur taille et ainsi diminuer les besoins
            en bande passante.
          </li>
          <li>
            <strong>Code léger</strong> : Le code JavaScript et CSS a été
            optimisé pour réduire le nombre de requêtes et améliorer les
            performances du site.
          </li>
        </ul>

        <h4>Référencement SEO</h4>
        <p>
          Le site a été conçu en respectant les bonnes pratiques du
          référencement pour améliorer sa visibilité sur les moteurs de
          recherche :
        </p>
        <ul>
          <li>
            <strong>Optimisation des balises meta</strong> : Chaque page utilise
            des balises title et meta description adaptées.
          </li>
          <li>
            <strong>Structure HTML sémantique</strong> : Le code HTML utilise
            les balises sémantiques appropriées pour améliorer l’indexation par
            les moteurs de recherche.
          </li>
          <li>
            <strong>URL propres et lisibles</strong> : Les URLs sont optimisées
            pour être compréhensibles et contenir des mots-clés.
          </li>
        </ul>

        <h4>Sécurité et RGPD</h4>
        <p>
          La sécurité des utilisateurs a été une priorité, notamment en ce qui
          concerne la gestion des données personnelles :
        </p>
        <ul>
          <li>
            <strong>Authentification sécurisée</strong> : Le mot de passe des
            utilisateurs est haché à l'aide de <strong>bcrypt</strong> pour
            garantir la confidentialité des informations.
          </li>
          <li>
            <strong>Conformité RGPD</strong> : Le site respecte les normes du{" "}
            <strong>RGPD</strong> en matière de gestion des données
            personnelles, avec des mécanismes de consentement clairs et une
            gestion transparente des informations collectées.
          </li>
        </ul>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          Myst'Travel est un projet qui m'a permis de développer mes compétences
          techniques en développement web, tout en prenant en compte des aspects
          cruciaux tels que l'accessibilité, l'adaptabilité, l'éco-conception,
          la sécurité et le SEO. Ce projet a été un excellent moyen pour moi de
          démontrer mes capacités à créer une application web moderne et
          responsable, tout en répondant aux attentes des utilisateurs et des
          exigences du marché.
        </p>
      </section>
    </main>
  );
}

export default ProjectMystTravel;
