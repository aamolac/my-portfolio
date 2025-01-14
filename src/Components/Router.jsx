import { Routes, Route } from "react-router-dom";
import TitleUpdater from "./TitleUpdater.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import ProjectMystTravel from "./Pages/ProjectMystTravel.jsx";
import ProjectPortfolio from "./Pages/ProjectPortfolio.jsx";

function AppRouter() {
  return (
    <>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project-myst-travel" element={<ProjectMystTravel />} />
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default AppRouter;
