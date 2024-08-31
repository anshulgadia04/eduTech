import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const userid = location.state?.userid || "";

  const [coursesInCart, setCoursesInCart] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleRemove = async (item) => {
    try {
      await axios.post("http://0.0.0.0:3000/user/removecoursecart", {
        userid,
        courseId: item._id,
      });

      getCoursesInCart();
    } catch (error) {

    }
  };

  const getCoursesInCart = async () => {
    try {
      const res = await axios.post("http://0.0.0.0:3000/user/getcart", {
        userid,
      })

      .then((res)=>{
        console.log(res.data.courses);
        
        setCoursesInCart(res.data.courses);
        setUsername(res.data.username);
        setIsLoading(false);
      })
    } catch (error) {

      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoursesInCart();
  }, []); 

  const totalPrice = coursesInCart.reduce((acc, item) => acc + item.coursePrice, 0);

  if (isLoading) {
    return <div className="h-screen text-center mt-48">Loading..</div>; 
  }

  return (
    <div className="h-screen">
      <h1 className="w-[75%] m-auto text-2xl text-center mt-10">
        Hi <span className="text-blue-500 font-extrabold">{username}!</span>
      </h1>
      <div className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400 mb-20">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="font-semibold text-center text-gray-800">Shopping Cart</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200">

          {coursesInCart.map((item, index) => (
            <div className="flex items-center py-4 px-6" key={index}>
              <img
                className="w-16 h-16 object-cover rounded"
                src="https://dummyimage.com/100x100/F3F4F7/000000.jpg"
                alt="Product Image"
              />
              <div className="ml-3">
                <h3 className="text-gray-900 font-semibold">{item.courseName}</h3>
                <p className="text-gray-700 mt-1">${item.coursePrice}</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleRemove(item);
                }}
                className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          
        </div>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
          <h3 className="text-gray-900 font-semibold">Total: ${totalPrice}</h3>
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
