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
                <li><a className="bg-teal-500 text-white py-2 px-5 rounded-md ml-8" href="#"><HiDownload style={{display: "inline-block", marginRight: "0.25rem"}}/>Resume</a></li>
              </ul>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl text-teal-600 font-bold">Robert Molnar</h2>
              <h3 className="text-2xl py-2">Developer</h3>
              <p className="text-md py-5 leading-8">
                Welcome to my portfolio! I am a seasoned web developer with a rich tapestry of experience spanning over a decade. I specialize in front-end development, armed with proficiency in JavaScript, HTML, CSS/LESS/SASS, among other technologies. My portfolio spans roles in enterprise resource planning system development, design engineering, and even mentoring budding developers, showcasing my ability to adapt and excel in varied environments. Dive in to explore my journey and the diverse projects I've had the privilege of working on.
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
                In the realm of technologies, my toolkit is robust and ever-evolving. I command a deep understanding of JavaScript, HTML, and CSS, including LESS and SASS preprocessors. With a strong foundation in Node.js, I effortlessly juggle server-side scripting, and my expertise in Handlebars allows me to build semantic templates effectively. My proficiency in utilizing REST APIs, Web Services, and Ajax ensures seamless data flow in my applications. Not to mention, my abilities with version control systems like Git/GitHub, and my experience in Python and JQuery, help me deliver well-rounded, efficient solutions. While my journey has had a strong focus on front-end technologies, I'm also familiar with C#, .NET, MySQL, knockout.js, AngularJS, and React, showing my versatility as a developer. Please delve deeper to learn about how I've applied these technologies in my projects.
              </p>
            </div>
            <div id="tech" className="flex flex-wrap justify-center gap-4 text-4xl max-w-3xl  mx-auto mt-5">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiHandlebarsdotjs />
              <FaLess />
              <SiTypescript />
              <SiReact />
              <TbBrandNextjs />
            </div>
          </section>
          
          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-5">Projects</h3>
              <p className="text-md py-5 leading-8">
                The Projects section of my portfolio presents a diverse<span className="text-teal-500">  collection of</span> initiatives that highlight 
                the depth and breadth of my<span className="text-teal-500"> professional expertise</span>. Through these ventures, 
                I bring to light my capacity to deliver innovative solutions, tackle complex challenges, and push the boundaries of traditional web development.
              </p>
            </div>

            <div className="flex flex-wrap flex-col items-center justify-center md:flex-row gap-10 mt-5 max-w-3xl mx-auto">
              <CardModal
                title="CSS 3D Transform"
                description="Experimenting with 3D UI design. I did not find the benefit to filling out a swiveling web form, but it's fun to experiment with and a good coding challange."
                url="http://devrob.github.io/3D-transforms/"
                srcUrl="https://github.com/DevRob/3D-transforms"
                svg="transform"
              />
              <CardModal
                title="Automated Email Feature for ERP System"
                description="Rework the old system so fellow developers can easily set up  different types of automated email and text 
                  messages such as order confirmation, notification about stock level or scheduled dispatch, periodic 
                  reports, special offers for customers."
                url=""
                srcUrl=""
                svg="email"
              />
              <CardModal
                title="Neighborhood Map"
                description="Develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.
                  Additional functionality to this application, including: map markers to identify popular locations or places you’d 
                  like to visit, a search function to easily discover these locations, and a listview to support simple browsing of 
                  all locations. Implement third-party APIs that provide additional information about each of these locations 
                  (such as StreetView images, Wikipedia articles, Yelp reviews, etc)."
                url="http://devrob.github.io/Places-APP"
                srcUrl="https://github.com/DevRob/Places-APP"
                svg="map"
              />
              <CardModal
                title="Unbeatable Tic-Tac-Toe"
                description="In this project I built a Tic-Tac-Toe game, that has an unbeatable A.I. player. 
                  The goal was to use Minimax Algorithm for decision making, so it's going to pick the best moves. 
                  The algorithm calculate all the possible moves available for the computer player and
                  use some metric to determine the best possible move. I used Jasmin.js and Test Driven Development technique for this project."
                url="http://devrob.github.io/TDD-Project-TTT"
                srcUrl="https://github.com/DevRob/TDD-Project-TTT"
                svg="ttt"
              />
              <CardModal
                title="Classic Arcade Game Clone"
                description="I've been provided visual assets and a game loop engine; using these tools 
                  I added a number of entities to the game including the player characters and enemies to 
                  recreate the classic arcade game Frogger. Further more I implemented a map generator to 
                  able to easily add/remove/modify levels for the game."
                url="http://devrob.github.io/Udacity-WebDev-project3"
                srcUrl="https://github.com/DevRob/Udacity-WebDev-project3"
                svg="game"
              />
              <CardModal
                title="Asteroids Game Clone"
                description="Implement a version of Asteroind computer game in Python. Spawn a ship and a set of asteroids, 
                  detect collisions between the ship and a rocks. Upon a collision, the rock should be destroyed and 
                  the player should lose a life. Spawn new missiles when firing using the space bar and destroy the 
                  rocks when they are hit by a missile checking collisions between two groups. Implement a scoring system."
                url="https://py3.codeskulptor.org/#user308_ydj6LNsNpv_11.py"
                srcUrl="https://py3.codeskulptor.org/#user308_ydj6LNsNpv_11.py"
                svg="spaceship"
              />
            </div>
          </section>
          <footer>
            <ul className="p-3 border-t flex justify-between text-gray-400">
              <li className="p-2 flex items-center gap-3"><FaRegCopyright /> 2023</li>
              <li className="p-2"><a className="flex items-center gap-3" href="#">Check this Page on GitHub <BsArrowRight/></a></li>
            </ul>
          </footer>
        </main>
      </div>
    </div>
  )
}
