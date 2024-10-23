import React, { useState } from "react";

// icons
import { FaJs, FaReact, FaNode } from "react-icons/fa";

import { SiExpress, SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiTailwindcss key="tailwindcss" />,
          <SiRedux key="redux" />,
          <FaNode key="node" />,
          <SiExpress key="express" />,
          <SiMongodb key="mongodb" />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer Intern - At Incentus",
        stage: "Oct 2023 - April 2024",
      },
    ],
  },
  {
    title: "Academic",
    info: [
      {
        title:
          "B.Tech in Computer Science and Engineering (CSE) - Abdul Kalam Technical University (AKTU)  - Lucknow",
        stage: "2020 - 2024",
      },
    ],
  },
  {
    title: "certification",
    info: [
      {
        title: "React.js",
        stage:
          "https://www.udemy.com/certificate/UC-b5d4dc46-154a-4fe6-88a3-6b10de111b98/",
      },
    ],
  },
];

//component
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

//famer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import Countup from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Bulb />
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text  */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 pt-8"
          >
            <span className="text-accent">About</span> me.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-12 px-0.8 xl:px-0"
          >
            I am a passionate Full Stack Developer with a strong foundation in web
            app development using the MERN stack. I&apos;ve gained over 6 months
            of experience as a Full Stack developer Intern at Incentus Pvt. Ltd. I
            have honed my skills in building responsive and interactive web
            applications.
          </motion.p>

          {/* counter  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={6} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  months of experience
                </div>
              </div>
              {/* graduation  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  {" "}
                  20
                  <Countup start={0} end={24} duration={10} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of graduation
                </div>
              </div>
              {/* Projects  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={5} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  work on Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info  */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[300px]"
        >
          <div className=" flex items-center justify-center gap-x-4  xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-[0.7rem]  ">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className="border-0 py-3 xl:p-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mt-5
            border-x-4 xl:border-collapse rounded-xl
         "
          >
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60  "
              >
                {/* title  */}
                <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons  */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
