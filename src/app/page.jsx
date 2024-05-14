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
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx';
import { motion } from "framer-motion";



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
  const [currentIndex, setCurrentIndex] = useState(1)
  const [darkMode, setDarkMode] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <head>
        <title>Portfolio</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
      

      <main className="bg-white  dark:bg-gray-900 relative">
        <div className="h-screen  snap-y snap-mandatory overflow-scroll px-10 md:px-20 lg:-px-40" >
        
          <nav className="py-5 mb-12 flex justify-between dark:text-white sticky top-0 z-50 bg-white dark:bg-gray-900">
            <div class="fadeInUp">
              <h1 className="text-xl font-burtons">R/R</h1>
            </div>
            <motion.div
              initial={{ x: 0, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <ul className="flex items-center" >
                <li className="ml-5 border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark py-1">
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




        
        <section id="intro" className=" snap-start pt-40 py-20 flex-row h-4/5 mb-40 overflow-hidden">
          <div className="pt-20 relative px-40 flex flex-col md:flex-row space-y-5 items-center justify-evenly text-center md:text-left md:max-h-fit">
            <div className="text-left p-10 min-w-[380px] w-380px whitespace-nowrap">
              <h4 className="text-2xl py-2 md:text-3xl dark:text-white">Hello, my name is </h4>
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ross Ritchie</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Junior Software Developer</h3>
              <h4 className="text-1xl py-2 md:text-2xl dark:text-white">In Sydney</h4>
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

        <section id="about" className="  snap-start mx-20 pt-20 overflow-hidden h-4/5 mb-40">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>            
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden " >
            <Image src={excel7} className="rounded-lg object-contain w-full h-full" ></Image>
          </div>                    
        </section>

        <section id="projects" className="h-screen snap-start pt-40 py-20">
          <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group" >
            <div 
              style={{
                backgroundImage: `url(${slides[currentIndex].url})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }} 
              className="w-full h-full rounded-2xl bg-center bg-contain duration-500 "
            >
            {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2-xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>
            {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2-xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div>
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div 
                  key={slideIndex} 
                  onClick={() => goToSlide(slideIndex)} 
                  className="text-2xl cursor-pointer">
                  <RxDotFilled />
                </div>
              ))}
            </div>
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
