import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
const TestimonialSlider = () => {

    const images = [
        {
          src: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila1.png",
          alt: "Amazing Laundry Service",
          rating: 4.5,
        },
        {
          src: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila3.png",
          alt: "Fast and Reliable",
          rating: 4,
        },
        {
          src: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila2.png",
          alt: "Best in Town",
          rating: 5,
        },
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const totalImages = images.length;
  
    const nextSlide = () => setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
    const prevSlide = () => setActiveIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  
    const leftIndex = (activeIndex - 1 + totalImages) % totalImages;
    const centerIndex = activeIndex;
    const rightIndex = (activeIndex + 1) % totalImages;
  
    return (
      <section className="container mx-auto  w-[90%] md:w-[80%] lg:w-[80%] relative">
        <div className="flex justify-center items-center">
          <div className="flex justify-between w-full max-w-sm">
            <img className="object-cover w-full rounded-lg scale-90 transition-transform duration-300" src={images[leftIndex].src} alt={images[leftIndex].alt} />
            <img className="object-cover w-full rounded-lg scale-110 transition-transform duration-300" src={images[centerIndex].src} alt={images[centerIndex].alt} />
            <img className="object-cover w-full rounded-lg scale-90 transition-transform duration-300" src={images[rightIndex].src} alt={images[rightIndex].alt} />
          </div>
  
          <button onClick={prevSlide} aria-label="Previous Slide" className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200">&lt;</button>
          <button onClick={nextSlide} aria-label="Next Slide" className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200">&gt;</button>
        </div>
  
        <div className="flex flex-col items-center text-center w-full mt-5">
          <p className="text-lg md:text-sm  w-2/5 lg:text-lg ">
            The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!
          </p>
  
          <div className="flex pt-2 justify-center">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-300 text-lg md:text-xl lg:text-2xl" />
            ))}
          </div>
  
          <p className="text-xl md:text-2xl mt-2">- Rupaya</p>
        </div>
      </section>
    );
  };
  
  export default TestimonialSlider