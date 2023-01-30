import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { PriorExperience, previous_positions } from '@/resources/PriorExperiences'

type Props = {}

function MapPriorExperiences() {
  return (
    previous_positions.map((position) =>
      <div key={previous_positions.indexOf(position)}>
        <ExperienceCard experience={position}></ExperienceCard>
      </div>
    )
  )

}

function WorkExperience({ }: Props) {

  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-lft max-w-full px-10 justify-evenly mx-auto">
      
      <h3 className="flex  justify-center top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-4xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 md:p-[200px] snap-x snap-mandatory">

        {MapPriorExperiences()}
      
      </div>

    </motion.div>

  )
}

export default WorkExperience