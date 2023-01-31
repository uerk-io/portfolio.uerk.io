import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({ }: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.0,
                }}
                className="flex flex-row items-center">
                {/* Social Icons */}
                <div className="flex pr-2">
                  <SocialIcon
                    url="https://www.linkedin.com/in/kyle-uerkwitz-29b596222/"
                    bgColor="#0FA17A"
                />  
                </div>
                <div className="flex">
                 <SocialIcon
                    url="https://github.com/uerk-io"
                    bgColor="#0FA17A"
                />   
                </div>
                
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.0,
                }}>
                {/* Contact Me */}
                <SocialIcon
                    className="cursor-pointer"
                    url="#contact"
                    fgColor="#0FA17A"
                    bgColor="transparent" />

                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me</p>
            </motion.div>
        </header>
    )
}

export default Header