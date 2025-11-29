import React from 'react'
import agent1 from '../../assets/Images/agent1.png'
import agent2 from '../../assets/Images/agent2.png'
import agent3 from '../../assets/Images/agent3.png'
import agent4 from '../../assets/Images/agent4.png'
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { LiaFacebookSquare } from 'react-icons/lia';

const Agents = () => {
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
            <div className="w-[230px] text-center">
              <img
                src={agent1}
                alt="agent"
                className="w-32 rounded-full mx-auto"
              />
              <h4 className="font-arial font-bold text-[22px] text-[#072135] pt-[19px]">
                Cameron Williamson
              </h4>
              <p className="font-arial font-normal text-[17px] text-[#666666]pt-[9px]">
                Imperial Property Group Agent
              </p>
              <div className="icon flex gap-5 items-center justify-center pt-[43px]">
                <CiLinkedin className="text-xl text-[#38A9FF]" />
                <FaInstagram className="text-xl text-[#38A9FF]" />
                <LiaFacebookSquare className="text-2xl text-[#38A9FF]" />
              </div>
            </div>
            <div className="w-[230px] text-center">
              <img
                src={agent2}
                alt="agent"
                className="w-32 rounded-full mx-auto"
              />
              <h4 className="font-arial font-bold text-[22px] text-[#072135] pt-[19px]">
                Frank Bashirian
              </h4>
              <p className="font-arial font-normal text-[17px] text-[#666666]pt-[9px]">
                Imperial Property Group Agent
              </p>
              <div className="icon flex gap-5 items-center justify-center pt-[43px]">
                <CiLinkedin className="text-xl text-[#38A9FF]" />
                <FaInstagram className="text-xl text-[#38A9FF]" />
                <LiaFacebookSquare className="text-2xl text-[#38A9FF]" />
              </div>
            </div>
            <div className="w-[230px] text-center">
              <img
                src={agent3}
                alt="agent"
                className="w-32 rounded-full mx-auto"
              />
              <h4 className="font-arial font-bold text-[22px] text-[#072135] pt-[19px]">
                Jenny Wilson
              </h4>
              <p className="font-arial font-normal text-[17px] text-[#666666]pt-[9px]">
                Imperial Property Group Agent
              </p>
              <div className="icon flex gap-5 items-center justify-center pt-[43px]">
                <CiLinkedin className="text-xl text-[#38A9FF]" />
                <FaInstagram className="text-xl text-[#38A9FF]" />
                <LiaFacebookSquare className="text-2xl text-[#38A9FF]" />
              </div>
            </div>
            <div className="w-[230px] text-center">
              <img
                src={agent4}
                alt="agent"
                className="w-32 rounded-full mx-auto"
              />
              <h4 className="font-arial font-bold text-[22px] text-[#072135] pt-[19px]">
                Bessie Cooper
              </h4>
              <p className="font-arial font-normal text-[17px] text-[#666666]pt-[9px]">
                Imperial Property Group Agent
              </p>
              <div className="icon flex gap-5 items-center justify-center pt-[43px]">
                <CiLinkedin className="text-xl text-[#38A9FF]" />
                <FaInstagram className="text-xl text-[#38A9FF]" />
                <LiaFacebookSquare className="text-2xl text-[#38A9FF]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agents