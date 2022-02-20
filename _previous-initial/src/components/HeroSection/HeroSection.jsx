import './HeroSection.css';

const HeroSection = ({
  text = 'Default text placeholder.',
  customStyle = {}
}) => {
  return (
    <div className="hero-section-wrapper" style={customStyle}>
      <div className="logo">AquaClub</div>
      <div className="description">{text}</div>
    </div>
  );
};

export default HeroSection;
