'use client'
import Image from "next/image";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from "react-icons/ai";
import headshot from '../../public/rr-head-shot.jpg';
import excel7 from '../../public/excel7.png';
import css from '../../public/dev-icons/css.png';
import aws from '../../public/dev-icons/aws.png';
import bootstrap from '../../public/dev-icons/bootstrap.png';
import express from '../../public/dev-icons/express.png';
import github from '../../public/dev-icons/github.png';
import html from '../../public/dev-icons/html.png';
import js from '../../public/dev-icons/js.png';
import mongodb from '../../public/dev-icons/mongodb.png';
import next from '../../public/dev-icons/next.png';
import node from '../../public/dev-icons/node.png';
import postgresql from '../../public/dev-icons/postgresql.png';
import python from '../../public/dev-icons/python.png';
import react from '../../public/dev-icons/react.png';
import tailwind from '../../public/dev-icons/tailwind.png';
import { useClient } from 'next/client';
import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { red } from "tailwindcss/colors";
import {EmblaCarousel} from './components/EmblaCarousel'



export default function Home() {
  
  const slides = [
    {
      url: 'https://raw.githubusercontent.com/tdha/project-three/main/Readme_imgs/Results.png', 
    },
    {
      url: 'https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Home_page.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Results.png',
    },           
    {
      url: 'https://raw.githubusercontent.com/rrit5727/Project2/main/Readme_images/Item-list.png',
    }           
  ]
  // const [currentIndex, setCurrentIndex] = useState(1)
  const [darkMode, setDarkMode] = useState(false);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length -1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex)
  // }

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // }

  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';




  const [textColor, setTextColor] = useState('black');
  const [fontWeight, setFontWeight] = useState('normal');

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <head>
        <title>Portfolio</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
      

      <main className="bg-green-100  dark:bg-gray-900 relative ">
        <div className="h-screen snap-y snap-mandatory overflow-scroll px=10" >
        
          <nav className="px-5 pt-10 pb-10 mb-12 flex justify-between dark:text-white sticky top-0 z-50 bg-green-100 dark:bg-gray-900">
            <div class="fadeInUp">
              <h1 className="text-3xl font-burtons">R . R</h1>
            </div>
            <motion.div
              initial={{ x: 0, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <ul className="flex items-center" >
                <li className="ml-5 border-b-0">
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                </li>
                <li>
                  <a className="
                      text-black dark:text-white  px-4 py-2  ml-8
                      border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                    href="/#intro">Intro
                  </a>
                </li>
                <li>
                  <a className="
                      text-black dark:text-white  px-4 py-2  ml-8
                      border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                    href="/#about">About
                  </a>
                </li>
                <li>
                  <a className="
                      text-black dark:text-white  px-4 py-2  ml-8
                      border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                    href="/#projects">Projects
                  </a>
                </li>
                <li>
                  <a className="
                      text-black dark:text-white  px-4 py-2  ml-8
                      border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                    href="/#skills">Skills
                  </a>
                </li>
                <li>
                  <a className="
                      text-black dark:text-white  px-4 py-2  ml-8
                      border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                    href="/#resume">Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </nav>

            <section id="projects" className="h-screen snap-start pt- flex justify-center items-center">              
              <div className="flex flex-col items-center justify-center h-3/5 w-4/5 rounded-lg overflow-hidden">
                <h1 className="text-3xl pb-5">
                  Projects
                </h1>
                <div className="h-full w-full m-auto py-16 px-20 relative group bg-teal-200 rounded-lg overflow-hidden" >
                  <EmblaCarousel />
                </div>  
              </div>
            </section>
            

          <section id="about" className="snap-start pt-20 overflow-hidden h-full mb-40 bg-green-100">
          <div className="text-black text-3xl font-bold items-center justify-center pt-10 pb-5 flex">
            <h1 className="text-3xl font-bold">About ME-PT</h1>
          </div>
          <div className="pt-5 relative px-20 flex flex-col space-y-5 items-start justify-evenly text-center md:text-left md:max-h-fit">
            <div className="text-left text-2xl w-full max-w-7xl mx-auto">
              <div className="flex flex-col items-start">
                <h5 className="text-xl font-bold mb-2">User</h5>
                <div className="bg-teal-200 p-5 rounded-lg shadow-lg mb-5 w-full">
                  <TypeAnimation
                    cursor={false}
                    className="custom-type-animation-cursor"
                    style={{ whiteSpace: 'pre-line', height: 'auto', display: 'block' }}
                    sequence={[
                      `Tell me about yourself.`,
                      1000,                  
                      (el) => el.classList.remove('custom-type-animation-cursor'),
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 5 }}
                    omitDeletionAnimation={true}
                    repeat={0}
                  />
                </div>
                <h5 className="text-xl font-bold mb-2">Ross</h5>
                <div className="bg-teal-200 p-5 rounded-lg shadow-lg mb-5 w-full">
                  <TypeAnimation
                    cursor={false}
                    className="custom-type-animation-cursor"
                    style={{ whiteSpace: 'pre-line', height: 'auto', display: 'block' }}
                    sequence={[
                      ``,
                      1000,
                      `Sure!

                      I started out as a corporate tax consultant and found that I really enjoyed using excel formulas to streamline analysing transaction data for tax purposes.
                      
                      I soon realised that the best part of my job was using algorithmic thinking to solve problems, speed up manual processes, and reduce errors.
                      
                      I figured that coding would be a better fit for this type of creative problem-solving and learned to code long into the night after finishing my day job.
                      
                      The late-nights didn't bother me as my enthusiasm for coding meant that I could happily spend hours on a project that solved a practical problem.
                      
                      I worked in a team throughout my previous career and was also the main point of client contact. As a result, I bring valuable skills that complement the technical skills required in software engineering.`,
                      
                      (el) => el.classList.remove('custom-type-animation-cursor'),
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 5 }}
                    omitDeletionAnimation={true}
                    repeat={0}
                  />
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </section>

                   
        <section id="intro" className=" snap-start pt-20 py-20 flex-row h-4/5 mb-40 overflow-hidden">
          <div className="pt-20 relative px-40 flex flex-col md:flex-row space-y-5 items-center justify-evenly text-center md:text-left md:max-h-fit" >
            <div className="text-left p-10 min-w-[380px] w-380px whitespace-nowrap">
              <h4 className="text-2xl py-2 md:text-3xl dark:text-white">Hello, my name is </h4>
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ross Ritchie</h2>
              <span className="text-3xl">I am a </span> 
                  <span className="text-3xl" style={{ color: textColor, fontWeight: fontWeight }}>
                    <TypeAnimation 
                      cursor={false}              
                      className={CURSOR_CLASS_NAME}
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' corporate tax consultant',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' Software developer',
                        () => setTextColor('#14b8a6'),
                        () => setFontWeight('Bold'),
                        3000,
                        ' Software developer.',                  
                        (el) => el.classList.remove('custom-type-animation-cursor'),                
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{  display: 'inline-block' }}
                      class="custom-type-animation-cursor"
                      repeat={0}
                    />
                  

                  </span>
              <h4 className="text-1xl py-2 md:text-2xl dark:text-white">Based in Sydney</h4>
            </div>           
            <div className="w-[40px] min-w-[40px]">              
            </div>
            <div className="relative h-[380px] w-[380px] min-w-[380px] sm:w-[255px] bg-gradient-to-b from-teal-600 rounded-full overflow-hidden border-8 border-teal-500 border-solid" >
              <div className="rounded-full  overflow-hidden ">
                <Image src={headshot} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
            <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
            </div>
        </section>   
        
                

        

        <section id="skills" className=" h-screen snap-start pt-20">
          <div className="flex-col justify-center items-center text-center justify-items-end">
            <div className="h-[100px]">
              <h3 className="text-3xl py-1 dark:text-white">Skills</h3>                                        
            </div>
            <div id="grid-container" className="flex justify-center flex-wrap sm:px-0 sm:mx-0">
              <div className="
              justify-center justify-items-center text-center
              md:grid md:grid-cols-6 md:grid-rows-3 md:min-w-[900px] 
              sm:grid sm:grid-cols-4 sm:grid-rows-5 sm:min-w-[500px]">
                <div class="fadeInUp" className=" relative h-[150px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={css}  objectFit="cover" classname="w-[100px] h-[100px] py-10" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={aws} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={bootstrap} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={express} layout="fill" objectFit="contain" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={github} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={html} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={js} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={mongodb} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={next} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={node} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={postgresql} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden">
                  <Image src={python} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="
                relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden  
                sm:col-start-2 md:col-start-3 " >
                  <Image src={react} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                <div class="fadeInUp" className="
                relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden  
                sm:col-start-3 md:col-start-4 " >
                  <Image src={tailwind} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div>
                {/* <div className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden  sm:col-start-3 sm:grid-row-start-4 " >
                  <Image src={tailwind} layout="fill" objectFit="cover" classname="w-[100px] h-[100px]" />
                </div> */}
              </div>
            </div>
          </div>
        </section>

                
        </div>
      </main>
    </div>
  );
}
