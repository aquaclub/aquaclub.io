import './WelcomeSection.css';
import sectionBackground from './../../images/background-images/background-01.jpg';
import frame from './../../images/frames/frame-01.png';
import banner from './../../images/banners/banner-01.png';
import countdown from './../../utils/countdown';

const WelcomeSection = () => {
  const END_DATE = new Date('June 1, 2022 00:00:00').getTime();
  const SECOND = 1000;
  const SELECTOR = '.subscription-area__countdown > span';

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();

    const millisecondsLeft = END_DATE - now;

    if (millisecondsLeft < 0) {
      clearInterval(countdownInterval);
    }

    countdown(millisecondsLeft, SELECTOR);
  }, SECOND);

  return (
    <section
      id='welcome'
      style={{ backgroundImage: `url("${sectionBackground}")` }}
    >
      <div className='container'>
        <div
          className='frame-wrapper'
          style={{ backgroundImage: `url("${frame}")` }}
        >
          <iframe
            title='intro'
            src='https://player.vimeo.com/video/660756658?title=0&byline=0&portrait=0'
            width='640'
            height='360'
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture'
          ></iframe>
          <div className='subscription-area'>
            <div
              className='subscription-area__banner'
              style={{ backgroundImage: `url("${banner}")` }}
            >
              <div className='subscription-area__countdown'>
                Countdown<span>00d:00h:00m:00s</span>
              </div>
              <div className='subscription-area__quantity'>
                Quantity<span>100</span>
              </div>
              <div className='subscription-area__cta-wallet'>
                My Wallet<span>Go</span>
              </div>
            </div>
            <div className='subscription-area__e-mail'>
              <input
                type='email'
                name='email'
                placeholder='E-mail Address'
                className='subscription-area__input'
              />
              <button
                type='button'
                className='subscription-area__button'
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
