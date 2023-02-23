import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { PriorExperience, previous_positions } from '@/resources/PriorExperiences'

type Props = {}

function MapPriorExperiences() {
  return (
    previous_positions.map((position) =>
      <div className="flex flex-col flex-initial px-10 py-10" key={position.key}>
        <ExperienceCard experience={position}></ExperienceCard>
      </div>
    )
  )

}

function WorkExperience({ }: Props) {

  return (
    <motion.div className="flex relative overflow-hidden flex-col text-lft max-w-full pt-10 px-10 space-y-10 justify-evenly mx-auto">
      
      <h1 className="flex  justify-center top-24 uppercase tracking-[20px] mr-[-20px] text-lg md:text-4xl">Experience</h1>

      <div className="flex flex-row flex-wrap justify-center">

        {MapPriorExperiences()}
      
      </div>

    </motion.div>

  )
}

export default WorkExperience