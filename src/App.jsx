import { useState } from 'react';
import AppContext from './contexts/AppContext';
import characters from './data/nfts/nfts-data';
import roadmaps from './data/roadmaps/roadmaps-data';
import members from './data/members/members-data';
import Navigation from './components/Navigation/Navigation';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ArtworkSection from './components/ArtworkSection/ArtworkSection';
import RoadmapsSection from './components/RoadmapsSection/RoadmapsSection';
import TeamSection from './components/TeamSection/TeamSection';
import Footer from './components/Footer/Footer';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(roadmaps[0]);
  const [selectedTeamMember, setSelectedTeamMember] = useState(members[0]);

  return (
    <AppContext.Provider
      value={{
        characters,
        selectedCharacter,
        setSelectedCharacter,
        selectedRoadmap,
        setSelectedRoadmap,
        selectedTeamMember,
        setSelectedTeamMember
      }}
    >
      <Navigation />
      <WelcomeSection />
      <AboutSection />
      <ArtworkSection />
      <RoadmapsSection />
      <TeamSection />
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
