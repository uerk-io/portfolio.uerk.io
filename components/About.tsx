import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import SecondPortfolioImage from '../public/portfolio_about.jpg'

type Props = {}

function About({ }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        {/* TODO: Use NextJS Images */}
        <Image
          src={SecondPortfolioImage}
          className="-mb-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
          alt="Portfolio Headshot" />

        <div className="space-y-10 px-0 -mb-20 md:px-10 md:mb-0">
        </div>
        <p className="text-base lg:text-lg">
          I am a results-oriented professional with nearly 4 years of experience and a proven knowledge of Java, Python, C#, and JavaScript/TypeScript.
          I&#39;m aiming to leverage my abilities to successfully fill a full-stack Software Engineering position. Some of my hobbies include 3D printing, microelectronics
          projects (including the Arduino series of microcontrollers, and the Raspberry Pi), and my passion for guitar and music/audio production.

          My experience covers a variety of different tech-stacks and I&#39;m always looking to further my knowledge on the latest in Full-Stack development.
        </p>
      </motion.div>
    </>
  )
}

export default About