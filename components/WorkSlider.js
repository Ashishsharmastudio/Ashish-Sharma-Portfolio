// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Emotion Detection Web App",
          path: "/mood-detection.png",
          githubLink: "https://github.com/Ashishsharmastudio/paint-my-mood",
          liveLink: "https://paint-my-mood-theta.vercel.app/",
        },

        {
          title: "Multi-Auther-Blog In React",
          path: "/multi-auth.png",
          githubLink: "https://github.com/Ashishsharmastudio/AshishSharmaBlogs",
          liveLink: "https://multi-auth-blog.netlify.app/",
        },
        {
          title: "Blog Website In Next.js",
          path: "/e-com.png",
          githubLink: "https://github.com/Ashishsharmastudio/AshishSharmaBlog",
          liveLink: "https://www.ashishsharmablog.tech/",
        },
        {
          title: "E-Learning Platform In React",
          path: "/Thumbnail_Extensions.png",
          githubLink:
            "https://github.com/Ashishsharmastudio/Thinking-Grey-E-Learning-platform",
          liveLink:
            "https://thinking-grey-e-learning-platform.vercel.app/login",
        },
      ],
    },
    {
      images: [
        {
          title: "Full Stack E-Commerce promotion App In Next.js",
          path: "/movie.png",
          githubLink: "https://github.com/Ashishsharmastudio/Blog-IN-NEXT.JS",
          liveLink: "https://blog-in-next-js-xmwn.vercel.app/",
        },

        {
          title: "Portfolio-App",
          path: "/portfolio.png",
          githubLink: "/",
          liveLink: "/",
        },
        {
          title: "Portfolio-App",
          path: "/portfolio.png",
          githubLink: "/",
          liveLink: "/",
        },
        {
          title: "Portfolio-App",
          path: "/portfolio.png",
          githubLink: "/",
          liveLink: "/",
        },

        
      ],
    },
  
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

import "swiper/css/pagination";

//import modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next image
import Image from "next/image";

//icons
import { RiGithubLine } from "react-icons/ri";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
        // el: ".work-slider-pagination",
        // bulletClass: "swiper-pagination-bullet",
        // bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="p-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group ">
                      {/* images  */}
                      <Image
                        src={image.path}
                        alt="work"
                        height={500}
                        width={400}
                      />
                      {/* overlay  */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title  */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-5  group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="text-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title 1  */}
                          <div className="delay-100">{image.title}</div>

                          <div className="flex justify-center gap-2">
                            {/* title 1  */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 border border-sky-200 py-1 px-3 rounded-lg bg-white text-black">
                              <Link
                                href={image.liveLink}
                                target="_blank"
                                className="hover:text-accent transition-all duration-300  "
                              >
                                LIVE
                              </Link>
                            </div>

                            {/*  icon  */}
                            <div className=" text-xl  translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200  border border-sky-100  py-1 px-3 rounded-lg bg-transparent  ">
                              <Link
                                href={image.githubLink}
                                className="hover:text-accent transition-all duration-300"
                              >
                                <RiGithubLine />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
