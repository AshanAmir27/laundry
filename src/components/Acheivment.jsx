import React from 'react'

const AchievementCard = ({ title, description }) => (
    <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] justify-center items-center text-center">
      <h1 className="text-4xl pt-2 text-blue-400 font-semibold">{title}</h1>
      <p className="text-gray-700 w-4/5">{description}</p>
    </div>
  );
  

function Acheivment() {
  return (
    <div>
         <hr className="mt-52" />
        
        <section className="mt-20 mb-10">
          <h1 className="bg-blue-100 w-fit px-3 py-1 text-blue-700 mx-auto rounded-3xl">Fun Fact</h1>
          <h1 className="text-center text-3xl pt-5">Company Achievement</h1>
          <div className="container mx-auto w-4/5 flex flex-wrap justify-center mt-10 mb-10 gap-5">
            <AchievementCard title="4000" description="The automated process starts as soon as your clothes go into the machine." />
            <AchievementCard title="300+" description="The automated process starts as soon as your clothes go into the machine." />
            <AchievementCard title="95%" description="The automated process starts as soon as your clothes go into the machine." />
          </div>
          <img className="w-4/5 m-auto" src="https://preview.colorlib.com/theme/laundry/assets/img/gallery/company-bg.png" alt="Company Achievement" />
        </section>
    </div>
  )
}

export default Acheivment
