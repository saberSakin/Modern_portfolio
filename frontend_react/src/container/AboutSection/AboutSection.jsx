import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import './AboutSection.scss'; // Import the SCSS file

import aboutImage from '../../assets/vue.png';

// Define TabButton component within the same file
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="tab-button">
      <p className={`font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-indicator"
      ></motion.div>
    </button>
  );
};

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Department of ETE, RUET, Bangladesh, 2019-Present</li>
        <li>Graduated from Kushtia Govt. College, Bangladesh, 2018</li>
        <li>Graduated from Kushtia Zilla School, Bangladesh, 2016</li>
      </ul>
    ),
  },
  {
    title: "Research Field",
    id: "research-field",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Computer Vision</li>
        <li>Generative Adversarial Networks</li>
        <li>Classification and Prediction</li>
        <li>Object Detection</li>
        <li>AI, XAI</li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className="list-disc pl-2">
        <li>Student, working on different projects: web development, machine learning, and electronics.</li>
        <li>Also working on research and publishing papers.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education"); // Updated default tab
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <img src={aboutImage} alt="About" className="about-image" />
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hey there, I'm Shakin, an Electronics and Telecommunication Engineering student at RUET, Bangladesh. I'm a tech enthusiast about Programming, Machine Learning, Electronics, Full-stack Web Development, and Graphics Design.
          </p>
          <div className="tab-buttons">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("research-field")}
              active={tab === "research-field"}
            >
              Research Field
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("publications")}
              active={tab === "publications"}
            >
              Publications
            </TabButton>
          </div>
          <div className="tab-content mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
