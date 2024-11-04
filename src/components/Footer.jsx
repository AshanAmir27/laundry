import React from 'react'
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
function Footer() {
  return (
    <div>
          <section className="mt-36">
  {/* Main Content Section */}
  <div className="flex flex-col lg:flex-row w-4/5 mx-auto px-4 lg:px-0"> {/* Added responsive padding */}
    {/* Logo and Social Links Section */}
    <div className="w-full lg:w-1/3 mb-6 lg:mb-0"> {/* Added margin-bottom for smaller devices */}
      <img
        src="https://preview.colorlib.com/theme/laundry/assets/img/logo/logo2_footer.png"
        alt="Company Logo"
        className="w-32 h-auto" // Adjust image size and maintain aspect ratio
      />
      <p className="mt-8 font-light w-[90%] lg:w-[80%]"> {/* Adjust width for better responsiveness */}
        Suspendisse varius enim in eros elementum tristique. Duis cursus,
        mi quis viverra ornare, eros dolor interdum nulla.
      </p>
      <div className="mt-10 flex">
        <div className="text-xl text-blue-600 bg-slate-200 rounded-2xl mr-3 transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-slate-200 cursor-pointer">
          <FaTwitter className="m-2" />
        </div>
        <div className="text-xl text-blue-600 bg-slate-200 rounded-2xl mr-3 transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-slate-200 cursor-pointer">
          <FaFacebookF className="m-2" />
        </div>
        <div className="text-xl text-blue-600 bg-slate-200 rounded-2xl mr-3 transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-slate-200 cursor-pointer">
          <FaPinterestP className="m-2" />
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="w-full lg:w-1/3 pl-4 lg:pl-24 mb-6 lg:mb-0"> {/* Adjusted padding and margin */}
      <h1 className="font-normal text-2xl text-left">Services</h1>
      <ul className="mt-6">
        {["Dry Cleaning", "Dry Clean", "Ironing Services", "Laundry Service London", "Laundry App"].map((service, index) => (
          <li key={index} className="mt-2 hover:text-blue-200 text-left font-light">
            <a href="/">- {service}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Get in Touch Section */}
    <div className="w-full lg:w-1/3 pt-2 pl-4 lg:pl-28"> {/* Adjusted padding for responsiveness */}
      <h1 className="font-normal text-2xl text-left">Get in touch</h1>
      <p className="mt-6 text-xl text-blue-500 text-left">
        <a href="tel:908987898957">(90) 898 789-8957</a>
      </p>
      <p className="mt-3 text-left">
        <a href="mailto:laundry@567.com">laundry@567.com</a>
      </p>
      <p className="mt-3 text-left">
        <a href="/">789/A, Green road NYC-9089</a>
      </p>
    </div>
  </div>

{/* Footer Background and Copyright */}
<div className="relative mt-16">
  <img
    className="w-full h-auto"
    src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/footer-bg.png"
    alt="Footer Background"
  />
  
  <p className="absolute inset-0 flex justify-center items-center text-center p-4 md:p-6 lg:p-8 font-light text-sm md:text-base lg:text-lg">
    Copyright © 2024 All rights reserved. This template is made with 
    &#10084; by Colorlib
    
  </p>
</div>

</section>
    </div>
  )
}

export default Footer
