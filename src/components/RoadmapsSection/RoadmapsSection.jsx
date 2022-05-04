import AppContext from './../../contexts/AppContext';
import { useContext } from 'react';
import roadmaps from './../../data/roadmaps/roadmaps-data';
import './RoadmapsSection.css';
import sectionBackground from './../../images/background-images/background-04.jpg';
import button from './../../images/button.png';
import buttonActive from './../../images/button-active.png';

const RoadmapsSection = () => {
  const { selectedRoadmap, setSelectedRoadmap } = useContext(AppContext);

  return (
    <section
      id='roadmaps'
      style={{ backgroundImage: `url("${sectionBackground}")` }}
    >
      <div className='container'>
        <h2 className='roadmaps__title'>Roadmap</h2>
        <nav className='roadmaps__nav'>
          {roadmaps.map((roadmap) => (
            <div
              key={`Roadmap-${roadmap.name.split(' ').join('-')}`}
              className='roadmaps__link'
              style={{
                backgroundImage: `${
                  selectedRoadmap.name === roadmap.name
                    ? `url("${buttonActive}")`
                    : `url("${button}")`
                }`
              }}
              onClick={() => setSelectedRoadmap(roadmap)}
            >
              <span className='roadmaps__link-text'>{roadmap.name}</span>
            </div>
          ))}
        </nav>
        <div
          data-active-roadmap={selectedRoadmap.name}
          className='roadmaps__wrapper'
        >
          <img
            src={selectedRoadmap.image}
            alt='roadmap'
            className='roadmaps__roadmap'
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapsSection;
