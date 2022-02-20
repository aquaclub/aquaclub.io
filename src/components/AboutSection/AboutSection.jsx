import './AboutSection.css';
import sectionBackground from './../../images/background-images/background-02.jpg';

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 15%, rgba(255, 255, 255, 0.6) 85%, rgba(255, 255, 255, 0) 100%), url("${sectionBackground}")`
      }}
    >
      <div className="container">
        <div className="about-wrapper">
          <h1 className="about-wrapper__title">Welcome to the Aquaverse!</h1>
          <p className="about-wrapper__paragraph">
            The Aquaverse a limitless fantastical underwater world with
            marvelous creatures whose evolutionary course was altered when 5G
            beamed deep knowledge of human culture directly into their DNA,
            mixing their innate animal instinct with a strong desire to
            accessorize and look good for Twitter and the ‘Gram while continuing
            to survive and evolve toward their ultimate form.
          </p>
          <p className="about-wrapper__paragraph">
            About: AquaClub was inspired by the crypto community over the past
            decade.The intricate evolution of these creatures, the
            classification of which is analogous to the classification of
            holders as ranging from “shrimps” to “whales”, mimics the hybrid
            human/cypher identities we are all developing as we delve deeper
            into the metaverse.
          </p>
          <p className="about-wrapper__paragraph">
            Aquaclub’s creatures and their offspring will continue their circle
            of life and rapid evolution beyond this initial release, and the
            community will be able to participate in and engage with those
            stories as they unfold.
          </p>
          <p className="about-wrapper__paragraph">
            The artwork included in this collection was ultimately a team effort
            but was built around the central designs and creative vision of the
            amazing Hadji Joos (Aveartz) -{' '}
            <a
              href="https://www.instagram.com/aveartz"
              target="_blank"
              rel="noreferrer"
              title="Instagram: Hadji Joos (Aveartz)"
            >
              Instagram
            </a>
            .
          </p>
          <p className="about-wrapper__paragraph">
            Our scrappy team is a diverse mix of talents, experience, tastes,
            and perspectives. We’re an international team, with contributors
            ranging from NFT-enthusiasts, 2d and 3d artists, programmers,
            website developers, and community admins passionate about creating a
            unique NFT collection where quality art, appealing design,
            inclusiveness, and humor are paramount. Our creative contributors,
            many of which were moonlighting on this project, have worked on
            Bafta award-winning AAA video games, Academy Award nominated films
            (with one winning best animated picture), TV shows, print ads,
            children’s books, and NFT projects.
          </p>
          <p className="about-wrapper__paragraph">
            We are having a blast bringing this project to fruition. We hope
            that you’ll love Aquaclub’s mix of humor, art, and lore.
          </p>
          <p className="about-wrapper__paragraph">Welcome!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
