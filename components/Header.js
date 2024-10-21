//next image

import Image from "next/image";
import Logo from '../public/logo.png'

//nextlink 
import Link from "next/link";

//components
import Socials from '../components/Socials'

const Header = () => {
  return <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] '>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        {/* logo  */}
        <Link href={'/'}>
        <Image src={Logo} width={200} height={100} alt="" priority={true}/>
        {/* <h1>Ashish Sharma</h1> */}
        </Link>
        {/* socials  */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
