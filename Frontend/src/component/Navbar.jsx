import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar({ isAuthenticated, handleLogout, userid }) {
  const logo = (
    <svg
      width="120"
      height="23"
      viewBox="0 0 120 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4399 19.0337C13.7573 19.0337 13.916 19.1802 13.916 19.4731C13.916 19.6929 13.7736 19.9533 13.4888 20.2544C12.203 21.5728 10.4411 22.2319 8.20312 22.2319C6.19303 22.2319 4.50033 21.6257 3.125 20.4131C1.70085 19.1517 0.98877 17.5566 0.98877 15.6279C0.98877 13.6585 1.63167 12.0391 2.91748 10.7695C4.27653 9.41862 6.08317 8.74316 8.3374 8.74316C10.144 8.74316 11.6618 9.29248 12.8906 10.3911C14.2171 11.5711 14.8804 13.1214 14.8804 15.042C14.8804 15.3187 14.8722 15.6117 14.856 15.9209H6.79932V21.1577C7.3527 21.2716 7.97526 21.3286 8.66699 21.3286C10.1318 21.3286 11.381 20.8444 12.4146 19.876C12.6261 19.6644 12.7767 19.4976 12.8662 19.3755C13.0534 19.1476 13.2446 19.0337 13.4399 19.0337ZM10.1807 9.86621C9.65169 9.71159 9.05355 9.63428 8.38623 9.63428C7.71891 9.63428 7.18994 9.67904 6.79932 9.76855V15.0298H10.1807V9.86621ZM27.2217 21.3286C26.2044 21.9308 25.1261 22.2319 23.9868 22.2319C22.8556 22.2319 21.8587 22.0651 20.9961 21.7314C20.1416 21.3896 19.4092 20.9176 18.7988 20.3154C17.5293 19.054 16.8945 17.4142 16.8945 15.396C16.8945 13.5243 17.5212 11.9658 18.7744 10.7207C20.109 9.40234 21.8506 8.74316 23.999 8.74316C25.1383 8.74316 26.2126 8.99137 27.2217 9.48779V4.72705H32.251V22H27.2217V21.3286ZM23.7549 9.63428C23.5026 9.63428 23.2625 9.65055 23.0347 9.68311V21.2554C23.3276 21.3042 23.645 21.3286 23.9868 21.3286C25.118 21.3286 26.1963 20.9705 27.2217 20.2544V10.5742C26.123 9.94759 24.9674 9.63428 23.7549 9.63428ZM40.5151 22.2319C37.6587 22.2319 36.2305 20.8363 36.2305 18.0449V8.96289H41.4551V20.9136C41.5365 20.9543 41.6382 20.9746 41.7603 20.9746H42.1631C42.8141 20.9746 43.5872 20.5352 44.4824 19.6562C44.751 19.3877 45.0033 19.0947 45.2393 18.7773V8.96289H50.4883V22H45.2393V20.1201C43.9128 21.528 42.3381 22.2319 40.5151 22.2319ZM67.0654 5.04443C67.0654 5.41878 66.6707 5.60596 65.8813 5.60596H63.0493V22H56.7993V5.60596H54.9683C54.3416 5.60596 53.9103 5.63444 53.6743 5.69141C53.3651 5.75651 53.1413 5.78906 53.0029 5.78906C52.5879 5.78906 52.3804 5.6263 52.3804 5.30078C52.3804 4.91829 52.7832 4.72705 53.5889 4.72705H64.4775C65.0391 4.72705 65.4541 4.70264 65.7227 4.65381C66.0482 4.59684 66.2923 4.56836 66.4551 4.56836C66.862 4.56836 67.0654 4.72705 67.0654 5.04443ZM80.9448 19.0337C81.2622 19.0337 81.4209 19.1802 81.4209 19.4731C81.4209 19.6929 81.2785 19.9533 80.9937 20.2544C79.7078 21.5728 77.946 22.2319 75.708 22.2319C73.6979 22.2319 72.0052 21.6257 70.6299 20.4131C69.2057 19.1517 68.4937 17.5566 68.4937 15.6279C68.4937 13.6585 69.1366 12.0391 70.4224 10.7695C71.7814 9.41862 73.5881 8.74316 75.8423 8.74316C77.6489 8.74316 79.1667 9.29248 80.3955 10.3911C81.722 11.5711 82.3853 13.1214 82.3853 15.042C82.3853 15.3187 82.3771 15.6117 82.3608 15.9209H74.3042V21.1577C74.8576 21.2716 75.4801 21.3286 76.1719 21.3286C77.6367 21.3286 78.8859 20.8444 79.9194 19.876C80.131 19.6644 80.2816 19.4976 80.3711 19.3755C80.5583 19.1476 80.7495 19.0337 80.9448 19.0337ZM77.6855 9.86621C77.1566 9.71159 76.5584 9.63428 75.8911 9.63428C75.2238 9.63428 74.6948 9.67904 74.3042 9.76855V15.0298H77.6855V9.86621ZM90.3687 21.2188C90.7511 21.292 91.1336 21.3286 91.5161 21.3286C91.9067 21.3286 92.2811 21.3001 92.6392 21.2432C93.0054 21.1781 93.3512 21.0885 93.6768 20.9746C94.3685 20.7305 94.9259 20.4212 95.3491 20.0469C95.6502 19.7865 95.87 19.6562 96.0083 19.6562C96.3175 19.6562 96.4722 19.7946 96.4722 20.0713C96.4722 20.348 96.2199 20.6776 95.7153 21.0601C94.5435 21.8413 93.1356 22.2319 91.4917 22.2319C89.3514 22.2319 87.6221 21.589 86.3037 20.3032C85.0098 19.0337 84.3628 17.3857 84.3628 15.3594C84.3628 13.4388 85.0505 11.8519 86.4258 10.5986C87.793 9.36165 89.5101 8.74316 91.5771 8.74316C92.7572 8.74316 93.8924 8.9873 94.9829 9.47559C95.813 9.83366 96.228 10.2039 96.228 10.5864C96.228 10.7492 96.1792 10.8753 96.0815 10.9648C95.992 11.0462 95.8903 11.0869 95.7764 11.0869C95.6055 11.0869 95.3857 10.9933 95.1172 10.8062C94.5882 10.3016 93.8029 9.94759 92.7612 9.74414C92.3869 9.6709 91.9759 9.63428 91.5283 9.63428C91.0807 9.63428 90.6942 9.66683 90.3687 9.73193V21.2188ZM109.229 8.74316C112.093 8.74316 113.525 10.1348 113.525 12.918V22H108.276V10.1226C108.13 10.0249 107.935 9.97607 107.69 9.97607C107.454 9.97607 107.206 10.033 106.946 10.147C106.685 10.2609 106.413 10.4196 106.128 10.623C105.518 11.0706 104.976 11.6322 104.504 12.3076V22H99.2554V4.72705H104.504V11.0259C105.896 9.50407 107.471 8.74316 109.229 8.74316Z"
        fill="white"
      />
      <path
        d="M112.08 7V1.39H110.31V0.76H114.63V1.39H112.79V7H112.08ZM115.41 7V0.77H115.96L117.5 3.82L119.07 0.76H119.6V7H118.94V2.3L117.59 4.81H117.32L116.06 2.33V7H115.41Z"
        fill="white"
      />
    </svg>
  );

  console.log("User id in nav", userid);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  const handleLanguageChange = (langCode) => {
    const googleTranslateDropdown = document.querySelector('.goog-te-combo');
    if (googleTranslateDropdown) {
      googleTranslateDropdown.value = langCode;
      googleTranslateDropdown.dispatchEvent(new Event('change'));
    }
  };
  

  return (
    <>
      <nav className="bg-[#4E148C] flex justify-between p-5 text-white">
        <div className="ml-5">
          <h1 className="text-3xl text-blue-700 hover:cursor-pointer">
            <Link to={""}>{logo}</Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-10 font-medium text-xl h-8">
            <div className="relative w-[300px]">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>
              <input
                type="text"
                id="Search"
                placeholder="Search..."
                className="w-full rounded-md py-2.5 shadow-sm sm:text-sm px-3 h-8 text-black"
              />
              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>

            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 pb-1 text-gray-900 transition hover:border-gray-600">
                  <span className="text-white"> Courses </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
                  <div className="w-48 rounded border border-gray-200 bg-white">
                    <ul className="space-y-1 border-t border-gray-200 p-4 flex flex-col">
                      <Link to={'/cpp'} className="text-md font-medium text-gray-700 hover:cursor-pointer border-b">
                        C++
                      </Link>
                      <Link to={'/java'} className="text-md font-medium text-gray-700 hover:cursor-pointer border-b">
                        Java
                      </Link>
                      <Link to={'/python'} className="text-md font-medium text-gray-700 hover:cursor-pointer border-b">
                        Python
                      </Link>
                      <Link to={'/dsa'} className="text-md font-medium text-gray-700 hover:cursor-pointer border-b">
                        DSA
                      </Link>
                      <div id="google_translate_element"></div>

                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 pb-1 text-gray-900 transition hover:border-gray-600">
                  <span className="text-white"> Languages </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="relative">
  <div className="dropdown absolute left-0 top-auto mt-2 z-50">
    <div className="w-48 rounded border border-gray-200 bg-white shadow-lg">
      <ul className="space-y-1 border-t border-gray-200 p-4">
        <div 
          className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
          onClick={() => handleLanguageChange('gu')}>
          Gujarati
        </div>
        <div 
          className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
          onClick={() => handleLanguageChange('mr')}>
          Marathi
        </div>
        <div 
          className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
          onClick={() => handleLanguageChange('bn')}>
          Bengali
        </div>
        <div 
        className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
        onClick={() => handleLanguageChange('te')}>
        Telugu
      </div>

      <div 
        className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
        onClick={() => handleLanguageChange('hi')}>
        Hindi
      </div>

      <div 
        className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
        onClick={() => handleLanguageChange('en')}>
        English
      </div>

<div 
  className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
  onClick={() => handleLanguageChange('ta')}>
  Tamil
</div>

<div 
  className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
  onClick={() => handleLanguageChange('pa')}>
  Punjabi
</div>

<div 
  className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
  onClick={() => handleLanguageChange('or')}>
  Odia
</div>

<div 
  className="text-md font-medium text-gray-700 hover:cursor-pointer border-b hover:bg-gray-100 p-2"
  onClick={() => handleLanguageChange('ml')}>
  Malayalam
</div>

      </ul>
    </div>
  </div>
</div>


              </details>
            </div>

            <Link className="" to={"/contact"}>
              Contact Us
            </Link>

            <Link to={"/about"}>About Us</Link>

            <Link state={{ userid }} to={"/cart"}>
              <svg
                width="29"
                height="29"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 0.09375C0.72335 0.09375 0.09375 0.72335 0.09375 1.5C0.09375 2.27665 0.72335 2.90625 1.5 2.90625H5.40203L6.13574 5.84107L9.71628 20.1632C7.65666 20.533 6.09375 22.334 6.09375 24.5C6.09375 26.9335 8.0665 28.9063 10.5 28.9063H33.5C34.2766 28.9063 34.9062 28.2766 34.9062 27.5C34.9062 26.7234 34.2766 26.0938 33.5 26.0938H10.5C9.6198 26.0938 8.90625 25.3802 8.90625 24.5C8.90625 23.6198 9.6198 22.9063 10.5 22.9063H11.5H33.5C34.1453 22.9063 34.7078 22.4671 34.8643 21.8411L38.8643 5.84107C38.9693 5.42096 38.8749 4.9759 38.6084 4.63458C38.3419 4.29326 37.933 4.09375 37.5 4.09375H8.59797L7.86426 1.15893C7.70776 0.532918 7.14528 0.09375 6.5 0.09375H1.5ZM11.5 32.0937C9.61878 32.0937 8.09375 33.6188 8.09375 35.5C8.09375 37.3812 9.61878 38.9062 11.5 38.9062C13.3812 38.9062 14.9063 37.3812 14.9063 35.5C14.9063 33.6188 13.3812 32.0937 11.5 32.0937ZM31.5 32.0937C29.6188 32.0937 28.0938 33.6188 28.0938 35.5C28.0938 37.3812 29.6188 38.9062 31.5 38.9062C33.3812 38.9062 34.9062 37.3812 34.9062 35.5C34.9062 33.6188 33.3812 32.0937 31.5 32.0937Z"
                  fill="white"
                />
              </svg>
            </Link>

            {isAuthenticated ? (
              <p
                className="bg-blue-600 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-800 duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogoutClick();
                }}
              >
                Logout
              </p>
            ) : (
              <li>
                <Link to={"/login"}>
                  <img
                    className="w-8 cursor-pointer"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png"
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
