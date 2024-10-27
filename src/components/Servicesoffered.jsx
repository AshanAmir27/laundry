import React from 'react'

function servicesOffered() {
  return (
    <div>
      
      <section className="mt-0 ">
        {/* Section Title */}
        <h1 className="bg-blue-100 w-fit py-1 px-4 text-blue-700 mx-auto rounded-3xl ">
          Services
        </h1>

        <h1 className="text-2xl md:text-3xl text-center mt-4">
          Services We Offer
        </h1>

        {/* Flexbox Container */}
        <div className="container mx-auto w-full md:w-4/5 flex flex-col justify-center mt-10 mb-10 text-white">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center bg-blue-400 ">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2">
              <img
                src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/offers1.png"
                alt="ServiceImage1"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side (Text + Icon) */}
            <div className="flex flex-col w-full md:w-1/2 items-center text-center p-4">
              <img
                className="w-1/5 h-auto mb-4"
                src="https://preview.colorlib.com/theme/laundry/assets/img/icon/offers-icon1.png"
                alt="ServiceIcon1"
              />
              <h1 className="text-xl md:text-2xl pt-2 font-semibold">
                Cloth Laundry
              </h1>
              <p className="text-white w-3/5">
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center bg-blue-400  ">
            {/* Left Side (Text + Icon) */}
            <div className="flex flex-col w-full md:w-1/2 items-center text-center p-4">
              <img
                className="w-1/5 h-auto mb-4"
                src="https://preview.colorlib.com/theme/laundry/assets/img/icon/offers-icon1.png"
                alt="ServiceIcon2"
              />
              <h1 className="text-xl md:text-2xl pt-2 font-semibold">
                Cloth Irony
              </h1>
              <p className="text-white w-3/5">
                The automated process starts as soon as your clothes go into the
                machine. The outcome is gleaming clothes!
              </p>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full md:w-1/2">
              <img
                src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/offers4.png"
                alt="ServiceImage2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default servicesOffered
