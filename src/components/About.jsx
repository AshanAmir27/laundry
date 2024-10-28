import React from "react";

import AboutCompany from "./AboutCompany";
import ProcessSubComponent from "./ProcessSubComponent";
import Call from "./Call";
import TestimonialSlider from "./TestimonialSlider";
import Map from "./Map";
import Acheivment from "./Acheivment";
import Banner from "./Banner";
function About() {
  return (
    <section className="bg-gray-100 ">
      <Banner heading="About Us" ProcessSubcomponent={false} />
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
