import { useHistory } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import treeIcon from "@iconify-icons/bi/tree";
import locationIcon from "@iconify-icons/akar-icons/location";
import circleCheck from "@iconify-icons/akar-icons/circle-check";
import airIcon from "@iconify-icons/akar-icons/air";

const ProjectCard = ({ project }) => {
  const history = useHistory();
  const { name, location, img, totalOffsets, availableOffsets } = project;
  const goToProject = () => {
    history.push(`/project/${name}`);
  };
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-data">
          <div>
            <p className="project-name">
              <InlineIcon icon={treeIcon} width="35" color="#1930DB" /> {name}
            </p>

            <p>
              <InlineIcon icon={locationIcon} width="35" color="#1930DB" />{" "}
              {location}
            </p>

            <p>
              <InlineIcon icon={airIcon} width="35" color="#1930DB" /> Bonos
              Totales= {totalOffsets}
            </p>

            <p>
              <InlineIcon icon={circleCheck} width="35" color="#1930DB" /> Bonos
              Disponibles= {availableOffsets}
            </p>
          </div>
          <button onClick={goToProject}>Conocer el proyecto</button>
        </div>
        <div className="project-card-image">
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
