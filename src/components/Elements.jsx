import * as React from "react";
import Switch from "@mui/material/Switch";

import Banner from "../components/Banner";

import styles from "../components/Elements.module.css";

import leftImage from "../assets/d.jpg.webp";

import f1 from "../assets/f1.jpg.webp";
import f2 from "../assets/f2.jpg.webp";
import f3 from "../assets/f3.jpg.webp";
import f4 from "../assets/f4.jpg.webp";
import f5 from "../assets/f5.jpg.webp";
import f6 from "../assets/f6.jpg.webp";
import f7 from "../assets/f7.jpg.webp";
import f8 from "../assets/f8.jpg.webp";

import g1 from "../assets/g1.jpg.webp";
import g2 from "../assets/g2.jpg.webp";
import g3 from "../assets/g3.jpg.webp";
import g4 from "../assets/g4.jpg.webp";
import g5 from "../assets/g5.jpg.webp";
import g6 from "../assets/g6.jpg.webp";
import g7 from "../assets/g7.jpg.webp";
import g8 from "../assets/g8.jpg.webp";

function Elements() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className=" ">
      <Banner heading="Elements" />

      <section className="mt-10 w-4/5 mx-auto">
        <h1 className="text-2xl md:text-2xl  ">Text Sample</h1>
        <p className=" leading-7 text-base md:text-md text-justify">
          Every avid independent filmmaker has{" "}
          <span className="font-semibold">Bold</span> about making that{" "}
          <span className="italic mr-1">Italic</span> interest documentary, or
          short film to show off their creative prowess. Many have great ideas
          and want to <span className="text-gray-700">“wow”</span> the
          <sup>Superscript</sup>, or video renters with their big project. But
          once you have the<sub>Subscript</sub> “in the can” (no easy feat), how
          do you move from a <span className="line-through">Strike</span>{" "}
          through of master DVDs with the{" "}
          <span className="underline">“Underline”</span> marked hand-written
          title inside a secondhand CD case, to a pile of cardboard boxes full
          of shiny new, retail-ready DVDs, with UPC barcodes and polywrap
          sitting on your doorstep? You need to create eye-popping artwork and
          have your project replicated. Using a reputable full service DVD
          Replication company like PacificDisc, Inc. to partner with is
          certainly a helpful option to ensure a professional end result, but to
          help with your DVD replication project, here are 4 easy steps to
          follow for good DVD replication results:
        </p>
      </section>

      <section className="mt-24 md:ml-28 mx-auto w-4/5 md:w-3/5 ">
        <div>
          <h1 className="text-2xl ">Sample Buttons</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-5 gap-2">
            <button className="text-sm px-4 py-2">Default</button>
            <button className="bg-blue-950 px-4 text-white hover:bg-transparent hover:text-black hover:border hover:border-blue-950 transition-all ease-in">
              Primary
            </button>
            <button className="px-4 hover:bg-transparent hover:text-cyan-400 text-white bg-cyan-400 hover:border hover:border-cyan-400 transition-all ease-in">
              Success
            </button>
            <button className="hover:bg-transparent hover:text-blue-500 bg-blue-500 text-white px-4 transition-all ease-in">
              Info
            </button>
            <button className="hover:bg-transparent hover:text-yellow-300 hover:border hover:border-yellow-300 bg-yellow-300 text-white px-4 transition-all ease-in">
              Warning
            </button>
            <button className="hover:bg-transparent hover:text-red-500 bg-red-500 text-white px-4 transition-all ease-in">
              Danger
            </button>
            <button className="bg-transparent text-black px-4 transition-all ease-in">
              Link
            </button>
            <button className="text-white px-4 hover:text-black transition-all ease-in">
              Default
            </button>
            <button className="border border-blue-950 text-blue-950 px-4 hover:bg-blue-950 hover:text-white py-2 transition-all ease-in">
              Primary
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 transition-all ease-in">
              Success
            </button>
            <button className="border border-blue-500 hover:bg-blue-500 text-black px-4 transition-all ease-in">
              Info
            </button>
            <button className="border border-yellow-300 hover:bg-yellow-300 hover:text-white text-yellow-300 px-4 transition-all ease-in">
              Warning
            </button>
            <button className="border border-red-500 hover:bg-red-500 hover:text-white text-red-500 px-4 transition-all ease-in">
              Danger
            </button>
            <button className="hover:bg-gray-50 text-black px-4 transition-all ease-in">
              Link
            </button>
          </div>

          {/* Second Button Set */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-10 gap-2">
            <button className="text-sm px-4 py-2 rounded-sm">Default</button>
            <button className="bg-blue-950 px-4 rounded-sm text-white hover:bg-transparent hover:text-black hover:border hover:border-blue-950 transition-all ease-in">
              Primary
            </button>
            <button className="px-4 hover:bg-transparent rounded-sm hover:text-cyan-400 text-white bg-cyan-400 hover:border hover:border-cyan-400 transition-all ease-in">
              Success
            </button>
            <button className="hover:bg-transparent rounded-sm hover:text-blue-500 bg-blue-500 text-white px-4 transition-all ease-in">
              Info
            </button>
            <button className="hover:bg-transparent rounded-sm hover:text-yellow-300 hover:border hover:border-yellow-300 bg-yellow-300 text-white px-4 transition-all ease-in">
              Warning
            </button>
            <button className="hover:bg-transparent rounded-sm hover:text-red-500 bg-red-500 text-white px-4 transition-all ease-in">
              Danger
            </button>
            <button className="bg-transparent text-black px-4 rounded-sm transition-all ease-in">
              Link
            </button>
            <button className="text-white px-4 hover:text-black rounded-sm transition-all ease-in">
              Default
            </button>
            <button className="border border-blue-950 text-blue-950 px-4 rounded-sm hover:bg-blue-950 hover:text-white py-2 transition-all ease-in">
              Primary
            </button>
            <button className="border border-cyan-400 text-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-white px-4 transition-all ease-in">
              Success
            </button>
            <button className="border border-blue-500 hover:bg-blue-500 rounded-sm text-black px-4 transition-all ease-in">
              Info
            </button>
            <button className="border border-yellow-300 hover:bg-yellow-300 rounded-sm hover:text-white text-yellow-300 px-4 transition-all ease-in">
              Warning
            </button>
            <button className="border border-red-500 hover:bg-red-500 hover:text-white rounded-sm text-red-500 px-4 transition-all ease-in">
              Danger
            </button>
            <button className="hover:bg-gray-50 text-black px-4 transition-all ease-in rounded-sm">
              Link
            </button>
          </div>

          {/* Third Button Set */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mt-10 gap-2">
            <button className="text-sm px-4 py-2 rounded-3xl">Default</button>
            <button className="bg-blue-950 px-4 rounded-3xl text-white hover:bg-transparent hover:text-black hover:border hover:border-blue-950 transition-all ease-in">
              Primary
            </button>
            <button className="px-4 hover:bg-transparent rounded-3xl hover:text-cyan-400 text-white bg-cyan-400 hover:border hover:border-cyan-400 transition-all ease-in">
              Success
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-blue-500 bg-blue-500 text-white px-4 transition-all ease-in">
              Info
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-yellow-300 hover:border hover:border-yellow-300 bg-yellow-300 text-white px-4 transition-all ease-in">
              Warning
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-red-500 bg-red-500 text-white px-4 transition-all ease-in">
              Danger
            </button>
            <button className="bg-transparent text-black px-4 rounded-3xl transition-all ease-in">
              Link
            </button>
            <button className="text-white px-4 hover:text-black rounded-3xl transition-all ease-in">
              Default
            </button>
            <button className="border border-blue-950 text-blue-950 px-4 rounded-3xl hover:bg-blue-950 hover:text-white py-2 transition-all ease-in">
              Primary
            </button>
            <button className="border border-cyan-400 text-cyan-400 rounded-3xl hover:bg-cyan-400 hover:text-white px-4 transition-all ease-in">
              Success
            </button>
            <button className="border border-blue-500 hover:bg-blue-500 rounded-3xl text-black px-4 transition-all ease-in">
              Info
            </button>
            <button className="border border-yellow-300 hover:bg-yellow-300 rounded-3xl hover:text-white text-yellow-300 px-4 transition-all ease-in">
              Warning
            </button>
            <button className="border border-red-500 hover:bg-red-500 hover:text-white rounded-3xl text-red-500 px-4 transition-all ease-in">
              Danger
            </button>
            <button className="hover:bg-gray-50 text-black px-4 transition-all ease-in rounded-3xl">
              Link
            </button>
          </div>

          {/* Fourth Button Set */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-2">
            <button className="text-sm px-4 py-2 rounded-3xl">Default</button>
            <button className="bg-blue-950 px-4 rounded-3xl text-white hover:bg-transparent hover:text-black hover:border hover:border-blue-950 transition-all ease-in">
              Primary
            </button>
            <button className="px-4 hover:bg-transparent rounded-3xl hover:text-cyan-400 text-white bg-cyan-400 hover:border hover:border-cyan-400 transition-all ease-in">
              Success
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-blue-500 bg-blue-500 text-white px-4 transition-all ease-in">
              Info
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-yellow-300 hover:border hover:border-yellow-300 bg-yellow-300 text-white px-4 transition-all ease-in">
              Warning
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-red-500 bg-red-500 text-white px-4 transition-all ease-in">
              Danger
            </button>
          </div>

          {/* Fifth Button Set */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-2">
            <button className="text-sm px-4 py-2 rounded-3xl">Default</button>
            <button className="bg-blue-950 px-4 rounded-3xl text-white hover:bg-transparent hover:text-black hover:border hover:border-blue-950 transition-all ease-in">
              Primary
            </button>
            <button className="px-4 hover:bg-transparent rounded-3xl hover:text-cyan-400 text-white bg-cyan-400 hover:border hover:border-cyan-400 transition-all ease-in">
              Success
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-blue-500 bg-blue-500 text-white px-4 transition-all ease-in">
              Info
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-yellow-300 hover:border hover:border-yellow-300 bg-yellow-300 text-white px-4 transition-all ease-in">
              Warning
            </button>
            <button className="hover:bg-transparent rounded-3xl hover:text-red-500 bg-red-500 text-white px-4 transition-all ease-in">
              Danger
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="w-4/5 md:w-4/5 mx-auto mt-20">
          <h1 className="text-xl">Left Aligned</h1>
          <div className="flex flex-col md:flex-row mt-5">
            <img
              src={leftImage}
              alt=""
              className="w-full md:w-2/5 h-auto md:h-2/5"
            />
            <p className="pl-0 md:pl-5 leading-8 text-md">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
          </div>
        </div>

        <div className="w-4/5 md:w-4/5 mx-auto mt-20">
  <h1 className="text-xl text-right ">Right Aligned</h1>
  <div className="flex flex-col-reverse md:flex-row-reverse items-center  md:space-x-6">
    <img
      src={leftImage}
      alt="Description-of-image"
      className="w-full md:w-2/5 h-auto md:h-2/5 md:mt-[-20%]"
    />
    <div className="text-right px-2 md:px-5 pt-10 leading-8 text-md">
      <p>
        Over time, even the most sophisticated, memory-packed computer can
        begin to run slow if we don’t do something to prevent it. The reason
        why has less to do with how computers are made and how they age and
        more to do with the way we use them. You see, all of the daily tasks
        that we do on our PC from running programs to downloading and deleting
        software can make our computer sluggish. To keep this from happening,
        you need to understand the reasons why your PC is getting slower and
        do something to keep your PC running at its best. You can do this
        through regular maintenance and PC performance optimization programs.
      </p>
      <p className="mt-4">
        Before we discuss all of the things that could be affecting your
        PC’s performance, let’s talk a little about what symptoms.
      </p>
    </div>
  </div>
</div>

      </section>

      <section className="mt-10 mx-auto w-11/12 md:w-4/5">
        <h1 className="font-semibold text-lg">Definition</h1>

        <div className="flex flex-col md:flex-row mt-5 gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="font-semibold">Definition 01</h2>
            <p className="mt-4">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks...
            </p>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold">Definition 02</h2>
            <p className="mt-4">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks...
            </p>
          </div>

          <div className="flex-1">
            <h2 className="font-semibold">Definition 03</h2>
            <p className="mt-4">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks...
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-auto w-4/5">
        <h1 className="font-normal text-lg">Block Quotes</h1>

        <div className="mt-5 border-l-2 border-l-gray-900 p-5">
          <p>
            “Recently, the US Federal government banned online casinos from
            operating in America by making it illegal to transfer money to them
            through any US bank or payment system. As a result of this law, most
            of the popular online casino networks such as Party Gaming and
            PlayTech left the United States. Overnight, online casino players
            found themselves being chased by the Federal government. But, after
            a fortnight, the online casino industry came up with a solution and
            new online casinos started taking root. These began to operate under
            a different business umbrella, and by doing that, rendered the
            transfer of money to and from them legal. A major part of this was
            enlisting electronic banking systems that would accept this new
            clarification and start doing business with me. Listed in this
            article are the electronic banking”
          </p>
        </div>
      </section>

      <section className="mt-10 mx-auto w-11/12 md:w-4/5">
  <h1 className="font-normal text-lg text-center md:text-left">Table</h1>
  <div className="p-5 bg-gray-50 overflow-x-auto">
    <table className="w-full text-sm md:text-base">
      <thead>
        <tr className="text-left md:text-center">
          <th className="py-2 px-1 md:px-4 text-blue-800">#</th>
          <th className="py-2 px-1 md:px-4 font-normal text-blue-800">COUNTRIES</th>
          <th className="py-2 px-1 md:px-4 font-normal text-blue-800">VISITS</th>
          <th className="py-2 px-1 md:px-4 text-left font-normal text-blue-800">PERCENTAGES</th>
        </tr>
      </thead>
      <tbody className="text-center md:text-left">
        {[
          { num: "01", img: f1, percentage: 20, color: "border-blue-600" },
          { num: "02", img: f2, percentage: 50, color: "border-red-600" },
          { num: "03", img: f3, percentage: 50, color: "border-orange-600" },
          { num: "04", img: f4, percentage: 80, color: "border-green-600" },
          { num: "05", img: f5, percentage: 70, color: "border-purple-600" },
          { num: "06", img: f6, percentage: 10, color: "border-yellow-600" },
          { num: "07", img: f7, percentage: 40, color: "border-pink-600" },
          { num: "08", img: f8, percentage: 20, color: "border-red-600" },
        ].map(({ num, img, percentage, color }) => (
          <tr key={num} className="border-b border-gray-200">
            <td className="py-4 px-1 md:px-4">{num}</td>
            <td className="flex items-center justify-center md:justify-start py-4 px-1 md:px-4 space-x-2">
              <img src={img} alt="" className="w-6 h-6 md:w-8 md:h-8" />
              <span>Canada</span>
            </td>
            <td className="py-4 px-1 md:px-4">645032</td>
            <td className="py-4 px-1 md:px-4">
              <div className="relative w-full h-3 bg-gray-200 rounded">
                <div
                  className={`absolute top-0 left-0 h-full ${color}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      <section className="w-4/5 mx-auto mt-10">
        <h1 className="text-xl">Image Gallery</h1>

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          <img src={g1} alt="" className="w-full h-[230px] object-cover" />
          <img src={g2} alt="" className="w-full h-[230px] object-cover" />
          <img src={g3} alt="" className="w-full h-[230px] object-cover" />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-5">
          <img
            src={g4}
            alt=""
            className="w-full md:w-1/2 h-[250px] object-cover mb-5 md:mb-0"
          />
          <img
            src={g5}
            alt=""
            className="w-full md:w-1/2 h-[250px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          <img src={g6} alt="" className="w-full h-[230px] object-cover" />
          <img src={g7} alt="" className="w-full h-[230px] object-cover" />
          <img src={g8} alt="" className="w-full h-[230px] object-cover" />
        </div>
      </section>

      <section className="w-4/5 mx-auto mt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          <h1 className="text-lg">Image Gallery</h1>
          <h1 className="text-2xl text-gray-400">This is header 01</h1>
          <h1 className="text-xl text-gray-400">This is header 02</h1>
          <h1 className="text-lg text-gray-400">This is header 03</h1>
          <h1 className="text-md text-gray-400">This is header 04</h1>
          <h1 className="text-sm text-gray-400">This is header 05</h1>
          <h1 className="text-[12px] text-gray-400">This is header 06</h1>
        </div>

        <div className="w-full md:w-1/3 mb-5 md:mb-0">
          <h1 className="text-lg">Unordered List</h1>
          <ul className={`list-[circle] ${styles["custom-marker-size"]} && ` } >
            <li>Fta Keys</li>
            <li>For Women Only Your Computer Usage</li>
            <li>
              Facts Why Inkjet Printing Is Very Appealing
              <ul className={`list-[circle] ${styles["nested-marker-size"]}`}>
                <li>
                  Addiction When Gambling Becomes
                  <ul
                    className={`list-[circle] ${styles["nested-marker-size"]}`}
                  >
                    <li>Protective Preventative Maintenance</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Dealing With Technical Support 10 Useful Tips</li>
            <li>Make Myspace Your Best Designed Space</li>
            <li>Cleaning And Organizing Your Computer</li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h1 className="text-lg">Ordered List with Alphabet Bullets</h1>
          <ol className={`list-[decimal] ${styles["custom-marker-size2"]}`}>
            <li>Fta Keys</li>
            <li>For Women Only Your Computer Usage</li>
            <li>
              Facts Why Inkjet Printing Is Very Appealing
              <ol className="list-[upper-alpha] ml-6">
                <li>
                  Addiction When Gambling Becomes
                  <ol className="list-[lower-roman] ml-6">
                    <li>Protective Preventative Maintenance</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Dealing With Technical Support 10 Useful Tips</li>
            <li>Make Myspace Your Best Designed Space</li>
            <li>Cleaning And Organizing Your Computer</li>
          </ol>
        </div>
      </section>

      <section className="md:flex mt-10 w-4/5 mx-auto ">
        <div className="w-full">
          <h1 className="text-xl">Form Elements</h1>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Full Name"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Address"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <select
              name=""
              id=""
              className="w-full pl-3 py-2 mt-2 bg-gray-100 pr-3"
            >
              <option value="">City</option>
              <option value="">Dhaka</option>
              <option value="">Dilli</option>
              <option value="">Newyork</option>
              <option value="">Islamabad</option>
              <option value="">Karachi</option>
            </select>
            <select
              name=""
              id=""
              className="w-full pl-3 py-2 mt-2 bg-gray-100 pr-3"
            >
              <option value="">Country</option>
              <option value="">Bangladesh</option>
              <option value="">India</option>
              <option value="">England</option>
              <option value="">Sirilanka</option>
              <option value="">Pakistan</option>
            </select>
            <textarea
              name=""
              id=""
              placeholder="Message"
              rows={4}
              className="pl-3 w-full py-2 mt-2 bg-gray-100"
            ></textarea>
            <input
              type="text"
              name=""
              id=""
              placeholder="Primary Color"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Accent Color"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Secondary Color"
              className="w-full pl-3 py-2 mt-2 bg-gray-100"
            />
          </form>
        </div>

        <div className="w-full pl-5 mt-16 md:mt-0 md:w-3/5 ">
          <h1 className="text-xl">Switches</h1>
          <ol className={`list-[decimal]  ${styles["switch"]} `}>
            <li className="flex items-center mb-2 flex-row-reverse justify-between  w-4/5">
              <label>
                <Switch {...label} defaultChecked color="red" />
              </label>
              <span>Sample Switch</span>
            </li>
            <li className="flex items-center mb-2 flex-row-reverse justify-between w-4/5">
              <Switch {...label} defaultChecked />
              <span>Primary Color Switch</span>
            </li>

            <li className="flex items-center mb-2 flex-row-reverse justify-between w-4/5">
              <Switch {...label} defaultChecked />
              Confirm Color Switch
            </li>
          </ol>

          <h1 className="mt-5 text-lg">Selectboxes</h1>
          <select
            name=""
            id=""
            className="w-4/5 p-1 text-sm text-gray-500 mt-4"
          >
            <option value="">English</option>
            <option value="">Spanish</option>
            <option value="">Arabic</option>
            <option value="">Portuguise</option>
            <option value="">Bangali</option>
          </select>

          <h1 className="mt-5 text-lg">Checkboxes</h1>
          <div className="flex mt-4 w-full">
            <ul
              className={`list-[decimal] ${styles["switch"]} flex flex-col w-4/5`}
            >
              <li className= {` flex items-center mb-2 flex-row-reverse justify-between `}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.customCheckbox}></span>
                </label>
                <span>Sample Checkbox</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.customCheckbox}></span>
                </label>
                <span>Primary Color Checkbox</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.customCheckbox}></span>
                </label>
                <span>Confirm Color Checkbox</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    disabled
                    className={`${styles.checkbox} cursor-not-allowed`}
                  />
                  <span className={styles.customCheckbox}></span>
                </label>
                <span>Disabled Checkbox</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    disabled
                    checked
                    className={`${styles.checkbox} cursor-not-allowed`}
                  />
                  <span className={styles.customCheckbox}></span>
                </label>
                <span>Disabled Checkbox active</span>
              </li>
            </ul>
          </div>

          <h1 className="mt-10 text-xl">Radio Buttons</h1>
          <div className="flex mt-4">
            <ul
              className={`list-[decimal] ${styles["switch"]} flex flex-col w-4/5`}
            >
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.RadioLabel}>
                  <input
                    type="radio"
                    name="sample" // Use a name attribute to group radio buttons
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                </label>
                <span>Sample Radio</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.RadioLabel}>
                  <input
                    type="radio"
                    name="color" // Use a name attribute to group radio buttons
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                </label>
                <span>Primary Color Radio</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.RadioLabel}>
                  <input
                    type="radio"
                    name="confirm" // Use a name attribute to group radio buttons
                    className={styles.radioBlack}
                  />
                  <span className={styles.customRadio}></span>
                </label>
                <span>Confirm Color Radio</span>
              </li>

              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.RadioLabel}>
                  <input
                    type="radio"
                    disabled
                    className={`${styles.radioInput} cursor-not-allowed`}
                  />
                  <span className={styles.customRadio}></span>
                </label>
                <span>Disabled Radio</span>
              </li>
              <li className="flex items-center mb-2 flex-row-reverse justify-between">
                <label className={styles.RadioLabel}>
                  <input
                    type="radio"
                    disabled
                    className={`${styles.radioInput} cursor-not-allowed`}
                  />
                  <span className={styles.customRadio}></span>
                </label>
                <span>Disabled Radio active</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Elements;
