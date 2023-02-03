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
        className="flex flex-col relative h-screen text-center md:text-left
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h1 className="flex justify-center text-center top-24 uppercase tracking-[20px] text-xl md:text-4xl">About</h1>

        <Image
          src={SecondPortfolioImage}
          className="-mb-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
          alt="Portfolio Headshot" />

        <p className="text-base lg:text-lg pt-40 lg:pt-20">
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