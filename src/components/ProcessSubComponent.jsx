import React from "react";

function ProcessSubComponent() {
  return (
    <section className="mt-36 w-4/5 mx-auto ">
      <h1 className="bg-blue-100 w-fit px-3 py-1 text-blue-700 mx-auto rounded-3xl">
        Our Process
      </h1>

      <h1 className="text-2xl md:text-3xl text-center mt-4">
        This is how we work
      </h1>

      <div className="container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10 mb-10 ">
        {/* Card 1 */}
        <div className="flex flex-col text-center p-4  ">
          <img
            className="w-full h-32 mx-auto"
            src="https://preview.colorlib.com/theme/laundry/assets/img/icon/services-icon1.svg"
            alt="Service Icon"
          />
          <h1 className="text-xl md:text-2xl pt-2 font-semibold">
            We Collect Your Clothes
          </h1>
          <p className="text-gray-700 m-auto w-4/5 md:w-full">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col text-center p-4 ">
          <img
            className="w-full h-32 mx-auto"
            src="https://preview.colorlib.com/theme/laundry/assets/img/icon/services-icon2.svg"
            alt="Service Icon"
          />
          <h1 className="text-xl md:text-2xl pt-2 font-semibold">
            Wash Your Clothes
          </h1>
          <p className="text-gray-700 m-auto w-4/5 md:w-full">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col text-center p-4  ">
          <img
            className="w-full h-32 mx-auto"
            src="https://preview.colorlib.com/theme/laundry/assets/img/icon/services-icon3.svg"
            alt="Service Icon"
          />
          <h1 className="text-xl md:text-2xl pt-2 font-semibold">
            Get Delivered
          </h1>
          <p className="text-gray-700 m-auto w-4/5 md:w-full">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessSubComponent;
