import React from "react";

function Hero() {
  return (
    <div>
      <main class="bg-gradient-to-r from-blue-100 to-blue-300 relative overflow-hidden h-1/2">
        <div class="bg-gradient-to-r from-blue-100 to-blue-300 flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16 mt-20">
            <div class="sm:w-1/2 lg:w-1/2 flex flex-col relative z-20 mt-10">
              <h1 class="font uppercase text-5xl font-extrabold w-3/4 mb-5 flex flex-col leading-none text-white text-gray-800">
                Start your coding journey today
              </h1>
              <p class="text-lg sm:text-base text-gray-700 text-black w-2/3 ">
                Learn to code from scratch with job-focused courses designed by experts.
              </p>
              <div class="flex mt-8 w-full">

                  <div class="flex rounded-lg shadow-sm">
                    <input
                      type="text"
                      id="email"
                      name="email-button"
                      placeholder="Enter Email"
                      class="py-3 px-4 block w-30 border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <button
                      type="button"
                      class="px-3 w-fit inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 "
                    >
                      Start Learning Today
                    </button>
                  </div>
            
              </div>
            </div>

            <div class="hidden sm:block sm:w-1/3 lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="w-full m-auto rounded-md"
              />
              {/* <CarouselDesign/> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
