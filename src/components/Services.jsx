import React from 'react';
import Process from "./Process";
import ServicesOffered from './Servicesoffered';
import Call from './Call'
import Banner from './Banner';
import TestimonialSlider from './TestimonialSlider';
import Map  from './Map';
function Services() {
  return (
    <section className="  bg-gray-100 ">
 <Banner heading="Services"/>
 <Process heading="Our Services"/>
 <ServicesOffered/>
<Call/>
<TestimonialSlider/>
<Map/>

    </section>
  );
}

export default Services;
