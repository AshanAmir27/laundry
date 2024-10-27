import React from "react";
import Process from "./Process";
import AboutCompany from "./AboutCompany";
import ProcessSubComponent from "./ProcessSubComponent";
import Call from "./Call";
import TestimonialSlider from "./TestimonialSlider";
import Map from "./Map";
import Acheivment from "./Acheivment";
function About() {
  return (
    <section className="py-24 px-5 bg-gray-100 ">
      <Process heading="About Us" ProcessSubcomponent={false} />
      <AboutCompany />
      <ProcessSubComponent/>
      <Call />
      <TestimonialSlider />
<Acheivment/>

      <Map />
    </section>
  );
}

export default About;
