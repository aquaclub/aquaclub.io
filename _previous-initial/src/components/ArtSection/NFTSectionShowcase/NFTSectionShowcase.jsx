import { useContext } from 'react';
import NFTsDataContext from './../../../contexts/NFTsDataContext';
import Tilt from 'react-tilty';
import './NFTSectionShowcase.css';

const NFTSectionShowcase = ({ selectedNFTState, setSelectedNFTState }) => {
  const { NFTsDataState } = useContext(NFTsDataContext);

  const tiltOptions = {
    scale: 1.1,
    speed: 1000
  };

  return (
    <div className="nft-section-showcase">
      <div className="characters">
        {NFTsDataState.map(nft => (
          <div
            key={`${nft.type}-Showcase-Item`}
            data-type={nft.type}
            className="character-wrapper"
            onClick={() => setSelectedNFTState(nft)}
          >
            <Tilt
              {...tiltOptions}
              className={`${
                selectedNFTState &&
                selectedNFTState.isRevealed &&
                nft.type === selectedNFTState.type
                  ? 'character active'
                  : 'character'
              }`}
              style={{
                backgroundImage: `${
                  nft.isRevealed
                    ? `url(${nft.character})`
                    : `url(${nft.treasureChest})`
                }`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTSectionShowcase;
