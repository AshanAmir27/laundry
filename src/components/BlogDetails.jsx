import React, { useState } from "react";
import Banner from "./Banner";
import { FaComments } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import blogImg from "../assets/single_blog_1.png";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import next from "../assets/next.png.webp";
import prev from "../assets/preview.png.webp";
import auther from "../assets/author.png.webp";
import comment1 from "../assets/comment_1.png.webp";
import comment2 from "../assets/comment_2.png.webp";
import comment3 from "../assets/comment_3.png.webp";
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

function BlogDetails() {
  // const handleClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const [hovered, setHovered] = useState(null);

  return (
    <>
      <Banner heading="Blog Details" />
      <section
        className="flex flex-col lg:flex-row w-[90%] lg:w-4/5 gap-3 mt-20 mx-auto"
        id="Blog"
      >
        {/* Left Side - Blog Section */}
        <div className="w-full lg:w-4/5">
          {[blogImg].map((imgSrc, index) => (
            <div className="container w-full rounded-sm py-5 mb-10" key={index}>
              <div className="relative mb-96">
                <img
                  className="h-[361px] w-full rounded-t-sm object-cover"
                  src={imgSrc}
                  alt=""
                />
              </div>
              <div className="mt-[-350px] p-5 sm:p-8">
                <h1 className="text-xl sm:text-2xl font-semibold">
                  Second divided from form fish beast made every of seas all
                  gathered us saying he our
                </h1>
                <div className="flex items-center text-gray-500 mt-4">
                  <FaUserAlt className="mr-2" />
                  <p>Travel, Lifestyle</p>
                  <span className="px-2">|</span>
                  <FaComments className="mr-2" />
                  <p>03 Comments</p>
                </div>
                <p className="leading-7 mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p className="leading-7 mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>

                <div className="bg-gray-100 p-5">
                  <p className="border-l-2 border-gray-500 bg-white p-5">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </p>
                </div>
                <p className="leading-7 mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p className="leading-7 mt-4">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>

                <div className="flex justify-between">
                  <div className="flex mt-10">
                    <FaHeart className="mt-1 mr-2" />

                    <p>Lily and 4 people like this</p>
                  </div>

                  <div className="flex mt-10 space-x-2">
                    <FaFacebookF className="text-gray-400" />
                    <FaTwitter className="text-gray-400" />
                    <FaInstagram className="text-gray-400" />
                    <FaBehance className="text-gray-400" />
                  </div>
                </div>
                <div className="mt-10 flex justify-between">
                  {/* Prev Post Section */}
                  <div
                    className="flex mt-5 cursor-pointer relative items-center"
                    onMouseEnter={() => setHovered("prev")}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative">
                      <img
                        src={prev}
                        alt="prev"
                        className="w-24 h-20 object-cover"
                      />
                      {hovered === "prev" && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                          <FaAngleLeft className="text-3xl text-white" />
                        </div>
                      )}
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-500 text-lg">Prev Post</p>
                      <p className="text-xl font-normal">
                        Space The Final Frontier
                      </p>
                    </div>
                  </div>

                  {/* Next Post Section */}
                  <div
                    className="flex mt-5 cursor-pointer relative items-center"
                    onMouseEnter={() => setHovered("next")}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="pr-4 text-right">
                      <p className="text-gray-500 text-lg">Next Post</p>
                      <p className="text-xl font-normal">
                        Exploring the Cosmos
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src={next}
                        alt="next"
                        className="w-24 h-20 object-cover"
                      />
                      {hovered === "next" && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                          <FaAngleRight className="text-3xl text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex w-full mx-auto mt-16 bg-gray-50 p-5">
                  <img src={auther} alt="" className="object-contain"/>
                  <div className="pl-5">
                    <h1 className="text-lg">Harvard milan</h1>
                    <p className="leading-0 ">
                      Second divided from form fish beast made. Every of seas
                      all gathered use saying you're, he our dominion twon
                      Second divided from
                    </p>
                  </div>
                </div>

                <hr className="mt-20" />

                <div className="m-[-32px] w-4/5 mx-auto">
                  <h1 className="text-lg">05 Comments</h1>

                  {/* Comment Container */}
                  <div className="flex flex-col space-y-16 mt-16 w-4/5 mx-auto">
                    <div className="flex w-full mx-auto items-start">
                      <img
                        src={comment1}
                        alt=""
                        className="w-1/5 h-[100px] object-contain md:w-1/4 lg:w-1/5"
                      />
                      <div className="pl-5 flex-2">
                        <p className="leading-7 text-gray-500 text-sm md:text-base lg:text-lg">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser.
                        </p>

                        <div className="flex mt-2 justify-between w-full md:w-4/5">
                          <div className="flex items-center">
                            <a href="/" className="hover:text-blue-400">
                              <h1 className="text-md md:text-lg lg:text-xl">
                                Emilly Blunt
                              </h1>
                            </a>
                            <label className="pt-0 pl-5 text-gray-500 text-xs md:text-sm lg:text-base">
                              December 4, 2017 at 3:12 pm
                            </label>
                          </div>
                          <div>
                            <a
                              href="/"
                              className="text-gray-500 text-xs md:text-sm lg:text-base"
                            >
                              <h1>Reply</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full mx-auto items-start">
                      <img
                        src={comment2}
                        alt=""
                        className="w-1/5 h-[100px] object-contain md:w-1/4 lg:w-1/5"
                      />
                      <div className="pl-5 flex-1">
                        <p className="leading-7 text-gray-500 text-sm md:text-base lg:text-lg">
                          Second divided from form fish beast made. Every of
                          seas all gathered use saying you're, he our dominion
                          twon Second divided from.
                        </p>

                        <div className="flex mt-2 justify-between w-full md:w-4/5">
                          <div className="flex items-center">
                            <a href="/" className="hover:text-blue-400">
                              <h1 className="text-md md:text-lg lg:text-xl">
                                Emilly Blunt
                              </h1>
                            </a>
                            <label className="pt-0 pl-5 text-gray-500 text-xs md:text-sm lg:text-base">
                              December 4, 2017 at 3:12 pm
                            </label>
                          </div>
                          <div>
                            <a
                              href="/"
                              className="text-gray-500 text-xs md:text-sm lg:text-base"
                            >
                              <h1>Reply</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full mx-auto items-start">
                      <img
                        src={comment3}
                        alt=""
                        className="w-1/5 h-[100px] object-contain md:w-1/4 lg:w-1/5"
                      />
                      <div className="pl-5 flex-1">
                        <p className="leading-7 text-gray-500 text-sm md:text-base lg:text-lg">
                          Second divided from form fish beast made. Every of
                          seas all gathered use saying you're, he our dominion
                          twon Second divided from.
                        </p>

                        <div className="flex mt-2 justify-between w-full md:w-4/5">
                          <div className="flex items-center">
                            <a href="/" className="hover:text-blue-400">
                              <h1 className="text-md md:text-lg lg:text-xl">
                                Emilly Blunt
                              </h1>
                            </a>
                            <label className="pt-0 pl-5 text-gray-500 text-xs md:text-sm lg:text-base">
                              December 4, 2017 at 3:12 pm
                            </label>
                          </div>
                          <div>
                            <a
                              href="/"
                              className="text-gray-500 text-xs md:text-sm lg:text-base"
                            >
                              <h1>Reply</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="mt-28" />
              </div>
            </div>
          ))}

          {/* Contact Form */}
          <div className="mt-10 w-4/5 mx-auto">
            <h1 className="text-xl">Leave a Reply</h1>
            <form action="">
              <textarea
                name=""
                id=""
                rows={8}
                placeholder="Write Comment"
                className="mt-5 w-full border pl-2  border-gray-400"
              ></textarea>

<div className="mt-2 flex flex-col lg:flex-row lg:space-x-6">
  <input
    type="text"
    className="w-full p-2 pl-3 border border-slate-300"
    placeholder="Name"
  />
  <input
    type="text"
    className="w-full mt-4 lg:mt-0 p-2 pl-3 border border-slate-300"
    placeholder="Email"
  />
</div>


              <input
                type="text"
                className="p-2 mt-2 pl-3 w-full border border-slate-300"
                placeholder="Website"
              />

              <button className="mt-5 border border-blue-400 px-10 py-4 font-light hover:bg-blue-500 hover:text-white">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Sidebar Section */}
        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 space-y-10">
          {/* Search */}
          <div className="flex flex-col w-full md:w-4/5 md:mx-auto p-5">
            <input
              className="w-full mx-auto py-4 pl-4 border border-slate-100"
              type="text"
              placeholder="Search Keyword"
            />
            <button className="w-full mt-1 py-4 mx-auto text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">
              SEARCH
            </button>
          </div>

          {/* Categories */}
          <div className=" sm:px-10 w-4/5 mx-auto">
            <h1 className="text-xl">Category</h1>
            <hr />
            {[
              "Restaurant Food(37)",
              "Travel News(10)",
              "Product(11)",
              "Inspiration(21)",
              "Modern Technology(3)",
              "Health Care(09)",
            ].map((category, idx) => (
              <div className="mt-5 " key={idx}>
                <a href="/" className="block">
                  {category}
                </a>
                <hr className="mt-3" />
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="px-5 sm:px-10 ">
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
          <div className="px-5 sm:px-10 ">
            <h1 className="text-xl">Tag Clouds</h1>
            <hr className="mt-5" />
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "project",
                "love",
                "technology",
                "travel",
                "restaurant",
                "lifestyle",
                "design",
                "illustration",
              ].map((tag, idx) => (
                <button
                  key={idx}
                  className="border border-slate-200 hover:bg-blue-700 hover:text-white transition-all ease-in px-4 py-2"
                >
                  <a href="/">{tag}</a>
                </button>
              ))}
            </div>
          </div>

          {/* Instagram Feeds */}
          <div className="px-5 sm:px-10 ">
            <h1 className="text-xl">Instagram Feeds</h1>
            <hr className="mt-5" />
            <div className="grid grid-cols-3 gap-4 mt-5">
              {[post5, post6, post7, post8, post9, post10].map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-20 h-auto" />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="px-5 sm:px-10 ">
            <h1 className="text-xl">Newsletter</h1>
            <hr className="mt-5" />
            <div className="flex flex-col w-full mt-5 gap-2">
              <input
                className="w-full mx-auto py-4 pl-4 border border-slate-100"
                type="text"
                placeholder="Enter email"
              />
              <button className="w-full mt-1 py-4 mx-auto text-blue-400 border border-blue-400 hover:bg-blue-500 hover:text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetails;
