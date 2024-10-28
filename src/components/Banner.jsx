import React from 'react'
import banner from "../assets/banner.avif";
function Banner({heading}) {
  return (
    <div>
           {/* Banner Section */}
      <section className="w-full relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center pl-5 md:pl-5 lg:pl-40  mt-0">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          alt=""
        />
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {heading}
        </h1>
      </section>
    </div>
  )
}

export default Banner
    