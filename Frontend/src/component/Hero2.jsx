import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Hero2({userid}) {


  const [allcourses , setallcourses] = useState([]);
  const getCourses = async () =>{
    try {
      await axios.get("http://0.0.0.0:3000/course/getallcourses")
      .then((res)=>{
        console.log(res.data);
        setallcourses(res.data);
      })
    } catch (error) {
      console.log("Error inHero2 : ",error);
    }
  }  

  useEffect(()=>{
    getCourses();
  },[])

  const hanleaddToCart = async (item) => {
    try {


      await axios.post("http://0.0.0.0:3000/user/addtocart", {

          userid : userid,
          courseId : item._id
        
      })
      .then((res)=>{
        toast.success(res.data.message);
      })



    } catch (error) {
      console.log("Error in handleaddToCart.jsx : " , error)
    }
    
  }


  return (
    <div className="grid grid-cols-3 mt-20 h-full w-[75%] m-auto ">

      {
        allcourses.map((item)=>{
          return (
            <div class="max-w-2xl mx-auto duration-300 hover:scale-105 cursor-pointer mb-5">
            <div class="bg-white shadow-lg rounded-lg max-w-sm mb-16 h-[450px] overflow-hidden">
                <div className="flex items-center">
                <a href="#">
                <img
                  class="rounded-t-lg p-8"
                  src="https://cdn.codechef.com/images/self-learning/icons/python.svg"
                  alt="product image"
                />
                </a>
                <div class="text-3xl font-bold text-blue-500 ">{item.courseName}</div>
                </div>
              <div class="px-5 pb-5">
                <a href="#">
                <h3 class="text-gray-900 text-md text-opacity-70 mt-5 mb-5">
                  {item.shortDescription}
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
                    ${item.coursePrice}
                  </span>
                  <a
                    onClick={(e)=>{
                      e.preventDefault();
                      {userid && hanleaddToCart(item);}
                    }}
                    class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 0 lue-700 -blue-800"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="w-full flex justify-center">
                <Link to='/course' state = {{course : item}} className="w-full">
                    <button className="w-[95%] mt-5 bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        View this Course
                    </button>
                  </Link>
                </div>
    
              </div>
            </div>
          </div>
          )
        })
      }







    </div>
  );
}

export default Hero2;