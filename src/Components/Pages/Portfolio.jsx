import { Link } from "react-router-dom";

function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main>
      <section id="presentation">
        <h2>Présentation</h2>
        <p>Je m'appelle Annaïg MOLAC, j'ai 27 ans et je viens de Bretagne.</p>
        <p>
          Après plusieurs années dans le domaine de la chimie et de la
          cosmétologie et trois ans d'expérience en réglementation cosmétique,
          j'ai décidé de me réorienter vers l'informatique et plus précisément,
          le métier de Développeur Web. Ce choix vient de mon envie de
          travailler dans un domaine plus stimulant où je pourrais mettre à
          profit mes compétences logiques et méthodiques, peu exploitées dans
          mon précédent emploi.
        </p>
        <p>
          Aprés avoir suivi des formations en ligne et appris les bases du code,
          j'ai réalisé que ce domaine correspond à mes envies. Ce métier me
          motive également par sa polyvalence, permettant d’intervenir dans
          divers secteurs d’activité.
        </p>
        <h3>Formation</h3>
        <h4>Développeur Web FullStack - Titre RNCP 5 (équivalence bac +2)</h4>

        <h3>Langages</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>SASS</p>
        <p>JavaScript</p>
        <p>React.JS</p>
        <p>Node.JS</p>
        <p>Express</p>
        <p>MySQL</p>

        <h3>Outils</h3>
        <p>Git</p>
        <p>Visual Studio Code</p>
        <p>Postman</p>
        <p>Figma</p>
      </section>
      <section id="project">
        <h2>Projets</h2>
        <article>
          <h3>Myst'Travel</h3>
          <Link
            to="/project-myst-travel"
            onClick={scrollToTop}
            aria-label="Aller sur la page de mon projet : Myst'Travel"
          >
            Voir le projet
          </Link>
        </article>
        <article>
          <h3>Mon Portfolio</h3>
          <Link
            to="/project-portfolio"
            onClick={scrollToTop}
            aria-label="Aller sur la page de mon projet : Portfolio"
          >
            Voir le projet
          </Link>
        </article>
      </section>
      <section id="contact">
        <h2>Contact</h2>

        <form>
          <label for="name">Votre nom</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Entrer votre nom"
            required
          />
          <label for="email">Votre adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrer votre adresse mail"
            required
          />
          <label for="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Veuillez indiquer votre message"
            required
          ></textarea>
          <button type="submit" aria-label="Envoyer votre message">
            Envoyer un message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Portfolio;
