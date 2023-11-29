
import {
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#04091E] lg:h-[50vh] xl:h-[40vh] text-white h-[40vh] py-12 px-40 items-center lg:px-[150px] ">
      <div className="flex flex-row mt-6">
        <div className="flex flex-col w-[50%] gap-x-12">
          <div className="xl:text-[24px] lg:text-[20px] font-bold mb-6">About Me</div>
          <div className="mb-8 text-gray-300 xl:text-[14px] lg:text-[12px]">
            Berkeley Full-Stack Web Development Student from Los Angeles,
            California. Born and raised in the San Fernando Valley.
          </div>
          <div className="text-gray-300 xl:text-[14px] lg:text-[12px]">
            Copyright © 2023 All rights reserved
          </div>
        </div>
        <div className="flex flex-col pl-24">
          <div className="xl:text-[24px] lg:text-[20px] font-bold mb-6">Follow me!</div>
          <div className="mb-3 text-gray-300 xl:text-[14px] lg:text-[12px]">
            Let's build and expand our connections.
          
         
            </div>
            <div>
            <span className="py-2 text-[14px] mb-3 text-gray-300 xl:text-[14px] lg:text-[12px]">SMorenoContreras@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-5 text-lg mt-5">
              <a
                href={"https://github.com/SmorenoContreras"}
                target={"_blank"}
                className="hover:text-accent transition-all duration-300"
              >
                <RiGithubLine />
              </a>
              <a
                href={"https://www.linkedin.com/"}
                target={"_blank"}
                className="hover:text-accent transition-all duration-300"
              >
                <RiLinkedinLine />
              </a>
              <a
                href={"https://www.facebook.com/"}
                target={"_blank"}
                className="hover:text-accent transition-all duration-300"
              >
                <RiFacebookLine />
              </a>
             
            </div> 
        
          </div>

      </div>
    </div>
  );
};

export default Footer;
