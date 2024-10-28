import React from "react";
import banner from "../assets/banner.avif";

function Blog() {
  return (
    <>
    <section className="w-full mx-auto ">
      <img className="absolute " src={banner} alt="" />

      <h1 className="relative text-white">Blog</h1>
      
    </section>
    </>
  );
}

export default Blog;
