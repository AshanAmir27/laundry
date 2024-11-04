import React from "react";
import Banner from "./Banner";
import { FaComments } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import blogImg from "../assets/single_blog_1.png";
import blogImg2 from "../assets/single_blog_2.png.webp";
import blogImg3 from "../assets/single_blog_3.png.webp";
import blogImg4 from "../assets/single_blog_4.png.webp";
import blogImg5 from "../assets/single_blog_5.png.webp";

import post1 from "../assets/post_1.png.webp";
import post2 from "../assets/post_2.png.webp";
import post3 from "../assets/post_3.png.webp";
import post4 from "../assets/post_4.png.webp";
import post5 from "../assets/post_5.png.webp";
import post6 from "../assets/post_6.png.webp";
import post7 from "../assets/post_7.png.webp";
import post8 from "../assets/post_8.png.webp";
import post9 from "../assets/post_9.png.webp";
import post10 from "../assets/post_10.png.webp";

function Blog() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Banner heading="Blog" />
      <section className="flex flex-col lg:flex-row w-[90%] lg:w-4/5 gap-3 mt-20 mx-auto" id="Blog">
        
        {/* Left Side - Blog Section */}
        <div className="w-full lg:w-3/5">
          {[blogImg, blogImg2, blogImg3, blogImg4, blogImg5].map((imgSrc, index) => (
            <div className="container w-full shadow-lg rounded-sm py-5 mb-10" key={index}>
              <div className="relative mb-96">
                <img className="h-[361px] w-full rounded-t-sm object-cover" src={imgSrc} alt="" />
                <div className="absolute bottom-[-30px] left-5 sm:left-10 w-16 sm:w-20 cursor-pointer rounded-lg text-center p-2 bg-blue-500 transition-all duration-300 group hover:bg-transparent">
                  <h1 className="text-white group-hover:text-blue-400 text-xl sm:text-2xl">15</h1>
                  <h1 className="text-white group-hover:text-blue-400 text-xl sm:text-2xl">Jan</h1>
                </div>
              </div>
              <div className="mt-[-350px] p-5 sm:p-8">
                <h1 className="text-xl sm:text-2xl font-semibold">Google inks pact for new 35-storey office</h1>
                <p className="leading-7 mt-4">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className="flex items-center text-gray-500 mt-4">
                  <FaUserAlt className="mr-2" />
                  <p>Travel, Lifestyle</p>
                  <span className="px-2">|</span>
                  <FaComments className="mr-2" />
                  <p>03 Comments</p>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="mt-10 flex justify-center space-x-2">
            <button className="border border-slate-200 p-2" onClick={handleClick}><FaAngleLeft /></button>
            <button className="border border-slate-200 px-3" onClick={handleClick}>1</button>
            <button className="border border-slate-200 px-3" onClick={handleClick}>2</button>
            <button className="border border-slate-200 p-2" onClick={handleClick}><FaAngleRight /></button>
          </div>
        </div>

        {/* Right Side - Sidebar Section */}
        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 space-y-10">
          {/* Search */}
          <div className="flex flex-col w-full p-5">
            <input className="w-full mx-auto py-4 pl-4 border border-slate-100" type="text" placeholder="Search Keyword" />
            <button className="w-full mt-1 py-4 mx-auto text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">SEARCH</button>
          </div>

          {/* Categories */}
          <div className="px-5 sm:px-10 lg:px-16">
            <h1 className="text-xl">Category</h1>
            <hr />
            {["Restaurant Food(37)", "Travel News(10)", "Product(11)", "Inspiration(21)", "Modern Technology(3)", "Health Care(09)"].map((category, idx) => (
              <div className="mt-5" key={idx}>
                <a href="/" className="block">{category}</a>
                <hr className="mt-3" />
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="px-5 sm:px-10 lg:px-16">
            <h1 className="text-xl">Recent Post</h1>
            <hr className="mt-5" />
            {[post1, post2, post3, post4].map((img, idx) => (
              <div className="flex mt-5" key={idx}>
                <img src={img} alt="" className="w-16 h-auto" />
                <div className="px-4 py-2">
                  <h1 className="font-semibold">Post Title {idx + 1}</h1>
                  <p className="text-sm">Date or Time</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tag Clouds */}
          <div className="px-5 sm:px-10 lg:px-16">
            <h1 className="text-xl">Tag Clouds</h1>
            <hr className="mt-5" />
            <div className="flex flex-wrap gap-2 mt-5">
              {["project", "love", "technology", "travel", "restaurant", "lifestyle", "design", "illustration"].map((tag, idx) => (
                <button key={idx} className="border border-slate-200 hover:bg-blue-700 hover:text-white transition-all ease-in px-4 py-2">
                  <a href="/">{tag}</a>
                </button>
              ))}
            </div>
          </div>

          {/* Instagram Feeds */}
          <div className="px-5 sm:px-10 lg:px-16">
            <h1 className="text-xl">Instagram Feeds</h1>
            <hr className="mt-5" />
            <div className="grid grid-cols-3 gap-4 mt-5">
              {[post5, post6, post7, post8, post9, post10].map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-20 h-auto" />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="px-5 sm:px-10 lg:px-16">
            <h1 className="text-xl">Newsletter</h1>
            <hr className="mt-5" />
            <div className="flex flex-col w-full mt-5 gap-2">
              <input className="w-full mx-auto py-4 pl-4 border border-slate-100" type="text" placeholder="Enter email" />
              <button className="w-full mt-1 py-4 mx-auto text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
