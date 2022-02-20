import LightGallery from 'lightgallery/react';
import './NFTSectionDetails.css';

// LightGallery CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';

// LightGallery Plugins
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

// LightGallery CSS Overwrite
import './LightGalleryOverwrite.css';

const NFTSectionDetails = ({ selectedNFTState }) => {
  const plugins = [lgZoom, lgFullscreen, lgRotate];

  return (
    <div className="nft-section-details">
      <div className="preview">
        <div className="art-progression">
          <iframe
            src={`${selectedNFTState.artProgression}?autoplay=1&title=0&portrait=0&byline=0`}
            title={`${selectedNFTState.type} NFT Art Progression`}
            allowFullScreen
            allow="autoplay; fullscreen;"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="accessories">
          {selectedNFTState.accessories.map(accessory => (
            <div key={`${accessory}-Accessory`} className="accessory">
              {accessory}
            </div>
          ))}
        </div>
      </div>
      <LightGallery
        elementClassNames="samples"
        selector=".sample"
        plugins={plugins}
      >
        {selectedNFTState.samples.map(([thumbnail, original], index) => (
          <div
            key={`${selectedNFTState.type}-Sample-${index + 1}`}
            data-src={original}
            data-download={`${selectedNFTState.type.toLowerCase()}-nft-sample-${
              index + 1
            }`}
            className="sample"
          >
            <img
              src={thumbnail}
              alt={`${selectedNFTState.type} NFT Sample ${index + 1}`}
              className="thumbnail"
            />
          </div>
        ))}
      </LightGallery>
    </div>
  );
};

export default NFTSectionDetails;
