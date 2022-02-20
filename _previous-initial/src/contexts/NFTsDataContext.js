import { createContext } from 'react';

const NFTsDataContext = createContext({
  NFTsDataState: null,
  setNFTsDataState: () => {}
});

export default NFTsDataContext;
