//next Image 
import Image from 'next/image'
import ashu from "../public/Ashish.jpeg";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none overflow-hidden ">
      <Image
        src={ashu}
        width={220}
        height={220}
        alt="Avatar"
        className="translate-z-0 wfull h-full rounded-full object-cover "
      />
    </div>
  );
};

export default Avatar;
