import { Icon, InlineIcon } from "@iconify/react";
import facebookIcon from "@iconify-icons/brandico/facebook";
import instagramIcon from "@iconify-icons/brandico/instagram";
import linkedinIcon from "@iconify-icons/brandico/linkedin";
import twitterIcon from "@iconify-icons/brandico/twitter-bird";
import logoFooter from "../images/logo.svg";
import toroto from "../images/toroto.svg";
import slogan from "../images/slogan.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
        <img src={logoFooter} alt="Logo" />
        <img className="toroto" src={toroto} alt="toroto" />
        <img className="slogan" src={slogan} alt="slogan" />
      </div>
      <div className="footerRight">
        <div className="socialLogo">
          <a href="https://www.instagram.com/holatoroto/" title="Instagram">
            <InlineIcon icon={instagramIcon} width="40" color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/company/toroto/about/"
            title="Linkedin"
          >
            <InlineIcon icon={linkedinIcon} width="40" color="#fff" />
          </a>
          <a href="https://twitter.com/holatoroto" title="Twitter">
            <InlineIcon icon={twitterIcon} width="40" color="#fff" />
          </a>
          <a href="https://www.facebook.com/holatoroto" title="Facebook">
            <InlineIcon icon={facebookIcon} width="20" color="#fff" />
          </a>
        </div>
        <nav>
          <a href="#"> Inicio</a>
          <a href="#"> Misión</a>
          <a href="#"> Proyectos</a>
          <a href="#"> El equipo</a>
          <a href="#"> Vuélvete Carbono Neutro</a>
          <a href="#"> Empresas</a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
