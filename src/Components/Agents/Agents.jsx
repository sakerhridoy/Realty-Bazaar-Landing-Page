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
    },
    {
      id: 2,
      name: 'Frank Bashirian',
      title: 'Imperial Property Group Agent',
      image: agent2,
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      title: 'Imperial Property Group Agent',
      image: agent3,
    },
    {
      id: 4,
      name: 'Bessie Cooper',
      title: 'Imperial Property Group Agent',
      image: agent4,
    },
  ];

  return (
    <>
      <section className="pb-[95px]">
        <div className="container">
          <div className="headline text-center pb-[47px]">
            <h2 className="font-arial font-bold text-[35px] text-[#38A9FF]">
              Top real estate agents
            </h2>
          </div>
          <div className="flex gap-[92px] items-center justify-center">
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
                  <CiLinkedin className="text-xl text-[#38A9FF]" />
                  <FaInstagram className="text-xl text-[#38A9FF]" />
                  <LiaFacebookSquare className="text-2xl text-[#38A9FF]" />
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
