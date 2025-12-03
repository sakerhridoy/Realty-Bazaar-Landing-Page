import React from 'react';
import agent1 from '../../assets/Images/agent1.png';
import agent2 from '../../assets/Images/agent2.png';
import agent3 from '../../assets/Images/agent3.png';
import agent4 from '../../assets/Images/agent4.png';
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { LiaFacebookSquare } from 'react-icons/lia';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'Cameron Williamson',
      title: 'Imperial Property Group Agent',
      image: agent1,
      linkedinUrl: 'https://www.linkedin.com/in/cameron-williamson',
      instagramUrl: 'https://www.instagram.com/cameron.w',
      facebookUrl: 'https://www.facebook.com/cameron.williamson',
    },
    {
      id: 2,
      name: 'Frank Bashirian',
      title: 'Imperial Property Group Agent',
      image: agent2,
      linkedinUrl: 'https://www.linkedin.com/in/frank-bashirian',
      instagramUrl: 'https://www.instagram.com/frank.b',
      facebookUrl: 'https://www.facebook.com/frank.bashirian',
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      title: 'Imperial Property Group Agent',
      image: agent3,
      linkedinUrl: 'https://www.linkedin.com/in/jenny-wilson',
      instagramUrl: 'https://www.instagram.com/jenny.w',
      facebookUrl: 'https://www.facebook.com/jenny.wilson',
    },
    {
      id: 4,
      name: 'Bessie Cooper',
      title: 'Imperial Property Group Agent',
      image: agent4,
      linkedinUrl: 'https://www.linkedin.com/in/bessie-cooper',
      instagramUrl: 'https://www.instagram.com/bessie.c',
      facebookUrl: 'https://www.facebook.com/bessie.cooper',
    },
  ];

  return (
    <>
      <section className="pb-10 md:pb-[95px]">
        <div className="container mx-4 lg:mx-0">
          <div className="headline text-center pb-[47px]">
            <h2 className="font-arial font-bold text-[35px] text-[#38A9FF]">
              Top real estate agents
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-[92px] items-center justify-center">
            {agents.map(agent => (
              <div key={agent.id} className="w-[230px] text-center">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-32 rounded-full mx-auto"
                />
                <h4 className="font-arial font-bold text-[22px] text-[#072135] pt-[19px]">
                  {agent.name}
                </h4>
                <p className="font-arial font-normal text-[17px] text-[#666666] pt-[9px]">
                  {agent.title}
                </p>
                <div className="icon flex gap-5 items-center justify-center pt-[43px]">
                  {agent.linkedinUrl && (
                    <a
                      href={agent.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${agent.name} LinkedIn`}
                      className="text-xl text-[#38A9FF]"
                    >
                      <CiLinkedin />
                    </a>
                  )}

                  {agent.instagramUrl && (
                    <a
                      href={agent.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${agent.name} Instagram`}
                      className="text-xl text-[#38A9FF]"
                    >
                      <FaInstagram />
                    </a>
                  )}

                  {agent.facebookUrl && (
                    <a
                      href={agent.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${agent.name} Facebook`}
                      className="text-2xl text-[#38A9FF]"
                    >
                      <LiaFacebookSquare />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Agents;
