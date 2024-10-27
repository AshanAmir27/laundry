import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from './TestimonialSlider';
import ServicesOffered from './Servicesoffered';
import AboutCompany from "./AboutCompany";
import Process from "./Process";
import Call from './Call'
import Acheivment from "./Acheivment";
import Map from "./Map";





function Home() {
  return (
    <>
      <div>
        <section className="relative h-full">
          <div className="relative h-full w-full">
            <img className="h-[110vh] w-full object-cover" src="https://preview.colorlib.com/theme/laundry/assets/img/hero/h1_hero.png" alt="Laundry Service Hero" />
            <div className="absolute inset-0 h-[110vh] bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-4 sm:px-10 md:px-20 lg:px-44">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 mt-10">Quality Laundry <br /> Service In Your City</h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-5 max-w-md sm:max-w-lg">We take care about cleanness of your clothes</p>
              <a href="/" className="mt-8 sm:mt-10 lg:mt-12 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Explore Services</a>
            </div>
          </div>
        </section>
        
        <Process ProcessBackImage= {false}/>
        <ServicesOffered />
        
        <hr className="mt-10" />
        
     <Call/>

        <TestimonialSlider />
        
        <Acheivment/>

      <AboutCompany/>
       <Map/>
      </div>
    </>
  );
}

export default Home;
