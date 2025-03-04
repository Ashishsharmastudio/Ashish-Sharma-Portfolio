//next image
import Image from "next/image";
import Logo from "../public/logo.png";

//nextlink
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 py-4 sm:py-6">
          {/* logo */}
          <Link
            href={"/"}
            className="relative hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={Logo}
              width={180}
              height={80}
              alt="Logo"
              priority={true}
              className="w-32 xs:w-36 sm:w-40 md:w-44 lg:w-48"
            />
          </Link>
          <div className="hidden sm:flex">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
