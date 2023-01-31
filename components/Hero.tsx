import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundTrace from './BackgroundTrace';
import MainPortfolioImage from '../public/portfolio_hero.jpg'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "<Uerk.IO>",
            "Kyle Uerkwitz"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="relative h-screen flex flex-col items-center justify-center
    text-center overflow-hidden pb-40">
            {/* <BackgroundCircles /> */}

            <div className="z-10 absolute">
                <BackgroundTrace />

            </div>
            <div className="z-20 absolute">
                <Image
                    className="relative w-56 rounded-full mx-auto object-cover"
                    alt=""
                    src={MainPortfolioImage}>
                </Image>
            </div>

            <div style={{ height: 480 }}>

            </div>

            <div className="z-20 relative" style={{ backgroundColor: 'rgba(28,28,28, 0.95)', borderRadius: 10 }}>

                <h2 className="text-md uppercase text-gray-500 pt-2 pb-2 tracking-[5px]">Full-Stack Engineer</h2>

                <h1 className="text-4xl lg:text-5xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#047857" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton text-white mr-1">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton text-white mr-1">Experience</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton text-white mr-1"> Contact Me</button>
                    </Link>
                    {/**
                    <Link href="#projects">
                        <button className="heroButton text-white">Projects</button>
                    </Link>
                    */ }
                </div>
            </div>
        </div>
    )
}

export default Hero