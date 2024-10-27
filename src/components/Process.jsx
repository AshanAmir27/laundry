import React from "react";
import banner from "../assets/banner.avif";
import ProcessSubComponent from "./ProcessSubComponent";

function Process({ heading, ProcessSubcomponent = true, ProcessBackImage = true }) {
  return (
    <>
      {/* Background Section */}
      <section className="relative w-screen left-1/2 right-1/2 mt-[-15%] md:-mt-[10%] xl:mt-[-1%] -ml-[51vw]  -mr-[50vw] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center">
        {ProcessBackImage && (
          <img
            className="absolute top-0 left-0 w-screen h-full object-cover"
            src={banner}
            alt=""
          />
        )}
        {/* Dynamic Heading */}
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mx-auto ml-[13%]">
          {heading}
        </h1>
      </section>

      {/* Conditional Rendering for ProcessSubComponent */}
      {ProcessSubcomponent && <ProcessSubComponent />}
    </>
  );
}

export default Process;
