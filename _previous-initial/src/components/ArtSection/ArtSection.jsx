import { useState } from 'react';
import NFTSectionNFTs from './NFTSectionNFTs/NFTSectionNFTs';
import NFTSectionShowcase from './NFTSectionShowcase/NFTSectionShowcase';
import NFTSectionDetails from './NFTSectionDetails/NFTSectionDetails';
import HeroSection from '../HeroSection/HeroSection';
import './ArtSection.css';

const ArtSection = () => {
  const [selectedNFTState, setSelectedNFTState] = useState(null);

  return (
    <>
      <NFTSectionNFTs
        selectedNFTState={selectedNFTState}
        setSelectedNFTState={setSelectedNFTState}
      />
      <section id="art-section">
        <div className="container">
          <div className="art-section-bg">
            <NFTSectionShowcase
              selectedNFTState={selectedNFTState}
              setSelectedNFTState={setSelectedNFTState}
            />
            {selectedNFTState && selectedNFTState.isRevealed ? (
              <NFTSectionDetails selectedNFTState={selectedNFTState} />
            ) : (
              <HeroSection
                text="..a limitless fantastical underwater world with marvelous creatures whos evolutionary course was altered when 5G beamed deep knowledge of human culture directly into their DNA, mixing their innate animal instincts with a strong desire to accessorize and look good for Twitter and the ‘Gram while continuing to survive and evolve towards their ultimate form."
                customStyle={{ flexGrow: '1' }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtSection;
