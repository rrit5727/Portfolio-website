'use client'
import Image from "next/image";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from "react-icons/ai";
import headshot from '../../public/rr-head-shot.jpg';
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useClient } from 'next/client';
import { useState } from "react";



export default function Home() {
  
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      
      <head>
        <title>Portfolio</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
      

      <main className="bg-white  dark:bg-gray-900 relative">
        <div className="h-screen  snap-y snap-mandatory overflow-scroll px-10 md:px-20 lg:-px-40" >
        
          <nav className="py-5 mb-12 flex justify-between dark:text-white sticky top-0 z-50 bg-white">
            <h1 className="text-xl font-burtons">R/R</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
        
        <section id="intro" className=" h-screen snap-start pt-40 py-20">
          <div className="relative flex flex-col md:flex-row space-y-5 items-center justify-center text-center md:text-left md:max-h-fit">
            <div className="text-left p-10">
              <h4 className="text-2xl py-2 md:text-3xl dark:text-white">Hello, my name is </h4>
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ross Ritchie</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Junior Software Developer</h3>
              <h4 className="text-1xl py-2 md:text-2xl dark:text-white">In Sydney</h4>
            </div>
            <div className="w-1">              
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden p-10" >
              <div className="rounded-full overflow-hidden border-8 border-black border-solid">
                <Image src={headshot} layout="fill" objectFit="cover"/>
              </div>
            </div>
          </div>
            <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
            </div>
        </section>

        {/* 2nd page here */}

        <section id="about" className=" h-screen snap-start pt-20">
          <div>
            <h3 className="text-3xl py-2 dark:text-white" >Services offered:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer, I have done remote work for 
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products 
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
              I offer a wide range of services, including brand-design, programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core 
                desing theory
              </p>
              <h4 py-4 className="text-teal-600">Design tools I use:</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core 
                desing theory
              </p>
              <h4 py-4 className="text-teal-600">Design tools I use:</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core 
                desing theory
              </p>
              <h4 py-4 className="text-teal-600">Design tools I use:</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className=" h-screen snap-start pt-20">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer, I have done remote work for 
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products 
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand-design, programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>                    
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></Image>
            </div>                            
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
