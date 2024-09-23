// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import logo1 from "/public/logo1.png"; // Assuming this is the black logo
// import Image from "next/image";
// import DarkMode from "./DarkMode";

// export default function Navbar() {
//   const [nav, setNav] = useState(false);

//   return (
//     <>
//       <nav className="bg-white dark:bg-black duration-300 px-2 border-gray-200 fixed w-full z-10 ease-in shadow-[0_0_50px_0_rgba(35,31,32,0.1)]">
//         <div className="flex items-center justify-between mx-auto px-4">
//           <div className="flex items-center">
//             <Image
//               className="w-full h-12 ]"
//               src={logo1}
//               alt={"logo1"}
//               priority
//             />
//           </div>

//           <DarkMode />

//           <div className="lg:hidden ease-out duration-300">
//             <button
//               onClick={() => setNav(!nav)}
//               className={`text-xl md:text-2xl  border-2 rounded-md p-0.5 md:p-1 text-black`}
//             >
//               {!nav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div className="items-center justify-between hidden w-full lg:flex lg:w-auto nav-items">
//             <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white lg:dark:bg-black duration-300 text-lg ease-in">
//               <li>
//                 <Link className="text-black dark:text-white" href="/">
//                   What we do
//                 </Link>
//               </li>
//               <li>
//                 <Link className="text-black dark:text-white" href="/">
//                   Who we are
//                 </Link>
//               </li>
//               <li>
//                 <Link className="text-black dark:text-white" href="/">
//                   Register
//                 </Link>
//               </li>
//               <li>
//                 <Link className="text-black dark:text-white" href="/">
//                   Talk to us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div
//             className={
//               nav
//                 ? "fixed left-0 top-16 w-[50%] h-full bg-white ease-in duration-500 lg:hidden z-10"
//                 : "fixed left-[-100%] ease-in-out duration-300 top-16 w-[50%] h-full bg-white z-10"
//             }
//           >
//             <ul className="p-2 md:p-4 link-cursor flex flex-col text-sm md:text-md font-medium">
//               <Link
//                 className={
//                   "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4 "
//                 }
//                 href="/"
//                 onClick={() => setNav(!nav)}
//               >
//                 What we do
//               </Link>
//               <Link
//                 className={
//                   "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
//                 }
//                 href="/"
//                 onClick={() => setNav(!nav)}
//               >
//                 Who we are
//               </Link>
//               <Link
//                 className={
//                   "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
//                 }
//                 href="/"
//                 onClick={() => setNav(!nav)}
//               >
//                 Register
//               </Link>
//               <Link
//                 className={
//                   "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
//                 }
//                 href="/"
//                 onClick={() => setNav(!nav)}
//               >
//                 Talk to us
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div
//           className={
//             nav
//               ? "fixed lg:hidden left-0 top-16 w-full h-[100vh] bg-black/25 backdrop-blur ease-out duration-500"
//               : "fixed lg:hidden left-[-100%] top-16 w-full h-[100vh] bg-white/25 backdrop-blur ease-in duration-500"
//           }
//         ></div>
//       </nav>
//     </>
//   );
// }


"use client";
import Link from "next/link";
import { useState } from "react";
import logo1 from "/public/logo1.png"; // Assuming this is the black logo
import Image from "next/image";
import DarkMode from "./DarkMode";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-black duration-300 px-2 border-gray-200 fixed w-full z-10 ease-in shadow-[0_0_50px_0_rgba(35,31,32,0.1)]">
        <div className="flex items-center justify-between mx-auto px-4">
          <div className="flex items-center">
            <Image
              className="w-full h-12 ]"
              src={logo1}
              alt={"logo1"}
              priority
            />
          </div>

          <DarkMode />

          <div className="lg:hidden ease-out duration-300">
            <button
              onClick={() => setNav(!nav)}
              className={`text-xl md:text-2xl  border-2 rounded-md p-0.5 md:p-1 text-black`}
            >
              {!nav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto nav-items">
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white lg:dark:bg-black duration-300 text-lg ease-in">
              <li>
                <Link className="text-black dark:text-white" href="#what-we-do">
                  What we do
                </Link>
              </li>
              <li>
                <Link className="text-black dark:text-white" href="#who-we-are">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="text-black dark:text-white" href="#register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="text-black dark:text-white" href="#talk-to-us">
                  Talk to us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-16 w-[50%] h-full bg-white ease-in duration-500 lg:hidden z-10"
                : "fixed left-[-100%] ease-in-out duration-300 top-16 w-[50%] h-full bg-white z-10"
            }
          >
            <ul className="p-2 md:p-4 link-cursor flex flex-col text-sm md:text-md font-medium">
              <Link
                className={
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4 "
                }
                href="#what-we-do"
                onClick={() => setNav(!nav)}
              >
                What we do
              </Link>
              <Link
                className={
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
                }
                href="#who-we-are"
                onClick={() => setNav(!nav)}
              >
                Who we are
              </Link>
              <Link
                className={
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
                }
                href="#register"
                onClick={() => setNav(!nav)}
              >
                Register
              </Link>
              <Link
                className={
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:p-4"
                }
                href="#talk-to-us"
                onClick={() => setNav(!nav)}
              >
                Talk to us
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed lg:hidden left-0 top-16 w-full h-[100vh] bg-black/25 backdrop-blur ease-out duration-500"
              : "fixed lg:hidden left-[-100%] top-16 w-full h-[100vh] bg-white/25 backdrop-blur ease-in duration-500"
          }
        ></div>
      </nav>
    </>
  );
}
