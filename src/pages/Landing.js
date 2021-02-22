import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import landingHero from "../images/landing.png";
import landingImage from "../images/2landing.jpeg";
import circles from "../images/circles.png";

const Landing = () => {
  const history = useHistory();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json", {});
      const json = await response.json();
      setProjects(json);
    };
    fetchProjects();
  }, []);
  const goToAbout = () => {
    history.push("/about");
  };
  return (
    <>
      <Header />
      <div
        className="landing-hero"
        style={{ backgroundImage: `url(${landingHero})` }}
      >
        <h1 className="heading bg-magenta">
          <span>
            ¿Quieres reducir <br /> tu huella <br /> de carbono?
          </span>
        </h1>
        <div className="landing-button">
          <p>Nosotros podemos ayudarte</p>
          <button onClick={goToAbout}>Quiero saber más</button>
        </div>
      </div>
      <div
        className="landing-image"
        style={{ backgroundImage: `url(${landingImage})` }}
      >
        <h2 className="heading bg-blue">
          <span>Conoce los proyectos de captura de carbono</span>
        </h2>
        <p>
          Entérate de los proyectos de captura de carbono y en dónde están
          ubicados
        </p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <div className="project-page">
        <h3 className="heading bg-yellow">
          <span>
            ¿Quieres conocer a las <br /> empresas que tienen <br /> bonos de
            carbono?
          </span>
        </h3>
        <button>Quiero conocer más</button>
      </div>
      <div className="circle">
        <img className="circles-landing" src={circles} alt="circles" />
      </div>

      <Footer />
    </>
  );
};

export default Landing;
