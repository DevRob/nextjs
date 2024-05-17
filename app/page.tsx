'use client'
import { SocialBar } from './social/SocialBar'
import Slider from './carousel/Slider'
import Image from 'next/image'
import CardList from './lists/CardList'
import devrob from '../public/webp/devrob.webp'
import { useState } from 'react'
import parse from 'html-react-parser'

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
import { sections } from "../public/cms/Sections.json"
import { items } from "../public/cms/CardData.json"

export default function Home() {
  const intro = sections[0]
  const tech = sections[1]
  const projects = sections[2]
  const portfolio = sections[3]
  const [darkMode, setDarkMode] = useState(false)
  const processDescription = (data: Array<string>, divider: string='') => {
    return <>{parse(data.join(divider))}</>
  }
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
                <li><a className="bg-teal-500 text-slate-50 py-2 px-3 rounded-md ml-8" href="https://raw.githubusercontent.com/DevRob/nextjs/main/public/Resume.pdf" aria-label="Resume (PDF)"><HiDownload style={{display: "inline-block", marginRight: "0.25rem"}}/>Resume</a></li>
              </ul>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl text-teal-600 font-bold">{intro.title}</h2>
              <h3 className="text-2xl py-2">{intro.subTitle}</h3>
              <p className="text-md py-2 leading-8">{processDescription(intro.description)}</p>
            </div>
            <SocialBar />
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-5 mx-auto overflow-hidden">
              <Image alt="Robert" src={devrob} fill style={{ objectFit: "cover" }} />
            </div>
          </section>

          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-2">{tech.title}</h3>
              <p className="text-md py-2 leading-8">{processDescription(tech.description)}</p>
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
              <h3 className="text-3xl py-2">{projects.title}</h3>
              <p className="text-md py-2 leading-8">{processDescription(projects.description)}</p>
            </div>

            <div className="flex flex-wrap flex-col items-center justify-center md:flex-row gap-10 mt-5 max-w-3xl mx-auto">
              <CardList items={[...items]}/>
            </div>
          </section>

          <section>
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl py-2">{portfolio.title}</h3>
              <p className="text-md py-2 leading-8">{processDescription(portfolio.description)}</p>
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
