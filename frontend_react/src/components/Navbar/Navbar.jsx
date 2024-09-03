// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import './Navbar.scss';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt="logo" />
//       </div>
//       <ul className="app__navbar-links">
//         {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
//           <li className="app__flex p-text" key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="app__navbar-menu">
//         <HiMenuAlt4 onClick={() => setToggle(true)} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: 'easeOut' }}
//           >
//             <HiX onClick={() => setToggle(false)} />
//             <ul>
//               {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={() => setToggle(false)}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//////////////////////////////////////////////////////
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-social">
        <a href="https://www.github.com/saberSakin" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FiGithub /> 
        </a>
        <a href="https://www.linkedin.com/in/sabersakin" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiLinkedin /> 
        </a>
        <a href="https://www.facebook.com/54k1N" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/saber.sakin/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiInstagram />
        </a>
        <a href="mailto:md.shakin18@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FiMail />
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
