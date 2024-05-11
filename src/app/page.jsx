'use client'
import Image from "next/image";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from "react-icons/ai";
import headshot from '../../public/rr-head-shot.jpg';
import deved from '../../public/dev-ed-wave.png';
import excel7 from '../../public/excel7.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useClient } from 'next/client';
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'



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
            <h1 className="text-xl font-burtons">R/R</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className=" text-black dark:text-white  px-4 py-2 rounded-md ml-8" href="/#intro">Intro</a>
              </li>
              <li>
                <a className=" text-black dark:text-white  px-4 py-2 rounded-md ml-8" href="/#about">About</a>
              </li>
              <li>
                <a className=" text-black  dark:text-white px-4 py-2 rounded-md ml-8" href="/#projects">Projects</a>
              </li>
              <li>
                <a className=" text-black dark:text-white  px-4 py-2 rounded-md ml-8" href="/#skills">Skills</a>
              </li>
              <li>
                <a className=" text-black dark:text-white  px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>




        
        <section id="intro" className=" snap-start pt-40 py-20 flex-row justify-center  h-4/5 mb-40 overflow-hidden">
          <div className="pt-20 relative  flex flex-col md:flex-row space-y-5  justify-evenly text-center md:text-left md:max-h-fit">
            <div className="text-left p-10 min-w-[380px] w-380px whitespace-nowrap">
              <h4 className="text-2xl py-2 md:text-3xl dark:text-white">Hello, my name is </h4>
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ross Ritchie</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Junior Software Developer</h3>
              <h4 className="text-1xl py-2 md:text-2xl dark:text-white">In Sydney</h4>
            </div>           
            <div className="w-[40px] min-w-[40px]">              
            </div>
            <div className="relative h-[380px] w-[380px] min-w-[380px] sm:w-[255px] bg-gradient-to-b from-teal-500 rounded-full overflow-hidden border-8 border-gray-500 border-solid" >
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
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills</h3>                                        
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
