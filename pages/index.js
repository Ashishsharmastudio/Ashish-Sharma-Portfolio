import React, { useState } from 'react';
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Circles from '../components/Circles';
import Bulb from '../components/Bulb';
import Socials from '../components/Socials';


const Home = () => {
  const [showBetaNotification, setShowBetaNotification] = useState(true);

  return (
    <div className="bg-primary/30 h-full">
      <Bulb />
      <Circles />
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="h1 mt-[4rem]">
            Hello I&apos;m, Harshal Patil <br />
            <span className="text-accent">Web Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-16">
            Graduate of computer science with experience working across the Web Developer. Looking for a role where I can grow and learn from experienced team members while drawing on project experience I have already successfully executed
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full absolute mix-blend-color-dodge translate-y-0 "></div>

        {/* particals */}
        {/* <ParticlesContainer/> */}

        {/* Avatar img*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[537px] max-h-[548px] absolute -bottom-32 lg:bottom-5 lg:right-[5%] ">
          <Avatar />
          <div className=' w-full m-10 px-[30px]'>
         Email:  patilharshal0151@gmail.com
          </div>
          <div className='w-full m-10 px-[100px]'>
          <Socials />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
