import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { useRouter } from "next/router";


//for ipfs checking
import { create } from 'ipfs-http-client'
const client = create('https://ipfs.infura.io:5001/api/v0')


export default function Navbar() {
  const [{ user }, dispatch] = useStateValue();

  //user creadentials
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();

  // for file read write testing
  const [text, setText] = useState("");

  //ipfs 
  const [CID, setCID] = useState(``);

  //router functions
  const router = useRouter();
  const handleCertificateVerification = (e) => {
    router.push("/verify");
  };
  const handleProfileClick = async (e) => {
    e.preventDefault(); //avoid refresh
    const file = "Prangon |" +user.account+ "| Title:Introduction to java | Issued by: Courszila";
    try {
      const added = await client.add(file)
     const cid=added.path;
     console.log("cid is ",cid);
     setCID(cid);
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
    // try {
    //   const { ethereum } = window;
    //   if (ethereum) {
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const dummyContract = new ethers.Contract(
    //       dummyAddress,
    //       dummyAbi.abi,
    //       signer
    //     );
    //     var res = await  dummyContract.add();
    //     await res.wait(1);
    //     const result = await dummyContract.dummy_function();
    //     console.log("res is now ", result);
    //   } else {
    //     console.log("ethereum object does not exist");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <header class="text-gray-600 body-font shadow-md">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
              <a class="mr-5 hover:text-gray-900 cursor-pointer focus:outline-none hover:bg-gray-200 py-1 px-3">
                Enrolled Courses
              </a>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
