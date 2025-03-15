import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showRealContent, setShowRealContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRealContent(true);
    }, 6000); // Show real content after 6 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showRealContent) {
    return (
      <div className="real-content">
        {/* Your real content here */}
        <h1 className="text-center text-4xl font-bold">Real Screen Content</h1>
      </div>
    );
  }

  return (
    <div className="welcome-screen h-screen w-full flex items-center justify-center bg-[#F4F1EA]">
      {/* Loader Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="loader w-16 h-16 border-4 border-t-[#FB792F] border-gray-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>
      </div>

      {/* "fresheat" Text Reveal */}
      <motion.h1
        className="absolute text-6xl sm:text-8xl font-bold text-[#FB792F] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        fresheat
      </motion.h1>

      {/* Partition Animation */}
      <div className="relative w-full h-screen flex">
        <motion.div
          className="bg-[#FB792F] w-1/2 h-full"
          initial={{ width: "100%" }}
          animate={{ width: "50%" }}
          transition={{ delay: 3, duration: 1 }}
        ></motion.div>
        <motion.div
          className="bg-[#FDF2E9] w-1/2 h-full"
          initial={{ width: "0%" }}
          animate={{ width: "50%" }}
          transition={{ delay: 3, duration: 1 }}
        ></motion.div>
        <motion.div
          className="bg-[#D9D9D9] w-1/2 h-full absolute top-0 right-0"
          initial={{ width: "100%" }}
          animate={{ width: "50%" }}
          transition={{ delay: 3, duration: 1 }}
        ></motion.div>
        <motion.div
          className="bg-[#FFFFFF] w-1/2 h-full absolute top-0 left-0"
          initial={{ width: "0%" }}
          animate={{ width: "50%" }}
          transition={{ delay: 3, duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default About;
