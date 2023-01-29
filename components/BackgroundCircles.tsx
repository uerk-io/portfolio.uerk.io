import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative flex justify-center items-center">


            <div className="relative flex justify-center items-center">
                <div className="border border-[#6AA666] rounded-full h-[200px] w-[200px] mt-[270px]
        absolute animate-ping"></div>
                <div className="border border-[#333333] rounded-full h-[300px] w-[300px] mt-[270px]
        absolute"></div>
                <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-[270px]
        absolute"></div>
                <div className="border border-[#047857] rounded-full h-[650px] w-[650px] mt-[270px] 
        absolute
        animate-pulse"></div>
            </div>
        </motion.div>
    )
}

export default BackgroundCircles