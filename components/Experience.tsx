import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              Nuclay Solution
            </h3>
            <p className="sm:text-lg italic">Software Developer</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              August 2023 – Present
            </p>
          </div>
        </div>

        <div className="mt-4 text-base xl:text-lg font-medium">
          <ul>
            <li><strong>Experienced Software Developer</strong> with 1.5 years of collective expertise in the MERN stack and Next.js, focusing on developing dynamic user-centered web applications.</li>
            <li><strong>Created RESTful APIs</strong> for seamless integration with third-party services, enhancing application functionality and connectivity.</li>
            <li><strong>Implemented automated testing protocols</strong> that increased code coverage by 95%, reducing production issues and runtime bugs.</li>
            <li><strong>Developed a secure authentication system</strong> that decreased user account hacking attempts by 100%, ensuring greater security for users.</li>
            <li><strong>Optimized database queries</strong> to improve system performance by 99%, leading to faster load times and enhanced user experience.</li>
            <li><strong>Passionate about technical growth</strong> and contributing to a collaborative team, with a strong commitment to delivering high-quality, impactful digital solutions.</li>
          </ul>
        </div>
      </WobbleCard>
    </div>
  );
};

export default Experience;
