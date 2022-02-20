import AppContext from './../../contexts/AppContext';
import { useContext } from 'react';
import './ArtworkSection.css';
import CHARACTERS_DATA from './../../data/nfts/characters-data';
import sectionBackground from './../../images/background-images/background-03.jpg';

// LightGallery Imports
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

import LightGallery from 'lightgallery/react';

// LightGallery Overwrite
import './LightGallery.css';

const ArtworkSection = () => {
  const { characters, selectedCharacter, setSelectedCharacter } =
    useContext(AppContext);
  const plugins = [lgZoom, lgFullscreen, lgRotate];

  return (
    <section
      id="artwork"
      style={{ backgroundImage: `url("${sectionBackground}")` }}
    >
      <div className="container">
        <h2 className="artwork__title">Artwork</h2>
        <div className="artwork__selection">
          {characters.map((character, characterIndex) => (
            <div
              key={`Artwork-Item-${characterIndex}`}
              className="artwork__item"
              style={{
                backgroundImage: `${
                  character.accessible
                    ? `url("${CHARACTERS_DATA[character.type]}")`
                    : `url("${character.chest}")`
                }`,
                backgroundSize: `${
                  character.accessible ? '130% auto' : '150% auto'
                }`
              }}
              onClick={() =>
                character.accessible && setSelectedCharacter(character)
              }
            ></div>
          ))}
        </div>
        {selectedCharacter ? (
          <div className="artwork__content">
            <div className="artwork__video">
              <iframe
                title="intro"
                src={`${selectedCharacter.video}?title=0&byline=0&portrait=0`}
                width="500"
                height="500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
            </div>
            <LightGallery
              plugins={plugins}
              elementClassNames="artwork__samples-gallery"
              selector=".artwork__sample"
            >
              {selectedCharacter.samples.map(
                ({ sample, original }, sampleIndex) => (
                  <img
                    key={`Artwork-Sample-${selectedCharacter.character}-${
                      sampleIndex + 1
                    }`}
                    src={sample}
                    data-src={original}
                    data-download={`${selectedCharacter.type}-nft-sample-${
                      sampleIndex + 1
                    }`}
                    alt={`${selectedCharacter.character.toLowerCase()} nft`}
                    className="artwork__sample"
                  />
                )
              )}
            </LightGallery>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </section>
  );
};

export default ArtworkSection;
