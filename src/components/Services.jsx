import React from 'react';
import Process from "./Process";
import ServicesOffered from './Servicesoffered';
import Call from './Call'
import TestimonialSlider from './TestimonialSlider';
import Map  from './Map';
function Services() {
  return (
    <section className="py-24 px-5 bg-gray-100 ">
 
 <Process heading="Our Services"/>
 <ServicesOffered/>
<Call/>
<TestimonialSlider/>
<Map/>

    </section>
  );
}

export default Services;
