import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <div className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          {" "}
          <p><strong>Results-driven Software Developer</strong> with 1.5 years of experience specializing in <strong>Next.js</strong> and <strong>MERN stack</strong>, delivering high-quality, scalable web applications. Proven track record of optimizing performance and enhancing user experience. Effectively collaborating within <strong>Agile teams</strong> to meet project milestones. Passionate about solving complex problems and continually upskilling. Proficient in <strong>full-stack development</strong>, with a solid foundation in <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>. Known for strong <strong>analytical skills</strong>, adaptability, and a commitment to driving impactful software solutions.</p>
          </div>
      </WobbleCard>
    </div>
  );
};

export default About;
