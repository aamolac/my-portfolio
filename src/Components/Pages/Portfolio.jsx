import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  const [msg, setMsg] = useState("");

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Initialiser EmailJS
  React.useEffect(() => {
    emailjs.init("user_"); // Remplacez par votre User ID d'EmailJS
  }, []);

  // Validation du formulaire
  const validateForm = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Validation de tous les champs requis
    if (!name || !email || !message) {
      setMsg("Tous les champs sont requis.");
      return false;
    }

    // Validation de l'email
    const emailValidate = /.+@.+\..+/;
    if (!emailValidate.test(email)) {
      setMsg("L'adresse email n'est pas valide.");
      return false;
    }

    // Vérification des espaces internes dans l'email
    if (email.includes(" ")) {
      setMsg("L'adresse email ne doit pas contenir d'espaces.");
      return false;
    }

    // Validation du message (doit contenir au moins 10 caractères)
    if (!message || message.trim().length < 10) {
      setMsg("Le message doit contenir au moins 10 caractères.");
      return false;
    }

    return true; //
  };

  // Gérer la soumission du formulaire
  const submitHandler = async (e) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    e.preventDefault();

    if (!validateForm(e)) {
      // Ne pas soumettre si le formulaire est invalide
      return;
    }

    // Si le formulaire est valide, appeler l'envoi du message
    sendEmail(e.target);
  };

  // Gérer l'envoi du formulaire via EmailJS
  const sendEmail = (form) => {
    const formData = new FormData(form);

    emailjs
      .sendForm("service_rnfdhfd", "template_lqm1i3n", formData)
      .then(function (response) {
        setMsg("Message envoyé avec succès !");
      })
      .catch(function (error) {
        setMsg("Erreur lors de l'envoi du message : " + error.text);
      });
  };

  return (
    <main>
      <section className="banner">
        <h1>Annaïg MOLAC</h1>
        <p>Développeuse Web FullStack</p>
        <div className="social-media">
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
        </div>
      </section>
      <section id="presentation">
        <div className="introduction">
          <h2>Présentation</h2>
          <p>Je m'appelle Annaïg MOLAC, j'ai 27 ans et je viens de Bretagne.</p>
          <p>
            Après plusieurs années dans le domaine de la chimie et de la
            cosmétologie et trois ans d'expérience en réglementation cosmétique,
            j'ai décidé de me réorienter vers l'informatique et plus
            précisément, le métier de Développeur Web. Ce choix vient de mon
            envie de travailler dans un domaine plus stimulant où je pourrais
            mettre à profit mes compétences logiques et méthodiques, peu
            exploitées dans mon précédent emploi.
          </p>
          <p>
            Aprés avoir suivi des formations en ligne et appris les bases du
            code, j'ai réalisé que ce domaine correspond à mes envies. Ce métier
            me motive également par sa polyvalence, permettant d’intervenir dans
            divers secteurs d’activité.
          </p>
        </div>
        <div className="training">
          <h3>Formation</h3>
          <p>Développeur Web FullStack - Titre RNCP 5 (équivalence bac +2)</p>
        </div>
        <div className="techno">
          <h3>Langages</h3>
          <div>
            <div>
              <p>HTML</p>
              <img src="/src/assets/image/html-5.png" alt="logo HTML" />
            </div>
            <div>
              <p>CSS</p>
              <img src="/src/assets/image/css-3.png" alt="logo CSS" />
            </div>
            <div>
              <p>SASS</p>
              <img src="/src/assets/image/sass-logo.png" alt="logo SASS" />
            </div>
            <div>
              <p>JavaScript</p>
              <img src="/src/assets/image/js.png" alt="logo JavaScript" />
            </div>
            <div>
              <p>React.JS</p>
              <img src="/src/assets/image/react.png" alt="logo React.JS" />
            </div>
            <div>
              <p>Node.JS</p>
              <img src="/src/assets/image/node-js.png" alt="logo Node.JS" />
            </div>
            <div>
              {/* <p>Express</p> */}
              <img src="/src/assets/image/express.png" alt="logo Express" />
            </div>
            <div>
              {/* <p>MySQL</p> */}
              <img src="/src/assets/image/my-sql.png" alt="logo MySQL" />
            </div>
          </div>
        </div>
        <div className="techno">
          <h3>Outils</h3>
          <div>
            <div>
              <p>GitHub</p>
              <img src="/src/assets/image/github.png" alt="logo GitHub" />
            </div>
            <div>
              <p>Visual Studio Code</p>
              <img
                src="/src/assets/image/visual-studio-code.png"
                alt="logo Visual Studio Code"
              />
            </div>
            <div>
              <p>Postman</p>
              <img src="/src/assets/image/postman.png" alt="logo Postman" />
            </div>
            <div>
              <p>Figma</p>
              <img src="/src/assets/image/figma.png" alt="logo Figma" />
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <h2>Projets</h2>
        <article>
          <img
            src="/src/assets/image/myst-travel-home.png"
            alt="Image de la page d'accueil du site Myst'Travel"
          />
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
        <form onSubmit={submitHandler}>
          {msg && <p className="message">{msg}</p>}
          <label htmlFor="name">Votre nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jean Dupont"
            required
          />
          <label htmlFor="email">Votre adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jean.dupont@email.com"
            required
          />
          <label htmlFor="message">Votre message</label>
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
