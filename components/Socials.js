import Link from "next/link";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-8 text-lg">
      <Link
        href={"https://www.linkedin.com/in/ashish-sharma-rrr/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine size={30} />
      </Link>

      <Link
        href={"https://github.com/ashishsharmastudio"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine size={30} />
      </Link>

      <Link
        href={"https://www.instagram.com/ashishsharma8252/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine size={30} />
      </Link>

      <Link
        href="mailto:ashishsharmastudio@gmail.com"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine size={30} />
      </Link>
    </div>
  );
};

export default Socials;









// <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
//   <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-6 sm:px-12 lg:px-20">
//     <motion.h1
//       variants={fadeIn("down", 0.2)}
//       initial="hidden"
//       animate="show"
//       exit="hidden"
//       className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
//     >
//       Hello I&apos;m <br /> Ashish Sharma <br />
//       <span className="text-accent">Full Stack Developer</span>
//     </motion.h1>

//     {/* Increased Margin Below Text for More Space */}
//     <motion.p
//       variants={fadeIn("down", 0.3)}
//       initial="hidden"
//       animate="show"
//       exit="hidden"
//       className="max-w-xs sm:max-w-md lg:max-w-xl mx-auto xl:mx-0 mb-14 sm:mb-8 text-sm sm:text-lg font-medium leading-relaxed"
//     >
//       🚀Transforming Ideas into Scalable, AI-Driven Web Solutions
//       <br />
//       I craft high-performance web applications that don't just function—they
//       evolve.
//       <br />
//       By blending Full Stack Development (MERN, Next.js, Node.js) with AI-driven
//       automation, I help businesses streamline operations, enhance engagement,
//       and scale effortlessly.
//     </motion.p>

//     {/* Buttons */}
//     <div className="flex justify-center sm:justify-start xl:hidden">
//       <ProjectsBtn />
//     </div>

//     <motion.div
//       variants={fadeIn("down", 0.4)}
//       initial="hidden"
//       animate="show"
//       exit="hidden"
//       className="hidden xl:flex"
//     >
//       <ProjectsBtn />
//     </motion.div>
//   </div>
// </div>;