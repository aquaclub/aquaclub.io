import { useContext } from 'react';
import NFTsDataContext from './../../../contexts/NFTsDataContext';
import './NFTSectionNFTs.css';

const NFTSectionNFTs = ({ selectedNFTState, setSelectedNFTState }) => {
  const { NFTsDataState } = useContext(NFTsDataContext);

  return (
    <section id="nfts-section">
      <div className="container">
        <div className="nfts">
          {NFTsDataState.map(nft => (
            <div
              key={`${nft.type}-NFT-Character`}
              className={`${
                selectedNFTState &&
                selectedNFTState.isRevealed &&
                nft.type === selectedNFTState.type
                  ? 'nft active'
                  : 'nft'
              }`}
              style={{
                backgroundImage: `${
                  nft.isRevealed
                    ? `url(${nft.character})`
                    : `url(${nft.treasureChest})`
                }`
              }}
              onClick={() => setSelectedNFTState(nft)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTSectionNFTs;
