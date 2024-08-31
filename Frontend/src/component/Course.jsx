import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useScrollToTop from "../customhooks/UseScrollTop";


function Course() {

    useScrollToTop();

  const location = useLocation();
  const {course} = location.state || {};


  console.log(course);
  


  return (
    <div>
      <main class="bg-white relative overflow-hidden h-full">

        
        <div class="bg-white flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-1/2 flex flex-col relative z-20">
              <div class="text-6xl sm:text-4xl font-black flex flex-col leading-none  text-gray-800">
                <div className="flex flex-row gap-5 mb-5">
                  <img
                    className="w-14"
                    src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  />
                  <h2 className="items-center justify-center">
                    {course.courseName}
                  </h2>
                </div>
              </div>
              <p class="text-sm sm:text-base text-blue-500  ">
               {course.shortDescription}
              </p>
              <div className="flex flex-row gap-10 mt-8">
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  4.7 ★ (21140 reviews)
                </span>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {course.numberOfLessons} lessons
                </span>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  130.0k Learners
                </span>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Duration {course.durationInMonths} months
                </span>
              </div>

              <h1 className="text-2xl my-5">
                Course Price <span className="font-extrabold">${course.coursePrice}</span>
              </h1>
              <div class="flex">
                <a
                  class="cursor-pointer uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-800"
                >
                  Add to cart
                </a>
                <a
                  class="cursor-pointer uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500  hover:bg-blue-800 hover:text-white text-md"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            <div class="sm:flex sm:justify-center sm:items-center sm:w-1/3 lg:w-1/2 relative">
              <iframe
                src="https://www.youtube.com/embed/Bm1NtTAtBAA?autoplay=1&mute=1"
                class="w-1/2 h-fit m-auto"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* instrucotor and certificate */}
        <div className="w-[80%] m-auto mb-20 flex justify-between">
          <div className="w-1/2 m-auto">
            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img
                class="object-cover w-full h-56"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />

              <div class="py-5 text-center">
                <p className="text-white">Instructor</p>
                <p className="text-white">{course.instructorName}</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div class="w-full mt-6 px-6 sm:mt-0">
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md">
                <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                  <img
                    className="w-48"
                    src="https://marketplace.canva.com/EAFCP1Ox_-c/1/0/1600w/canva-blue-yellow-minimalist-internship-certificate-RR9ND_Uk1Bw.jpg"
                  />
                </div>

                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-blue-500">
                    Earn certificate after completing all the lessons.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  prequisites and syllabas   */}

        <div className="w-[80%] m-auto flex justify-between">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Prerequisites</h2>

            {
              course.prerequisites.map((item , index)=>{
                return (
                  <div>
                  <div className="w-3/4 bg-[#F7F9FA] border border-gray-200 shadow-md rounded-md p-3 my-5 flex items-center">
                    <div className="bg-[#DFE3E7] text-black text-opacity-70 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      {index+1}
                    </div>
                    <div className="text-gray-800">{item}</div>
                  </div>
                </div>
                )
              })
            }


          </div>

          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Syllabus</h2>

            {course.syllabus.map((item , index)=>{
              return (
                <div>
              <div className="w-3/4 bg-[#F7F9FA] border border-gray-200 shadow-md rounded-md p-3 my-5 ">
                <div className="flex items-center">
                <div className="bg-[#DFE3E7] text-black text-opacity-70 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  {index+1}
                </div>
                <div className="text-gray-800 font-bold">{item.title}</div>
                </div>
                <p className="ml-14 text-gray-500">{item.description}</p>
              </div>
            </div>
              )
            })}


          </div>
        </div>

        {/* recommened courses section */}
        <div className="w-[80%] m-auto mt-20">
          <div class="py-3 flex items-center text-3xl text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">
            Recommended Courses
          </div>
          <div className="grid grid-cols-3 grid-rows-1 mt-20">
            {/* card 1 */}
            <div class="max-w-2xl mx-auto duration-300 hover:scale-105 cursor-pointer mb-5">
              <div class="bg-white shadow-lg rounded-lg max-w-sm">
                <div className="flex items-center">
                  <a href="#">
                    <img
                      class="rounded-t-lg p-8"
                      src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                      alt="product image"
                    />
                  </a>
                  <div class="text-3xl font-bold text-blue-500 ">Learn ML</div>
                </div>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h3 class="text-gray-900 text-md text-opacity-70 mt-5 mb-5">
                      Get hands-on experience and master the basic syntax of
                      Python to jumpstart your coding journey
                    </h3>
                  </a>
                  <div className="flex items-center justify-between">
                    <div className="text-black">114.4k+ learners</div>
                    <div class="flex items-center mt-2.5 mb-5">
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded 0 800 ml-3">
                        5.0
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span class="text-3xl font-bold text-gray-900 text-opacity-70">
                      $499
                    </span>
                    <a
                      href="#"
                      class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 0 lue-700 -blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="w-full flex justify-center">
                    <Link to={"/course"} className="w-full">
                      <button className="w-[95%] mt-5 bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        View this Course
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div class="max-w-2xl mx-auto duration-300 hover:scale-105 cursor-pointer mb-5">
              <div class="bg-white shadow-lg rounded-lg max-w-sm">
                <div className="flex items-center">
                  <a href="#">
                    <img
                      class="rounded-t-lg p-8"
                      src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                      alt="product image"
                    />
                  </a>
                  <div class="text-3xl font-bold text-blue-500 ">Learn ML</div>
                </div>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h3 class="text-gray-900 text-md text-opacity-70 mt-5 mb-5">
                      Get hands-on experience and master the basic syntax of
                      Python to jumpstart your coding journey
                    </h3>
                  </a>
                  <div className="flex items-center justify-between">
                    <div className="text-black">114.4k+ learners</div>
                    <div class="flex items-center mt-2.5 mb-5">
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded 0 800 ml-3">
                        5.0
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span class="text-3xl font-bold text-gray-900 text-opacity-70">
                      $499
                    </span>
                    <a
                      href="#"
                      class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 0 lue-700 -blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                  <div className="w-full flex justify-center">
                    <Link to={"/course"} className="w-full">
                      <button className="w-[95%] mt-5 bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        View this Course
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] m-auto mt-20">
          <div class="text-gray-600 text-gray-300 pt-8" id="reviews">
            <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
              <div class="mb-10 space-y-4 px-6 md:px-0">
                <h2 class="text-center text-2xl font-bold text-black md:text-4xl">
                  What our Learner Saying
                </h2>
              </div>

              <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt="user avatar"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700">
                        Daniella Doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">
                        Mobile dev
                      </p>
                    </div>
                  </div>
                  <p class="mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum aliquid quo eum quae quos illo earum ipsa doloribus
                    nostrum minus libero aspernatur laborum cum, a suscipit,
                    ratione ea totam ullam! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Architecto laboriosam
                    deleniti aperiam ab veniam sint non cumque quis tempore
                    cupiditate. Sint libero voluptas veniam at reprehenderit,
                    veritatis harum et rerum.
                  </p>
                </div>

                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/14.jpg"
                      alt="user avatar"
                      width="200"
                      height="200"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700">
                        Jane doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">
                        Marketing
                      </p>
                    </div>
                  </div>
                  <p class="mt-8">
                    {" "}
                    Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint
                    non cumque quis tempore cupiditate. Sint libero voluptas
                    veniam at reprehenderit, veritatis harum et rerum.
                  </p>
                </div>

                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/18.jpg"
                      alt="user avatar"
                      width="200"
                      height="200"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 ">
                        Yanick Doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">
                        Developer
                      </p>
                    </div>
                  </div>
                  <p class="mt-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto laboriosam deleniti aperiam ab veniam sint non
                    cumque quis tempore cupiditate. Sint libero voluptas veniam
                    at reprehenderit, veritatis harum et rerum.
                  </p>
                </div>

                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="user avatar"
                      width="200"
                      height="200"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700 ">
                        Jane Doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">
                        Mobile dev
                      </p>
                    </div>
                  </div>
                  <p class="mt-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto laboriosam deleniti aperiam ab veniam sint non
                    cumque quis tempore cupiditate. Sint libero voluptas veniam
                    at reprehenderit, veritatis harum et rerum.
                  </p>
                </div>

                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/62.jpg"
                      alt="user avatar"
                      width="200"
                      height="200"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700">
                        Andy Doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">Manager</p>
                    </div>
                  </div>
                  <p class="mt-8">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto laboriosam deleniti aperiam ab veniam sint non
                    cumque quis tempore cupiditate. Sint libero voluptas veniam
                    at reprehenderit, veritatis harum et rerum.
                  </p>
                </div>

                <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 shadow-none">
                  <div class="flex gap-4">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://randomuser.me/api/portraits/women/19.jpg"
                      alt="user avatar"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                    <div>
                      <h6 class="text-lg font-medium text-gray-700">
                        Yanndy Doe
                      </h6>
                      <p class="text-sm text-gray-500 text-gray-300">
                        Mobile dev
                      </p>
                    </div>
                  </div>
                  <p class="mt-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Architecto laboriosam deleniti aperiam ab veniam sint non
                    cumque quis tempore cupiditate. Sint libero voluptas veniam
                    at reprehenderit, veritatis harum et rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* faqs */}
        <div className="w-[80%] m-auto mt-20 mb-48">
          <div class="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div class="mx-auto px-5">
              <div class="flex flex-col items-center">
                <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                  FAQ
                </h2>
                <p class="mt-3 text-lg text-neutral-500 md:text-xl">
                  Frequenty asked questions
                </p>
              </div>
              <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> How long does it take to learn Python?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      The time required to learn Python varies depending on your
                      background and learning commitment. Beginners can achieve
                      basic proficiency in a few weeks with consistent practice.
                      For a deeper understanding and practical expertise, it may
                      take several months of regular study, coding practice, and
                      engagement in real-world projects. Online courses and
                      tutorials can expedite the learning process.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> How can I teach myself Python?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      You can teach yourself Python by utilizing online
                      resources, books, and tutorials. Start with basic syntax
                      and gradually move to more complex topics. Practice coding
                      regularly, work on projects, and participate in coding
                      communities to enhance your learning experience.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> Is Python enough to get a job?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      While Python is a versatile and in-demand programming
                      language, getting a job may also require knowledge of
                      additional technologies and frameworks relevant to your
                      desired field. Practical experience, problem-solving
                      skills, and a strong portfolio can significantly improve
                      your job prospects.
                    </p>
                  </details>
                </div>

                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> What is Python used for?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Python is used for a wide range of applications, including
                      web development, data analysis, artificial intelligence,
                      machine learning, automation, scientific computing, and
                      more. Its simplicity and readability make it a popular
                      choice among developers.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Course;
