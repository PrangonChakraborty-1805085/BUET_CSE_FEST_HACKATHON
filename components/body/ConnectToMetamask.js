import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { useRouter } from 'next/router'
// import { TaskContractAddress } from '../config.js'
// import TaskAbi from '../../backend/build/contracts/TaskContract.json'
// import { ethers } from 'ethers';

export default function ConnectToMetamask() {
  //net data
  const [correctNetwork, setCorrectNetwork] = useState(false);
  //user data
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // routing
  const router=useRouter();

  const handleConnectToMetamask = async (e) => {
    e.preventDefault();
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("metamask not detected");
      } else {
        //this request will find a network to connect
        const chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("connected to chain :", chainId);
        const rinkebyChainId = "0x4";
        if (chainId !== rinkebyChainId) {
          alert("you are not connected to rinkeby testnet");
          setCorrectNetwork(false);
        } else {
          setCorrectNetwork(true);
          //this request will pop up all accounts in metamask
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("account found ", accounts[0]);
          console.log("current account is : ",accounts[0]);
          //storing the account in session storage
          dispatch({
            type: "SET_USER",
            user: {
              name: userName,
              email: email,
              account: accounts[0],
            },
          });
          //pushing to new page
          router.push("/courses");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Learn without limits
            </h1>
            <p class="leading-relaxed mt-4">
              Start, switch, or advance your career with more than 5,00 courses,
              Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Connect to Metamask
            </h2>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleConnectToMetamask}
            >
              Connect
            </button>

            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of Collywobbles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
