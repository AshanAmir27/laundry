import React from 'react'

function AboutCompany() {
  return (
    <div>
         <section className="flex flex-col lg:flex-row w-11/12 lg:w-4/5 mx-auto mt-48">
          <div className="w-full lg:w-1/2">
            <img src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/about1.png" alt="About Company" className="w-full h-auto object-cover" />
          </div>
          <div className="p-5 w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl pt-8 lg:pt-16 text-center lg:text-left">About Company</h1>
            <p className="pt-4 md:pt-6 lg:pt-8 text-sm md:text-base lg:text-lg leading-6 text-center lg:text-left w-full lg:w-4/5">
              The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
            </p>
            <p className="pt-4 md:pt-6 lg:pt-8 text-sm md:text-base lg:text-lg leading-6 text-center lg:text-left w-full lg:w-4/5">
              The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
            </p>
            <button className="relative mt-6 md:mt-8 mx-auto lg:ml-12 text-white leading-6 px-6 py-3 rounded-3xl text-lg bg-blue-500 overflow-hidden group">
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 bg-blue-600 transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-1/2 opacity-70"></span>
            </button>
          </div>
        </section>
    </div>
  )
}

export default AboutCompany
  