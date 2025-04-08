import React from 'react';
import { motion } from 'framer-motion';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import Tabs from './Tabs.jsx';
import Footer from "./Footer.jsx"

const App = () => {
  return (
    <div className=" bg-gray-200 items-center justify-center">
      <div className='h-16 bg-black flex items-center justify-between text-gray-200'>
        <div className='flex items-center w-full'>
          <img src='protrainy.png' className='h-7 ml-10' />
          <div className='hidden md:flex ml-7 gap-5'>
            <p className=''>HOME</p>
            <p>COURSES</p>
            <p>BLOG</p>
          </div>

        </div>
        <p className='mr-5'>LOGIN</p>
      </div>
      <div className=' bg-gray-200'>
        <div className=" bg-gray-200 pt-7 w-full flex flex-col md:flex-row  ">
          {/* Left side image */}


          {/* Right side content */}
          <motion.div
            className="p-8 md:w-1/2 flex flex-col justify-center z-50"
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
          >
            <motion.div
            className=" flex flex-col justify-center z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-6xl text-gray-900 font-bold mb-4"><span className='text-yellow-500'>Modern Web Mastery:</span> Building Dynamic, Responsive Experiences</h2>
            </motion.div>
            <p className="text-xs md:text-base text-gray-500 mb-6">
              Join our comprehensive masterclass designed specifically for aspiring and experienced developers looking to thrive in today’s fast-paced tech landscape.
              In this immersive course, you'll gain hands-on experience with the latest tools and best practices in web development—from crafting responsive, modern user interfaces with React and TailwindCSS to optimizing performance and deploying scalable applications.



            </p>
            <div className="space-y-4 flex justify-around  p-3">
              <div className='h-full gap-2 flex flex-col   justify-around'>
                <div className='flex items-center gap-2 md:gap-4 '>
                  <span className="font-semibold"><BsFillCalendarDateFill className='text-lg md:text-2xl text-cyan-500' /></span> <p className='text-[8px] md:text-base font-bold text-gray-500'>April 19, 2025 </p>
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                  <span className="font-semibold"><IoIosTime className='text-lg md:text-2xl text-cyan-500' /></span> <p className='text-[8px] md:text-base font-bold text-gray-500'>10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className='h-full gap-2 flex flex-col  items-center justify-around'>
                <div className='flex items-center gap-2 md:gap-4 '>
                  <span className="font-semibold"><FaLocationDot className='text-lg md:text-2xl text-cyan-500' /></span> <p className='text-[8px] md:text-base font-bold text-gray-500'>10:00 AM - 2:00 PM</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="protrainy.png"
                    alt="ProTrainy Logo"
                    className="h-4 md:h-5 filter md:grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            </div>

          </motion.div>
          <motion.div
            className=" flex flex-col items-center md:w-1/2 z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="w-[90%] object-cover rounded-lg"
              src="img1.jpg"
              alt="Masterclass"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-tr w-[90%] bg-cyan-900 text-white py-4  font-semibold text-xl px-6 rounded-lg shadow-lg"
            >
              ENROLL NOW
            </motion.button>
            {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg"
          >
            View all the Registrations
          </motion.button> */}
          </motion.div>
          <svg
            className="hidden md:block absolute -bottom-2 left-0 w-full "
            viewBox="0 0 1440 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,100 C360,0 1080,200 1440,150 L1440,320 L0,320 Z"
            // d="M0,256L48,240C96,224,192,192,288,160C384,128,480,96,576,112C672,128,768,192,864,208C960,224,1056,192,1152,160C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className='hidden md:block mt-10 relative z-50 w-full h-28'>
          <div 
          style={{
            animation: 'float 2.5s ease-in-out infinite',
          }}
          className=' mx-16 h-full border border-r-yellow-600 border-l-violet-600 border-t-pink-600 border-b-blue-600 rounded-lg bg-white [box-shadow:0_0_30px_rgba(0,0,0,0.15)] flex items-center justify-around'>
            <div className='h-20 w-1/4 border-r-2 border-gray-300 flex flex-col justify-center items-center'>
              <div>
                <p className='flex text-xl text-gray-700 font-semibold'>Beginner Level</p>
                <p className=' flex items-center justify-center text-sm text-gray-400 gap-1'><p>Recommended Experience</p> <IoMdInformationCircleOutline className='text-xl cursor-pointer text-blue-400' /></p>
              </div>
            </div>
            <div className='h-20 w-1/4 border-r-2 border-gray-300 flex flex-col justify-center items-center'>
              <p className='flex text-xl gap-1 text-gray-700 font-semibold items-center'><p className='text-xl'>98% </p> <BiSolidLike className='text-2xl text-blue-500' /></p>
              <p className=' flex items-center justify-center text-sm text-gray-400 gap-1'>( Most people liked this course )</p>
            </div>
            <div className='h-20 w-1/4 border-r-2 border-gray-300 flex flex-col justify-center items-center'>
              <p className='flex text-xl gap-1 text-gray-700 font-semibold items-center'><p className='text-xl'>4.8 </p> <RiStarSFill className='text-2xl text-blue-500' /></p>
              <p className=' flex items-center justify-center text-sm text-gray-400 gap-1'>( 666 reviews )</p>
            </div>
            <div className='h-20 w-1/4 border-gray-300 flex flex-col justify-center items-center'>
              <div className='w-[60%] flex flex-col justify-center items-center'>
                <p className='flex text-xl gap-1 text-gray-700 font-semibold items-center'>4 Modules</p>
                <p className=' flex items-center justify-center text-center text-sm text-gray-400 gap-1'>Gain insight into a topic and learn the fundamentals.</p>
              </div>
            </div>

            {/* <div className='h-20 w-1/4 border-r-2 border-gray-300 flex flex-col justify-center items-center'>
            <p className='flex'>4.8  <RiStarSFill className='text-2xl text-blue-500' /></p>
            <p className='flex text-gray-400'>( 666 reviews )</p>
          </div> */}
            {/* <div className='h-20 w-1/4'>

          </div> */}
          </div>
        </div>

      </div>
      <Tabs />
      <Footer />
      <style>
   
  </style>

    </div>
    

  );
};

export default App;
