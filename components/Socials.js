//links
import Link from "next/link";

//icons
import{RiLinkedinLine, RiInstagramLine, RiGithubLine, RiMailLine, RiBehanceLine,RiPinterestLine} from 'react-icons/ri';

const Socials = () => {
  return <div className=" flex items-center gap-x-5 text-lg ">
    <Link href={'https://www.linkedin.com/in/ashish-sharma-rrr/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>

    <Link href={'https://github.com/ashishsharmastudio'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    
    <Link href={'https://www.instagram.com/ashishsharma8252/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>

    <Link href="mailto:ashishsharmastudio@gmail.com" className="hover:text-accent transition-all duration-300">
  <RiMailLine/>
</Link>

  </div>;
};

export default Socials;
