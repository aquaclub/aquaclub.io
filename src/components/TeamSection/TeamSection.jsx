import AppContext from './../../contexts/AppContext';
import { useContext } from 'react';
import members from './../../data/members/members-data';
import './TeamSection.css';
import sectionBackground from './../../images/background-images/background-05.jpg';

const TeamSection = () => {
  const { selectedTeamMember, setSelectedTeamMember } = useContext(AppContext);

  return (
    <section
      id="team"
      style={{ backgroundImage: `url("${sectionBackground}")` }}
    >
      <div className="container">
        <h2 className="team__title">Team</h2>
        <div className="team__wrapper">
          <div className="team__wheel">
            {members.map((member, memberIndex) => (
              <div key={`Member-${memberIndex}`} className="team__wheel-slice">
                <div
                  className={
                    member.name === selectedTeamMember.name
                      ? 'team__wheel-artist selected'
                      : 'team__wheel-artist'
                  }
                  style={{ backgroundImage: `url("${member.type}")` }}
                  onClick={() => setSelectedTeamMember(member)}
                ></div>
              </div>
            ))}
            <div className="team__artist-showcase">
              <div
                className="team__wheel-artist"
                style={{ backgroundImage: `url("${selectedTeamMember.type}")` }}
              ></div>
              <div className="team__wheel-artist-info">
                {selectedTeamMember.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
