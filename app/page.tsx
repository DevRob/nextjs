'use client'
import { SocialBar } from './social/SocialBar'
import Slider from './carousel/Slider'
import Image from 'next/image'
import CardList from './lists/CardList'
import devrob from '../public/png/devrob.png'
import { useState } from 'react'

import {
  BsFillMoonFill,
  BsFillSunFill,
  BsArrowRight
} from 'react-icons/bs'

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHandlebarsdotjs,
  SiTailwindcss } from 'react-icons/si'

import { FaLess, FaRegCopyright } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiDownload } from 'react-icons/hi'
import { items } from "../public/CardData.json"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="Main-wrapper bg-stone-100 dark:bg-stone-900 font-montserrat">
        <main className="min-h-screen max-w-6xl mx-auto text-gray-800 dark:text-gray-400 bg-stone-50 dark:bg-stone-800 px-4 py-10 lg:px-10">
          <section>
            <nav className="py-2 mb-12 flex justify-between">
              <h1 className="text-xl font-semibold">Devrob</h1>
              <ul className="flex items-center">
                <li onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                  <BsFillMoonFill className="dark:hidden" />
                  <BsFillSunFill className="hidden dark:block" />
                </li>
                <li><a className="bg-teal-500 text-white py-2 px-3 rounded-md ml-8" href="https://raw.githubusercontent.com/DevRob/nextjs/main/public/Resume.pdf" aria-label="Resume (PDF)"><HiDownload style={{display: "inline-block", marginRight: "0.25rem"}}/>Resume</a></li>
              </ul>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl text-teal-600 font-bold">Robert Molnar</h2>
              <h3 className="text-2xl py-2">Developer</h3>
              <p className="text-md py-2 leading-8">
              <span className="text-teal-500">Welcome to my portfolio! </span>As a seasoned web developer with over a decade of hands-on experience, I&apos;ve honed my skills across a diverse range of projects and roles. My specialty lies in<span className="text-teal-500"> front-end development</span>, where I consistently deliver efficient and user-friendly solutions. My professional journey reflects my versatility, from developing intricate enterprise systems to guiding aspiring developers and contributing to design engineering projects. Take a moment to explore my varied experiences and the multitude of projects that have shaped my career.
              </p>
            </div>
            <SocialBar />
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-5 mx-auto overflow-hidden">
              <Image alt="Robert" src={devrob} fill style={{ objectFit: "cover" }} />
            </div>
          </section>

          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-2">Tech</h3>
              <p className="text-md py-2 leading-8">
                In the realm of web technology, my toolkit is robust and ever-evolving. I command a deep understanding of<span className="text-teal-500"> JavaScript, HTML, </span>and<span className="text-teal-500"> CSS</span>, including LESS and SASS preprocessors. A strong foundation in<span className="text-teal-500"> Node.js</span> and my expertise in<span className="text-teal-500"> Handlebars </span>allow me to build semantic templates effectively. 
                Few other technologies I worked with: <span className="text-teal-500"> REST APIs, Web Services, Git/GitHub, Python, JQuery, C#, .NET, MySQL, knockout.js, TypeScript and React.</span>
              </p>
            </div>
            <div id="tech" className="flex flex-wrap justify-center gap-4 text-4xl max-w-3xl  mx-auto mt-5">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiHandlebarsdotjs />
              <FaLess />
              <SiTailwindcss />
              <SiTypescript />
              <SiReact />
              <TbBrandNextjs />
            </div>
          </section>
          
          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-2">Projects</h3>
              <p className="text-md py-2 leading-8">
                The Projects section of my portfolio showcases a varied collection of initiatives, each underscoring the depth of my professional expertise.
                These projects demonstrate my<span className="text-teal-500"> ability to deliver creative solutions</span>, navigate complex challenges, and consistently advance within the field of web development.
              </p>
            </div>

            <div className="flex flex-wrap flex-col items-center justify-center md:flex-row gap-10 mt-5 max-w-3xl mx-auto">
              <CardList items={[...items]}/>
            </div>
          </section>

          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-2">Portfolio</h3>
              <p className="text-md py-2 leading-8">
              I&apos;ve had the honor of collaborating with talented teams to construct these websites, where I&apos;ve made notable contributions to the<span className="text-teal-500"> front-end development</span>, with varying degrees of involvement in each case.
              </p>
            </div>
            <Slider/>
          </section>
          <footer className="text-xs ">
            <ul className="p-3 border-t flex justify-between text-gray-400">
              <li className="flex items-center gap-3"><FaRegCopyright /> 2023</li>
              <li><a className="flex items-center gap-3" href="https://github.com/DevRob/nextjs" aria-label="Link to GitHub Repository">Check this Page on GitHub <BsArrowRight/></a></li>
            </ul>
          </footer>
        </main>
      </div>
    </div>
  )
}
