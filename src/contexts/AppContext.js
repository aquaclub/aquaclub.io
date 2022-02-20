import { createContext } from 'react';

const AppContext = createContext({
  characters: [],
  selectedCharacter: {},
  setSelectedCharacter: () => null,
  selectedRoadmap: {},
  setSelectedRoadmap: () => null,
  selectedTeamMember: {},
  setSelectedTeamMember: () => null
});

export default AppContext;
