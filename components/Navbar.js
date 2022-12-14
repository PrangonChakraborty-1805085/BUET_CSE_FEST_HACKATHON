import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Navbar() {
  const [{ user,certificates }, dispatch] = useStateValue();

  //user creadentials
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();

  // for file read write testing
  const [text, setText] = useState("");

  //router functions
  const router = useRouter();
  const handleCertificateVerification = (e) => {
    router.push("/verify");
  };
  const handleEnrolled=(e)=>{
    router.push("/enrolled");
  }
  const handleProfileClick = (e) => {
    e.preventDefault(); //avoid refresh
    router.push("/profile");
  
  };
  const handleDisconnect=async (e) =>{

  }
  return (
    <div>
      <header class="text-gray-600 body-font shadow-md">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={!user?"/":"/courses"}>
          <a class="flex title-font font-medium cursor-pointer items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">CourseZila</span>
          </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              class="mr-5 hover:text-gray-900 cursor-pointer focus:outline-none hover:bg-gray-200 py-1 px-3"
              onClick={handleCertificateVerification}
            >
              Verify Certificate
            </a>
            {user && (
              <a
                class="mr-5 hover:text-gray-900 cursor-pointer focus:outline-none hover:bg-gray-200 py-1 px-3"
                onClick={handleProfileClick}
              >
                Profile
              </a>
            )}
            {user && (
              <a class="mr-5 hover:text-gray-900 cursor-pointer focus:outline-none hover:bg-gray-200 py-1 px-3" onClick={handleEnrolled}>
                Enrolled Courses
              </a>
            )}
            {user && (
              <a class="mr-5 hover:text-gray-900 cursor-pointer focus:outline-none hover:bg-gray-200 py-1 px-3" onClick={handleDisconnect}>
                {user.account}
              </a>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
