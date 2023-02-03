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
import ContactMe from '@/components/ContactMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);


  return (
    <div className="bg-zinc-900 text-white h-screen
    overflow-scroll z-0">
      <Head>
        <title>Uerk.IO - Kyle Uerkwitz</title>
        <meta name="description" content="I am a results-oriented professional with nearly 4 years of experience and a proven knowledge of Java, Python, C#, and JavaScript/TypeScript. Check out my portfolio!" />
        <meta property="og:title" content="Kyle Uerkwitz @ UerkIO" />
        <meta property="og:description" content="I am a results-oriented professional with nearly 4 years of experience and a proven knowledge of Java, Python, C#, and JavaScript/TypeScript. Check out my portfolio!" />
        <meta property="og:url" content="https://uerk.io/" />
        <meta property="og:type" content="website" />

      </Head>
      <Header />

      {/* Hero */}
      <section id='hero' className="">
        <Hero />
      </section>

      {/* About */}
      <section id='about' className="">
        <About />
      </section>

      { /* Experience */}
      <section id='experience' className=''>
        <WorkExperience />
      </section>

      {/* Skills */}
      {
        /**
        <section id='skills' className=''>
        <Skills/>
        </section>
       */
      }


      {/** Contact */}
      <section id='contact' className=''>
        <ContactMe />
      </section>

      {/* Projects */}
    </div>
  )
}
