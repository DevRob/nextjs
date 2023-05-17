'use client'
// import Head from 'next/head'
import { SocialBar } from './social/SocialBar'
import CardModal from './modal/CardModal'
import Image from 'next/image'
import devrob from '../public/png/devrob.png'
import { useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { FaLess } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiHandlebarsdotjs } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'
import { FaRegCopyright } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { SiTailwindcss } from 'react-icons/si'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="Main-wrapper bg-stone-100 dark:bg-stone-900 font-montserrat">
        <main className="min-h-screen max-w-6xl mx-auto text-gray-800 dark:text-gray-400 bg-white dark:bg-stone-800 px-5 py-10 lg:px-10">
          <section>
            <nav className="py-2 mb-12 flex justify-between">
              <h1 className="text-xl font-semibold">Devrob</h1>
              <ul className="flex items-center">
                <li onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                  <BsFillMoonFill className="dark:hidden" />
                  <BsFillSunFill className="hidden dark:block" />
                </li>
                <li><a className="bg-teal-500 text-white py-2 px-5 rounded-md ml-8" href="https://raw.githubusercontent.com/DevRob/nextjs/main/public/Resume.pdf" aria-label="Resume (PDF)"><HiDownload style={{display: "inline-block", marginRight: "0.25rem"}}/>Resume</a></li>
              </ul>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl text-teal-600 font-bold">Robert Molnar</h2>
              <h3 className="text-2xl py-2">Developer</h3>
              <p className="text-md py-5 leading-8">
              <span className="text-teal-500">Welcome to my portfolio! </span>As a seasoned web developer with over a decade of hands-on experience, I&apos;ve honed my skills across a diverse range of projects and roles. My specialty lies in<span className="text-teal-500"> front-end development</span>, where I consistently deliver efficient and user-friendly solutions. My professional journey reflects my versatility, from developing intricate enterprise systems to guiding aspiring developers and contributing to design engineering projects. Take a moment to explore my varied experiences and the multitude of projects that have shaped my career.
              </p>
            </div>
            <SocialBar />
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 mx-auto overflow-hidden">
              <Image alt="Robert" src={devrob} fill style={{ objectFit: "cover" }} />
            </div>
          </section>

          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-5">Tech</h3>
              <p className="text-md py-5 leading-8">
                In the realm of web technology, my toolkit is robust and ever-evolving. I command a deep understanding of<span className="text-teal-500"> JavaScript, HTML, </span>and<span className="text-teal-500"> CSS</span>, including LESS and SASS preprocessors. A strong foundation in<span className="text-teal-500"> Node.js</span> and my expertise in<span className="text-teal-500"> Handlebars </span>allow me to build semantic templates effectively. 
                Few other technologies I worked with: <span className="text-teal-500"> REST APIs, Web Services, Git/GitHub, Python, JQuery, C#, .NET, MySQL, knockout.js, TypeScript and React.</span></p>
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
              <h3 className="text-3xl py-5">Projects</h3>
              <p className="text-md py-5 leading-8">
                The Projects section of my portfolio showcases a varied collection of initiatives, each underscoring the depth of my professional expertise.
                These projects demonstrate my<span className="text-teal-500"> ability to deliver creative solutions</span>, navigate complex challenges, and consistently advance within the field of web development.
              </p>
            </div>

            <div className="flex flex-wrap flex-col items-center justify-center md:flex-row gap-10 mt-5 max-w-3xl mx-auto">
              <CardModal
                title="CSS 3D Transform"
                description="Engaging in exploratory work with 3D User Interface design has been an intriguing endeavor.
                  While the practical application of a rotating web form may not be readily apparent,
                  the experimental process offered both amusement and a valuable coding challenge."
                url="http://devrob.github.io/3D-transforms/"
                srcUrl="https://github.com/DevRob/3D-transforms"
                svg="transform"
                media="transform"
              />
              <CardModal
                title="Automated email & sms Feature for ERP System"
                description="I revamped the existing system to enable my colleagues to effortlessly establish various forms of automated communications.
                  These include email and text messages for order confirmations, stock level alerts, scheduled dispatch notifications, periodic reports,
                  and customer special offers."
                url=""
                srcUrl="https://github.com/DevRob/sms-server"
                svg="email"
                media="email"
              />
              <CardModal
                title="Neighborhood Map"
                description="I developed a single-page application that showcases a customizable map of any chosen neighborhood.
                  This feature-rich application includes map markers for highlighting points of interest, a search function for location discovery,
                  and a list view for simple browsing. Additionally, I&apos;ve integrated third-party APIs to offer supplementary information about each location,
                  such as StreetView images, Wikipedia articles, and 4Square reviews"
                url="http://devrob.github.io/Places-APP"
                srcUrl="https://github.com/DevRob/Places-APP"
                svg="map"
                media="map"
              />
              <CardModal
                title="Unbeatable Tic-Tac-Toe"
                description="For this project, I created a Tic-Tac-Toe game featuring an AI opponent that simply cannot be beaten.
                  The AI makes use of the Minimax Algorithm to determine its moves, ensuring the most optimal choice is always made.
                  This algorithm considers all possible moves for the AI player and selects the most advantageous one based on certain metrics.
                  To ensure the project&apos;s robustness and effectiveness, I employed the Test Driven Development technique using Jasmine.js."
                url="http://devrob.github.io/TDD-Project-TTT"
                srcUrl="https://github.com/DevRob/TDD-Project-TTT"
                svg="ttt"
                media="tictactoe"
              />
              <CardModal
                title="Classic Arcade Game Clone"
                description="Utilizing given visual assets and a game loop engine, I introduced numerous game entities,
                  including player characters and adversaries, effectively reconstructing the iconic arcade game, Frogger.
                  To increase the game&apos;s versatility, I also designed a map generator, which allows for straightforward addition,
                  removal, and modification of game levels."
                url="http://devrob.github.io/Udacity-WebDev-project3"
                srcUrl="https://github.com/DevRob/Udacity-WebDev-project3"
                svg="game"
                media="frogger"
              />
              <CardModal
                title="Asteroids Game Clone"
                description="In this project, I created a Python-based rendition of the classic Asteroids computer game.
                  The gameplay involves generating a spaceship and a field of asteroids, and tracking collisions between the ship and the asteroids.
                  With each collision, an asteroid is eliminated, and the player forfeits a life. The space bar triggers the launch of new missiles,
                  which can obliterate asteroids upon contact, a feature ensured by collision detection between the two elements.
                  The game also includes a scoring system to track player progress."
                url="https://py3.codeskulptor.org/#user308_ydj6LNsNpv_12.py"
                srcUrl="https://py3.codeskulptor.org/#user308_ydj6LNsNpv_12.py"
                svg="spaceship"
                media="asteroid"
              />
            </div>
          </section>
          <footer>
            <ul className="p-3 border-t flex justify-between text-gray-400">
              <li className="p-2 flex items-center gap-3"><FaRegCopyright /> 2023</li>
              <li className="p-2"><a className="flex items-center gap-3" href="https://github.com/DevRob/nextjs" aria-label="Link to GitHub Repository">Check this Page on GitHub <BsArrowRight/></a></li>
            </ul>
          </footer>
        </main>
      </div>
    </div>
  )
}
