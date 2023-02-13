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
        {/** Standard Data and SEO */}
        <meta name="description" content="I am a results-oriented professional with nearly 4 years of experience and a proven knowledge of Java, Python, C#, and JavaScript/TypeScript. Check out my portfolio!" />
        <meta property="og:title" content="Kyle Uerkwitz @ UerkIO" />
        <meta property="og:description" content="I am a results-oriented professional with nearly 4 years of experience and a proven knowledge of Java, Python, C#, and JavaScript/TypeScript. Check out my portfolio!" />
        <meta property="og:url" content="https://uerk.io/" />
        <meta property="og:type" content="website" />

        {/** Favicon Setup */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/** <link rel="manifest" crossorigin="use-credentials" href="/public/manifest.json" /> */ }
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/public/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

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
