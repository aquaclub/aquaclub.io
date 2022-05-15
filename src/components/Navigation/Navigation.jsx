import './Navigation.css';
import AquaClub from './../../images/logo.png';
import Instagram from './../../images/social-icons/instagram.png';
import Twitter from './../../images/social-icons/twitter.png';
import Discord from './../../images/social-icons/discord.png';
import Vimeo from './../../images/social-icons/vimeo.png';

const openSocialLink = (href) => {
  Object.assign(document.createElement('a'), {
    href,
    rel: 'noopener noreferrer',
    target: '_blank'
  }).click();
};

const Navigation = () => {
  return (
    <nav id='main-nav'>
      <div className='container'>
        <div className='socials'>
          <img
            src={Instagram}
            alt='Instagram'
            className='socials__social-link'
            onClick={() =>
              openSocialLink('https://www.instagram.com/aquaclubnft')
            }
          />
          <img
            src={Twitter}
            alt='Twitter'
            className='socials__social-link'
            onClick={() => openSocialLink('https://twitter.com/AquaClubNFT')}
          />
          <img
            src={Discord}
            alt='Discord'
            className='socials__social-link'
            onClick={() =>
              openSocialLink('https://discord.com/invite/cWRe4E2nNe')
            }
          />
          <img
            src={Vimeo}
            alt='Vimeo'
            className='socials__social-link'
            onClick={() => openSocialLink('https://vimeo.com/aquaclub')}
          />
        </div>
        <div
          className='logo'
          style={{ backgroundImage: `url("${AquaClub}")` }}
        ></div>
        <ul className='main-menu'>
          <li className='main-menu__menu-item'>
            <a href='#about' className='main-menu__link'>
              About
            </a>
          </li>
          <li className='main-menu__menu-item'>
            <a href='#artwork' className='main-menu__link'>
              Artwork
            </a>
          </li>
          <li className='main-menu__menu-item'>
            <a href='#roadmaps' className='main-menu__link'>
              Roadmap
            </a>
          </li>
          <li className='main-menu__menu-item'>
            <a href='#team' className='main-menu__link'>
              Team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
