//links
import Link from "next/link";

//icons
import{RiLinkedinLine, RiInstagramLine, RiGithubLine, RiMailLine, RiBehanceLine,RiPinterestLine} from 'react-icons/ri';

const Socials = () => {
  return <div className=" flex items-center gap-x-5 text-lg ">
    <Link href={'https://www.linkedin.com/in/harshal-patil-187a87245/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>

    <Link href={'https://github.com/harshal0151'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    
    <Link href={'https://www.instagram.com/patilharshal2122/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>

    <Link href="mailto:patilharshal0151@gmail.com" className="hover:text-accent transition-all duration-300">
  <RiMailLine/>
</Link>

  </div>;
};

export default Socials;
