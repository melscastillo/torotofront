import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import landscapeLine from "@iconify-icons/clarity/landscape-line";
import animalIcon from "@iconify-icons/cil/animal";
import peopleAudience24Regular from "@iconify-icons/fluent/people-audience-24-regular";
import plant2 from "@iconify-icons/tabler/plant-2";
import circleCheck from "@iconify-icons/akar-icons/circle-check";
import airIcon from "@iconify-icons/akar-icons/air";
import moneyAlt from "@iconify-icons/dashicons/money-alt";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projectImage from "../images/chiapas.jpeg";
import stripe from "../images/stripe.svg";

const Project = () => {
  const { slug } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json", {});
      const json = await response.json();
      setProjects(json);
      setLoading(false);
    };
    fetchProjects();
  }, []);
  const project = useMemo(() => {
    return projects.find((project) => project.name === slug);
  }, [projects, slug]);

  if (loading || !project) {
    return null;
  }
  const {
    name,
    type,
    img,
    availableOffsets,
    totalOffsets,
    description,
    location,
    verifier,
    area,
    jobsGenerated,
    coBenefits,
    offsetPrice,
    flora,
  } = project;
  return (
    <>
      <Header />
      <div className="about-project" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="heading bg-yellow">
          <span>{name}</span>
        </h1>
        <p>{location}</p>
      </div>
      <div className="img-project">
        <img src={img} alt={name} />
      </div>
      <h2 className="heading bg-blue">
        <span>Datos Básicos</span>
      </h2>
      <div className="basic-info">
        <div>
          <Icon icon={landscapeLine} width="100" color="#1930DB" />
          <p>{area}</p>
        </div>
        <div>
          <Icon icon={animalIcon} width="100" color="#1930DB" />
          <p>
            {flora.map((item) => {
              return (
                <>
                  {item}
                  <br />
                </>
              );
            })}
          </p>
        </div>
        <div>
          <Icon icon={peopleAudience24Regular} width="100" color="#1930DB" />
          <p>
            {jobsGenerated}
            <br />
            trabajos
            <br />
            generados
          </p>
        </div>
      </div>
      <h2 className="heading bg-blue">
        <span>Del Proyecto</span>
      </h2>
      <p className="project-info">{description}</p>
      <h2 className="heading bg-blue">
        <span>Datos Adicionales</span>
      </h2>
      <div className="aditional-info">
        <div>
          <Icon icon={plant2} width="100" color="#1930DB" />
          <p>
            {coBenefits.map((item) => {
              return (
                <>
                  {item}
                  <br />
                </>
              );
            })}
          </p>
        </div>
        <div>
          <Icon icon={plant2} width="100" color="#1930DB" />
          <p>{verifier} como verificador</p>
        </div>
        <div>
          <Icon icon={plant2} width="100" color="#1930DB" />
          <p>{type}</p>
        </div>
      </div>
      <h2 className="heading bg-blue">
        <span>Bonos de carbono</span>
      </h2>
      <div className="bono-icon">
        <div>
          <Icon icon={airIcon} width="100" color="#1930DB" />
          <p>Bonos Totales={totalOffsets}</p>
        </div>
        <div>
          <Icon icon={circleCheck} width="100" color="#1930DB" />
          <p>Bonos Disponibles={availableOffsets}</p>
        </div>
        <div>
          <Icon icon={moneyAlt} width="100" color="#1930DB" />
          <p>{offsetPrice}</p>
        </div>
      </div>
      <div
        className="stripe"
        style={{ backgroundImage: `url(${stripe})` }}
      ></div>
      <button className="buy">Adquiere aquí bonos de este proyecto</button>
      <Footer />
    </>
  );
};
export default Project;
