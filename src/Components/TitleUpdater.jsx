import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      // case "/":
      //   document.title = "Accueil - Myst'Travel";
      //   break;
      case "/project-myst-travel":
        document.title = "Projet - Myst'Travel";
        break;
      case "/project-portfolio":
        document.title = "Projet - Portfolio";
        break;
      default:
        document.title = "Portfolio Annaïg Molac";
    }
  }, [location]);
  // Ce composant n'a pas besoin de rendre quoi que ce soit
  return null;
}

export default TitleUpdater;
