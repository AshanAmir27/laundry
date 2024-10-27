import React from "react";
import banner from "../assets/banner.avif";
import { HiOutlineHome } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <div>
      {/* Banner Section */}
      <section className="w-full relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center pl-5 md:pl-5 lg:pl-40  mt-0">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          alt=""
        />
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Contact Us
        </h1>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-11/12 lg:w-4/5 mx-auto pt-10 flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="lg:w-3/5">
          <h1 className="text-2xl font-semibold">Get in Touch</h1>
          <form>
            <textarea
              name="userMessage"
              rows={6}
              className="placeholder:text-slate-400 mt-6 block w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none sm:text-sm resize-none"
              placeholder="Your message..."
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-slate-300 w-full sm:w-1/2"
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="p-2 border border-slate-300 w-full sm:w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Subject"
              className="p-2 border border-slate-300 mt-5 w-full"
            />
            <button
              type="submit"
              className="w-full sm:w-auto border border-blue-300 text-md px-10 py-3 mt-6 hover:bg-blue-400 hover:text-white transition ease-in font-light"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="lg:w-2/5  p-5 flex flex-col">
          <div className="flex items-start mt-6">
            <HiOutlineHome className="text-3xl text-blue-500" />
            <label className="pl-3">
              <span className="font-semibold">Address:</span> Buttonwood,
              California. <br />
              <span className="text-gray-400">Rosemead, CA 91770</span>
            </label>
          </div>
          <div className="flex items-start mt-10">
            <FaTabletAlt className="text-3xl text-blue-500" />
            <label className="pl-3">
              <span className="font-semibold">Phone:</span> +1 253 565 2365
              <br />
              <span className="text-gray-400">Mon to Fri 9am to 6pm</span>
            </label>
          </div>
          <div className="flex items-start mt-10">
            <MdOutlineMail className="text-3xl text-blue-500" />
            <label className="pl-3">
              <span className="font-semibold">Email:</span>{" "}
              support@colorlib.com <br />
              <span className="text-gray-400">Send us your query anytime!</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
