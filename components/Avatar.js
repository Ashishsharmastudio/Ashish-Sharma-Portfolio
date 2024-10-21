//next Image 
import Image from 'next/image'

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none overflow-hidden '>
    <Image src={'/harshal.jpg'} width={400} height={400}  alt="" className='translate-z-0 wfull h-full rounded-full object-cover ' />
  </div>;
};

export default Avatar;
