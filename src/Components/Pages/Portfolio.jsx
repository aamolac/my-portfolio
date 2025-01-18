import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  const [msg, setMsg] = useState("");
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Initialiser EmailJS
  React.useEffect(() => {
    emailjs.init("zimz49HWfGG7U52Gf"); // Remplacez par votre User ID d'EmailJS
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
  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateForm(e)) {
      return; // Ne pas soumettre si le formulaire est invalide
    }

    sendEmail(e.target); // Envoyer directement le formulaire
  };

  // Gérer l'envoi via EmailJS
  const sendEmail = (form) => {
    emailjs
      .sendForm("service_rnfdhfd", "template_lqm1i3n", form)
      .then((response) => {
        setMsg("Votre message a été envoyé avec succès à Annaïg MOLAC !");
      })
      .catch((error) => {
        setMsg("Erreur lors de l'envoi du message : " + error.text);
      });
  };

  return (
    <main>
      <section className="banner banner-home">
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
      <section id="presentation" className="container">
        <h2>Présentation</h2>
        <div className="introduction">
          <p>Moi c'est Annaïg MOLAC, j'ai 27 ans et je viens de Bretagne.</p>
          <p>
            Après plusieurs années dans le domaine de la chimie et de la
            cosmétologie et trois ans d'expérience en réglementation cosmétique,
            j'ai décidé de me réorienter vers l'informatique et plus
            précisément, le métier de{" "}
            <span className="dev-web">Développeur Web</span>. Ce choix vient de
            mon envie de travailler dans un domaine plus stimulant où je
            pourrais mettre à profit mes compétences logiques et méthodiques,
            peu exploitées dans mon précédent emploi.
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
        <div className="techno-langage">
          <h3>Langages</h3>
          <div>
            <div>
              <p>HTML</p>
              <img src="/my-portfolio//image/html-5.png" alt="logo HTML" />
            </div>
            <div>
              <p>CSS</p>
              <img src="/my-portfolio//image/css-3.png" alt="logo CSS" />
            </div>
            <div>
              <p>SASS</p>
              <img src="/my-portfolio//image/sass-logo.png" alt="logo SASS" />
            </div>
            <div>
              <p>JavaScript</p>
              <img src="/my-portfolio//image/js.png" alt="logo JavaScript" />
            </div>
            <div>
              <p>React.js</p>
              <img src="/my-portfolio//image/react.png" alt="logo React.JS" />
            </div>
            <div>
              <p>Node.js</p>
              <img src="/my-portfolio//image/node-js.jpeg" alt="logo Node.JS" />
            </div>
            <div>
              {/* <p>Express</p> */}
              <img
                src="/my-portfolio//image/express.png"
                alt="logo Express"
                className="logo-express"
              />
            </div>
            <div>
              {/* <p>MySQL</p> */}
              <img
                src="/my-portfolio//image/my-sql.png"
                alt="logo MySQL"
                className="logo-my-sql"
              />
            </div>
          </div>
        </div>
        <div className="techno-tool">
          <h3>Outils</h3>
          <div>
            <div>
              <p>GitHub</p>
              <img src="/my-portfolio//image/github.png" alt="logo GitHub" />
            </div>
            <div>
              <p>Visual Studio Code</p>
              <img
                src="/my-portfolio//image/visual-studio-code.png"
                alt="logo Visual Studio Code"
              />
            </div>
            <div>
              <p>Postman</p>
              <img src="/my-portfolio//image/postman.png" alt="logo Postman" />
            </div>
            <div>
              <p>Figma</p>
              <img src="/my-portfolio//image/figma.png" alt="logo Figma" />
            </div>
            <div>
              <p>EmailJS</p>
              <img src="/my-portfolio//image/emailjs.png" alt="logo Figma" />
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="container">
        <h2>Projets</h2>
        <div>
          <article>
            <img
              src="/my-portfolio//image/myst-travel-home.png"
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
            <img
              src="/my-portfolio//image/screen-portfolio.png"
              alt="Image de la page d'accueil du Portfolio"
            />
            <h3>Mon Portfolio</h3>
            <Link
              to="/project-portfolio"
              onClick={scrollToTop}
              aria-label="Aller sur la page de mon projet : Portfolio"
            >
              Voir le projet
            </Link>
          </article>
        </div>
      </section>

      <section id="contact" className="container">
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
