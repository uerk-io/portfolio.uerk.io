import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h1 className="text-2xl text-gray-500 uppercase tracking-[20px] ">Contact Me</h1>
        <div className="flex flex-col">
        <p className="text-2xl md:text-4xl uppercase">Get in touch at: <a className="text-decoration-line text-emerald-500"href="mailto: kyle@uerk.io">kyle@uerk.io</a></p>
        </div>
    </div>
  )
}

export default ContactMe