import React from "react";

function Footer() {

    const logo = (<svg width="150" height="35" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4399 24.0337C13.7573 24.0337 13.916 24.1802 13.916 24.4731C13.916 24.6929 13.7736 24.9533 13.4888 25.2544C12.203 26.5728 10.4411 27.2319 8.20312 27.2319C6.19303 27.2319 4.50033 26.6257 3.125 25.4131C1.70085 24.1517 0.98877 22.5566 0.98877 20.6279C0.98877 18.6585 1.63167 17.0391 2.91748 15.7695C4.27653 14.4186 6.08317 13.7432 8.3374 13.7432C10.144 13.7432 11.6618 14.2925 12.8906 15.3911C14.2171 16.5711 14.8804 18.1214 14.8804 20.042C14.8804 20.3187 14.8722 20.6117 14.856 20.9209H6.79932V26.1577C7.3527 26.2716 7.97526 26.3286 8.66699 26.3286C10.1318 26.3286 11.381 25.8444 12.4146 24.876C12.6261 24.6644 12.7767 24.4976 12.8662 24.3755C13.0534 24.1476 13.2446 24.0337 13.4399 24.0337ZM10.1807 14.8662C9.65169 14.7116 9.05355 14.6343 8.38623 14.6343C7.71891 14.6343 7.18994 14.679 6.79932 14.7686V20.0298H10.1807V14.8662ZM27.2217 26.3286C26.2044 26.9308 25.1261 27.2319 23.9868 27.2319C22.8556 27.2319 21.8587 27.0651 20.9961 26.7314C20.1416 26.3896 19.4092 25.9176 18.7988 25.3154C17.5293 24.054 16.8945 22.4142 16.8945 20.396C16.8945 18.5243 17.5212 16.9658 18.7744 15.7207C20.109 14.4023 21.8506 13.7432 23.999 13.7432C25.1383 13.7432 26.2126 13.9914 27.2217 14.4878V9.72705H32.251V27H27.2217V26.3286ZM23.7549 14.6343C23.5026 14.6343 23.2625 14.6506 23.0347 14.6831V26.2554C23.3276 26.3042 23.645 26.3286 23.9868 26.3286C25.118 26.3286 26.1963 25.9705 27.2217 25.2544V15.5742C26.123 14.9476 24.9674 14.6343 23.7549 14.6343ZM40.5151 27.2319C37.6587 27.2319 36.2305 25.8363 36.2305 23.0449V13.9629H41.4551V25.9136C41.5365 25.9543 41.6382 25.9746 41.7603 25.9746H42.1631C42.8141 25.9746 43.5872 25.5352 44.4824 24.6562C44.751 24.3877 45.0033 24.0947 45.2393 23.7773V13.9629H50.4883V27H45.2393V25.1201C43.9128 26.528 42.3381 27.2319 40.5151 27.2319ZM67.0654 10.0444C67.0654 10.4188 66.6707 10.606 65.8813 10.606H63.0493V27H56.7993V10.606H54.9683C54.3416 10.606 53.9103 10.6344 53.6743 10.6914C53.3651 10.7565 53.1413 10.7891 53.0029 10.7891C52.5879 10.7891 52.3804 10.6263 52.3804 10.3008C52.3804 9.91829 52.7832 9.72705 53.5889 9.72705H64.4775C65.0391 9.72705 65.4541 9.70264 65.7227 9.65381C66.0482 9.59684 66.2923 9.56836 66.4551 9.56836C66.862 9.56836 67.0654 9.72705 67.0654 10.0444ZM80.9448 24.0337C81.2622 24.0337 81.4209 24.1802 81.4209 24.4731C81.4209 24.6929 81.2785 24.9533 80.9937 25.2544C79.7078 26.5728 77.946 27.2319 75.708 27.2319C73.6979 27.2319 72.0052 26.6257 70.6299 25.4131C69.2057 24.1517 68.4937 22.5566 68.4937 20.6279C68.4937 18.6585 69.1366 17.0391 70.4224 15.7695C71.7814 14.4186 73.5881 13.7432 75.8423 13.7432C77.6489 13.7432 79.1667 14.2925 80.3955 15.3911C81.722 16.5711 82.3853 18.1214 82.3853 20.042C82.3853 20.3187 82.3771 20.6117 82.3608 20.9209H74.3042V26.1577C74.8576 26.2716 75.4801 26.3286 76.1719 26.3286C77.6367 26.3286 78.8859 25.8444 79.9194 24.876C80.131 24.6644 80.2816 24.4976 80.3711 24.3755C80.5583 24.1476 80.7495 24.0337 80.9448 24.0337ZM77.6855 14.8662C77.1566 14.7116 76.5584 14.6343 75.8911 14.6343C75.2238 14.6343 74.6948 14.679 74.3042 14.7686V20.0298H77.6855V14.8662ZM90.3687 26.2188C90.7511 26.292 91.1336 26.3286 91.5161 26.3286C91.9067 26.3286 92.2811 26.3001 92.6392 26.2432C93.0054 26.1781 93.3512 26.0885 93.6768 25.9746C94.3685 25.7305 94.9259 25.4212 95.3491 25.0469C95.6502 24.7865 95.87 24.6562 96.0083 24.6562C96.3175 24.6562 96.4722 24.7946 96.4722 25.0713C96.4722 25.348 96.2199 25.6776 95.7153 26.0601C94.5435 26.8413 93.1356 27.2319 91.4917 27.2319C89.3514 27.2319 87.6221 26.589 86.3037 25.3032C85.0098 24.0337 84.3628 22.3857 84.3628 20.3594C84.3628 18.4388 85.0505 16.8519 86.4258 15.5986C87.793 14.3617 89.5101 13.7432 91.5771 13.7432C92.7572 13.7432 93.8924 13.9873 94.9829 14.4756C95.813 14.8337 96.228 15.2039 96.228 15.5864C96.228 15.7492 96.1792 15.8753 96.0815 15.9648C95.992 16.0462 95.8903 16.0869 95.7764 16.0869C95.6055 16.0869 95.3857 15.9933 95.1172 15.8062C94.5882 15.3016 93.8029 14.9476 92.7612 14.7441C92.3869 14.6709 91.9759 14.6343 91.5283 14.6343C91.0807 14.6343 90.6942 14.6668 90.3687 14.7319V26.2188ZM109.229 13.7432C112.093 13.7432 113.525 15.1348 113.525 17.918V27H108.276V15.1226C108.13 15.0249 107.935 14.9761 107.69 14.9761C107.454 14.9761 107.206 15.033 106.946 15.147C106.685 15.2609 106.413 15.4196 106.128 15.623C105.518 16.0706 104.976 16.6322 104.504 17.3076V27H99.2554V9.72705H104.504V16.0259C105.896 14.5041 107.471 13.7432 109.229 13.7432Z" fill="black"/>
        <path d="M112.08 7V1.39H110.31V0.76H114.63V1.39H112.79V7H112.08ZM115.41 7V0.77H115.96L117.5 3.82L119.07 0.76H119.6V7H118.94V2.3L117.59 4.81H117.32L116.06 2.33V7H115.41Z" fill="black"/>
        </svg>
        )


  return (
    <div>
      <footer class="w-full bg-gradient-to-r from-blue-200 to-indigo-500 pt-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <a href="#" class="flex justify-center text-4xl font-bold">
                {logo}
            </a>
            <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-10 mb-10 border-b border-gray-200">
              <li>
                <a
                  href="javascript:;"
                  class="text-gray-800 hover:text-gray-900"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-800 hover:text-gray-900"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-800 hover:text-gray-900"
                >
                  Our Partners
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-800 hover:text-gray-900"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class=" text-gray-800 hover:text-gray-900"
                >
                  Support
                </a>
              </li>
            </ul>
            <div class="flex space-x-10 justify-center items-center mb-10">
              <a
                href="javascript:;"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M17.5667 14.7386L24.072 7.33936H22.5305L16.8819 13.764L12.3704 7.33936H7.16699L13.9892 17.0546L7.16699 24.8139H8.70862L14.6736 18.0292L19.4381 24.8139H24.6415L17.5663 14.7386H17.5667ZM15.4552 17.1402L14.764 16.1728L9.2641 8.47491H11.632L16.0704 14.6873L16.7617 15.6548L22.5312 23.73H20.1633L15.4552 17.1406V17.1402Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  class="w-[1.688rem] h-[1.688rem] "
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="javascript:;"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  class="w-[0.938rem] h-[1.625rem]"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="javascript:;"
                class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 "
              >
                <svg
                  class="w-[1.875rem] h-[1.375rem]"
                  viewBox="0 0 30 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <span class="text-lg text-gray-500 text-center block">
              <a href="https://pagedone.io/">edutech</a> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
