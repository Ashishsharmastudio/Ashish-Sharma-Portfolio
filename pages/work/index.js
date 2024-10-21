//components
import WorkSlider from "../../components/WorkSlider";
import Buld from "../../components/Bulb";
import Circles from "../../components/Circles";

//famer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <Circles />
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text  */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-12 xl:mt-12"
            >
              My <span className="text-accent">Projects.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 leading-7 "
            >
              I have developed a web application using the MERN stack, focusing
              on efficient data handling and responsive UI. Additionally, I
              created a custom Chrome extension to enhance browser functionality
              and user experience.
            </motion.p>
            <div className="xl:mt-8 flex justify-center sm:justify-start w-full">
            
            </div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" w-full xl:max-w-[65%]"
          >
            {/* slider  */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Buld />
    </div>
  );
};

export default Work;
