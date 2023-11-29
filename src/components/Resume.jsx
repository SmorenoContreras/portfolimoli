import React from "react";
import { MdFileDownload } from "react-icons/md";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

const Resume = () => {
  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Technologies and Frameworks",
          icons: [
            { icon: <FaHtml5 />, name: "HTML 5" },
            { icon: <FaCss3 />, name: "CSS" },
            { icon: <FaJs />, name: "Javascript" },
            { icon: <FaReact />, name: "React.js" },
          ],
        },
      ],
    },
  ];

  return (
    <div
      className="h-[120vh] xl:h-[95vh] overflow-hidden w-screen flex py-[80px]  px-44 flex-col gap-y-6 bg-white "
      id="resumeSection"
    >
      <div className="flex justify-center w-full mb-16">
        <div>
          <h1 className="text-[40px] font-bold text-[#1e1e1e] text-center mb-3">
            My <span className="text-blue-600">Resume</span>
            <span className="text-blue-600">.</span>
          </h1>
          <div className="bg-blue-600 h-[3px] w-[35%] justify-center flex mx-auto mt-3"></div>
          <div className="flex justify-center w-full mt-16">
            <a className="px-8 py-4 bg-opacity-95 hover:bg-opacity-100 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg gap-x-3"
            href="/sample_resume.pdf"
            download="Stephanie_Contreras_Resume.pdf"
            >
              Download My Resume <MdFileDownload />
            </a>
          </div>
          <div className="mt-24 text-[32px] font-semibold flex justify-center">
            Skills and Technologies
          </div>
          <div className="grid grid-cols-4 gap-10 mx-auto xl:mx-0 mb-4 text-center justify-center gap-y-7 text-[#1e1e1e] mt-16">
            {aboutData[0].info[0].icons.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-[20px] mb-2">{item.name}</div>
                <div className="text-[42px]">{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
