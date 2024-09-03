// import React from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap } from '../../wrapper';
// import { images } from '../../constants';
// import './Header.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

// const Header = () => (
//   <div className="app__header app__flex">
//     <motion.div
//       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//       transition={{ duration: 0.5 }}
//       className="app__header-info"
//     >
//       <div className="app__header-badge">
//         <div className="badge-cmp app__flex">
//           <span>👋</span>
//           <div style={{ marginLeft: 20 }}>
//             <p className="p-text">Hello, I am</p>
//             <h1 className="head-text">Shakin</h1>
//           </div>
//         </div>

//         <div className="tag-cmp app__flex">
//           <p className="p-text">Programmer</p>
//           <p className="p-text">Machine Learning Engineer</p>
//           <p className="p-text">Web Developer</p>
//         </div>
//       </div>
//     </motion.div>

//     <motion.div
//       whileInView={{ opacity: [0, 1] }}
//       transition={{ duration: 0.5, delayChildren: 0.5 }}
//       className="app__header-img"
//     >
//       <img src={images.profile} alt="profile_bg" />
//       <motion.img
//         whileInView={{ scale: [0, 1] }}
//         transition={{ duration: 1, ease: 'easeInOut' }}
//         src={images.circle}
//         alt="profile_circle"
//         className="overlay_circle"
//       />
//     </motion.div>

//     <motion.div
//       variants={scaleVariants}
//       whileInView={scaleVariants.whileInView}
//       className="app__header-circles"
//     >
//       {[images.python, images.react, images.node, images.javascript, images.html, images.css].map((circle, index) => (
//         <div className="circle-cmp app__flex" key={`circle-${index}`}>
//           <img src={circle} alt="profile_bg" />
//         </div>
//       ))}
//     </motion.div>
//   </div>
// );

// export default AppWrap(Header, 'home');

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NavigationDots from '../../components/NavigationDots';
import SocialMedia from '../../components/SocialMedia'; // Import SocialMedia
import './Header.scss';
import heroImage from '../../assets/profile.png';

const Header = () => {
  return (
    <section id="home" className="header-section">
      <div className="header-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-content"
        >
          <h1 className="header-title">
            <span className="header-title-highlight">
              Hello, I&apos;m{" Shakin"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Engineer",
                1000,
                "Programmer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="header-description">
            Turning concepts into digital reality, where code converges with creativity and functionality seamlessly blends with captivating elegance.
          </p>
          <div className="header-buttons">
            <a
              href="#contact"
              className="header-button primary-button"
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/drive/folders/1GS9nS6_XqZxYiOgrSFf148_aTWywo9Iu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="header-button secondary-button"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="header-image-container"
        >
          <div className="header-image-wrapper">
            <img
              src={heroImage}
              alt="hero"
              className="header-image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <NavigationDots active="home" />
      <SocialMedia /> {/* Add SocialMedia component */}
    </section>
  );
};

export default Header;
