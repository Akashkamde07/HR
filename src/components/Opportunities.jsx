import React from 'react';

const Opportunities = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-blue-600">
        Opportunities <span className="text-black">that matches</span>
      </h1>
      <p className="mt-4 text-center text-gray-600">
        Unlock your potential with our career guidance that empower <br />growth and achievement.
      </p>

      <div className="flex flex-col md:flex-row justify-center mt-8 w-full max-w-md space-y-2 md:space-y-0 md:space-x-4">
        <button className="flex-1 border border-gray-300 py-2 px-4">HR Generalist</button>
        <button className="flex-1 border border-gray-300 py-2 px-4">HR Specialist</button>
        <button className="flex-1 border border-gray-300 py-2 px-4">HR Manager</button>
      </div>
      <hr className='border-t border-gray-400 my-5 w-3/6'></hr>
      <div className="mt-8 text-start">
        <p className="text-gray-700">
          HR Generalists manage various HR functions, including recruitment, <br />employee relations, performance management, and compliance with labor laws.
        </p>
        <p className="mt-4 text-gray-800">Avg Salary Package 4-8LPA</p>

        <h3 className="mt-4 text-gray-800">Hiring Companies</h3>
        <div className="flex mt-4">
          <img src="icon1.png" alt="Infosys" className="h-12 mx-3" />
          <img src="icon2.png" alt="TCS" className="h-12 mx-3" />
          <img src="icon3.png" alt="Accenture" className="h-12 mx-3" />
          <img src="icon4.png" alt="IBM" className="h-12 mx-3" />
        </div>
      </div>

      <div className="mt-10 text-center p-2 px-3 bg-slate-100 w-3/6">
        <div className="flex justify-center space-x-2 mb-4">
          <img src="Avatar.png" alt="Profile 1" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
          <img src="Avatar2.png" alt="Profile 2" className="rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" />
          <img src="Avatar3.png" alt="Profile 3" className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
        </div>
        <h3 className="text-xl md:text-lg lg:text-xl">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
          Can’t find the answer you’re looking for? Reach out to us.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Opportunities;
