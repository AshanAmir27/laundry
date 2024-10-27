import React from 'react'

function Call() {
  return (
    <div>
          <section className="relative mt-24 w-[80%] mx-auto h-[400px] md:h-[500px]">
          <img className="w-full h-64 object-cover absolute top-0 left-0 z-0" src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/section_bg01.png" alt="Background" />
          <div className="relative z-10 flex flex-col md:flex-row justify-center align-middle items-center h-58 px-5 md:pt-16 p-4">
            <div className="text-white text-center md:text-left mb-5 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold">Call Us for Service</h1>
              <p className="text-lg md:text-xl pt-1 w-full md:w-[80%]">We deliver the goods to the most complicated places on earth</p>
            </div>
            <div className="mt-6 text-white p-3 w-52 cursor-pointer bg-blue-600 flex justify-center items-center rounded-3xl">
              <img className="w-8 h-8 filter invert brightness-0 contrast-100" src="https://preview.colorlib.com/theme/laundry/assets/img/icon/call.png" alt="Call icon" />
              <button className="pl-5 text-lg">Learn More</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Call
