import { useState } from 'react';
import NFTsData from './data/nfts/nfts-data';
import NFTsDataContext from './contexts/NFTsDataContext';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import MainView from './views/MainView/MainView';

const App = () => {
  const [NFTsDataState, setNFTsDataState] = useState(NFTsData);

  return (
    <NFTsDataContext.Provider
      value={{
        NFTsDataState: NFTsDataState,
        setNFTsDataState: setNFTsDataState
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<MainView />} />
        </Routes>
      </Router>
    </NFTsDataContext.Provider>
  );
};

export default App;
