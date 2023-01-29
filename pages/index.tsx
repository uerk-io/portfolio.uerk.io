import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <Head>
        <title>Uerk.IO - Kyle Uerkwitz</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id='hero' className="snap-start">
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className="snap-center">
        <About/>
      </section>

      { /* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      {/* Projects */}
    </div>
  )
}
