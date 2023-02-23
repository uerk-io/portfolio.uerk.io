import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PriorExperience } from 'resources/PriorExperiences'

type Props = {
    experience: PriorExperience
}

function ExperienceCard({experience}: Props) {
    return(
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 pt-20 h-[850px] md:h-[800px] w-[300px] md:w-[600px]
            snap-center bg-[#292929] p-10 cursor-pointer duration-200 overflow-hidden">
            <Image
            src={experience.company_logo_path}
            alt={experience.company}
            className=" rounded-md w-[100px] h-[100px] xl:w-[200px] xl:h-[200px]  md:hobject-cover object-center"
            width={200}
            height={200}
            />
            <div className="px-0 md:px-10">
                <h1 className="xl:text-4xl text-xl  font-light">{experience.position_title}</h1>
                <p className="font-bold  xl:text-2xl text-lg mt-1">{experience.company}</p>
                <div className="flex space-x-2 my-2">
                    {/* Tech Used */}
                    {/* Tech Used */}
                    {/* Tech Used */}
                </div>
                <p className="uppercase py-5 text-gray-300">{experience.time_period}</p>

                <ul className="list-disc space-y-4 ml-5 text-md">
                    {experience.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>

            </div>
        </article>
    )
}

export default ExperienceCard