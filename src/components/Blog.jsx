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
function Blog() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Banner heading="Blog" />

      <section className="flex w-4/5 gap-3 mt-20 mx-auto" id="Blog">
        <div className="w-3/5">
          <div className="container w-full shadow-lg rounded-sm">
            <div className="relative mb-96">
              <img
                className="h-[361px] w-full rounded-t-sm"
                src={blogImg}
                alt=""
              />
              <div className="absolute bottom-[-30px] left-10  w-20 cursor-pointer rounded-lg text-center p-2 bg-blue-500 transition-all duration-300 group hover:bg-transparent">
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  15
                </h1>
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  Jan
                </h1>
              </div>
            </div>
            <div className="mt-[-350px]">
              <h1 className="text-2xl pt-8 pl-8 font-semibold">
                Google inks pact for new 35-storey office
              </h1>
              <p className="w-4/5 pl-8 pt-4 leading-7">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="flex pl-8 pt-4 pb-5 text-gray-500">
                <FaUserAlt className="mt-1" />
                <p> Travel, Lifestyle</p>
                <span className="px-2">|</span>
                <FaComments className="mt-1" />
                <p className="pl-2"> 03 Comments</p>
              </div>
            </div>
          </div>
          <div className="container w-full shadow-lg rounded-sm py-5">
            <div className="relative mb-96">
              <img
                className="h-[361px] w-full rounded-t-sm"
                src={blogImg2}
                alt=""
              />
              <div className="absolute bottom-[-30px] cursor-pointer left-10 rounded-lg w-20 text-center p-2 bg-blue-500 transition-all duration-300 group hover:bg-transparent">
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  15
                </h1>
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  Jan
                </h1>
              </div>
            </div>
            <div className="mt-[-350px]">
              <h1 className="text-2xl pt-8 pl-8 font-semibold">
                Google inks pact for new 35-storey office
              </h1>
              <p className="w-4/5 pl-8 pt-4 leading-7">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="flex pl-8 pt-4 pb-5 text-gray-500">
                <FaUserAlt className="mt-1" />
                <p> Travel, Lifestyle</p>
                <span className="px-2">|</span>
                <FaComments className="mt-1" />
                <p className="pl-2"> 03 Comments</p>
              </div>
            </div>
          </div>
          <div className="container w-full shadow-lg rounded-sm py-5">
            <div className="relative mb-96">
              <img
                className="h-[361px] w-full rounded-t-sm"
                src={blogImg3}
                alt=""
              />
              <div className="absolute bottom-[-30px] left-10  w-20 text-center p-2 rounded-lg bg-blue-500 cursor-pointer transition-all duration-300 group hover:bg-transparent">
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  15
                </h1>
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  Jan
                </h1>
              </div>
            </div>
            <div className="mt-[-350px]">
              <h1 className="text-2xl pt-8 pl-8 font-semibold">
                Google inks pact for new 35-storey office
              </h1>
              <p className="w-4/5 pl-8 pt-4 leading-7">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="flex pl-8 pt-4 pb-5 text-gray-500">
                <FaUserAlt className="mt-1" />
                <p> Travel, Lifestyle</p>
                <span className="px-2">|</span>
                <FaComments className="mt-1" />
                <p className="pl-2"> 03 Comments</p>
              </div>
            </div>
          </div>
          <div className="container w-full shadow-lg rounded-sm py-5">
            <div className="relative mb-96">
              <img
                className="h-[361px] w-full rounded-t-sm"
                src={blogImg5}
                alt=""
              />
              <div className="absolute bottom-[-30px] left-10 rounded-lg w-20 text-center p-2 bg-blue-500 transition-all duration-300 group hover:bg-transparent cursor-pointer">
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  15
                </h1>
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  Jan
                </h1>
              </div>
            </div>
            <div className="mt-[-350px]">
              <h1 className="text-2xl pt-8 pl-8 font-semibold">
                Google inks pact for new 35-storey office
              </h1>
              <p className="w-4/5 pl-8 pt-4 leading-7">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="flex pl-8 pt-4 pb-5 text-gray-500">
                <FaUserAlt className="mt-1" />
                <p> Travel, Lifestyle</p>
                <span className="px-2">|</span>
                <FaComments className="mt-1" />
                <p className="pl-2"> 03 Comments</p>
              </div>
            </div>
          </div>
          <div className="container w-full shadow-lg rounded-sm py-5">
            <div className="relative mb-96">
              <img
                className="h-[361px] w-full rounded-t-sm"
                src={blogImg4}
                alt=""
              />
              <div className="absolute bottom-[-30px] left-10 rounded-lg w-20 text-center p-2 bg-blue-500 transition-all duration-300 group hover:bg-transparent cursor-pointer">
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  15
                </h1>
                <h1 className="text-white group-hover:text-blue-400 text-2xl">
                  Jan
                </h1>
              </div>
            </div>
            <div className="mt-[-350px]">
              <h1 className="text-2xl pt-8 pl-8 font-semibold">
                Google inks pact for new 35-storey office
              </h1>
              <p className="w-4/5 pl-8 pt-4 leading-7">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="flex pl-8 pt-4 pb-5 text-gray-500">
                <FaUserAlt className="mt-1" />
                <p> Travel, Lifestyle</p>
                <span className="px-2">|</span>
                <FaComments className="mt-1" />
                <p className="pl-2"> 03 Comments</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center space-x-2">
            <button
              className="border border-slate-200 p-2 "
              onClick={handleClick}
            >
              <FaAngleLeft />
            </button>
            <button
              className="border border-slate-200 px-3 "
              onClick={handleClick}
            >
              1
            </button>
            <button
              className="border border-slate-200 px-3"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="border border-slate-200 p-2 "
              onClick={handleClick}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="w-2/5">

            <div className="flex flex-col  w-full p-5">
              <input className="w-4/5 mx-auto py-4 pl-4 border border-slate-100" type="text" placeholder="Search Keyword"/>

              <button className="w-4/5 mt-1 py-4 mx-auto text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">SEARCH</button>
            </div>

        </div>

        <div>
          <h1>Category</h1>
          <hr />
          
        </div>
      </section>
    </>
  );
}

export default Blog;
