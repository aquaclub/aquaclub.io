// import Header from './../../components/Header/Header';
import ArtSection from './../../components/ArtSection/ArtSection';
import './MainView.css';

const MainView = () => {
  // temporary code
  const demoStyle = {
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'rgb(255, 255, 255)'
  };

  return (
    <>
      {/* temporary code */}
      <div
        className="header-area"
        style={{ ...demoStyle, marginBottom: '25px' }}
      >
        Header
      </div>
      <div className="content-area">
        <ArtSection />
      </div>
      {/* temporary code */}
      <div className="footer-area" style={{ ...demoStyle, marginTop: '25px' }}>
        Footer
      </div>
    </>
  );
};

export default MainView;
