import './Footer.css';
import sectionBackground from './../../images/background-images/background-06.jpg';

const Footer = () => {
  return (
    <footer
      id="main-footer"
      style={{ backgroundImage: `url("${sectionBackground}")` }}
    >
      <span className="main-footer__copyright">&copy; 2022 AquaClub</span>
    </footer>
  );
};

export default Footer;
