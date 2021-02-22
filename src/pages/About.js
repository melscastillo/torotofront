//Imports otras librerias
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import outlineWaterDamage from "@iconify-icons/ic/outline-water-damage";
import earthOutline from "@iconify-icons/ion/earth-outline";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
//Imports proyecto
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../images/photo-1549656400-eb39ffdab352.jpeg";
import chiapas from "../images/chiapas.jpeg";
import hidalgo from "../images/hidalgo.jpg";
import oaxaca from "../images/oaxaca.jpg";
import circles from "../images/circles.png";
import stripe from "../images/stripe.svg";

const Item = ({ image, text, history }) => {
  const goToProject = () => {
    history.push(`/project/${text}`);
  };
  return (
    <div className="carouselItem">
      <img src={image} alt={text} />
      <h2
        className="heading bg-green"
        onClick={goToProject}
        style={{ cursor: "pointer" }}
      >
        <span>{text}</span>
      </h2>
    </div>
  );
};

const About = () => {
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
  return (
    <>
      <Header />
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="heading bg-blue">
          <span>
            ¿Cómo reducir <br /> mi huella <br /> de carbono?
          </span>
        </h1>
        <p>
          Creemos firmemente en que si trabajamos juntos, podemos hacer de este
          un mundo mejor
        </p>
      </div>
      <div className="about-carbono">
        <h2 className="heading bg-magenta">
          <span>La huella de carbono</span>
        </h2>
        <p>
          Es la cantidad de gases de efecto invernadero que termina en la
          atmósfera a consecuencia de actividades
        </p>
        <p className="magenta">
          No podemos reducir nuestra huella PERO si podemos COMPENSARLA
        </p>
      </div>
      <img className="circles" src={circles} alt="circles" />
      <div className="offset">
        <h3 className="heading bg-green">
          <span>
            Entonces... ¿Cómo compensar <br /> mi huella de carbono?
          </span>
        </h3>
        <p className="actions">
          Puedes realizar las siguientes acciones para compensar tu huella de
          carbono
        </p>
      </div>
      <div className="suggestions">
        <div>
          <Icon icon={outlineWaterDamage} width="150" color="#0ED956" />
          <p>
            Cambiar prácticas, hábitos y mejorar procesos internos en empresas
          </p>
        </div>
        <div>
          <Icon icon={earthOutline} width="150" color="#0ED956" />
          <p>
            Captura de bonos de carbono. Los bonos de carbono representan una
            <strong> tonelada de CO2 </strong>que se extrae de la atmósfera y se
            lleva de vuelta a la Tierra.
          </p>
        </div>
      </div>
      <div
        className="stripe"
        style={{ backgroundImage: `url(${stripe})` }}
      ></div>
      <div className="acquire">
        <h3 className="heading bg-yellow">
          <span>
            ¿Dónde puedo adquirir <br /> bonos de carbono?
          </span>
        </h3>
        <p>
          En Toroto nos encanta apoyar proyectos forestales de captura de
          carbono en donde puedes adquirir los bonos que necesites
        </p>
        <p className="yellow">
          ¡Te invitamos a que conozcas los proyectos forestales con bonos
          disponibles para compra!
        </p>
      </div>
      <div className="carousel">
        <Carousel>
          {projects.map((project) => {
            return (
              <Item image={project.img} history={history} text={project.name} />
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default About;
