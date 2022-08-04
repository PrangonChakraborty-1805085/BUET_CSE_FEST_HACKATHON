import React from "react";
import Image from 'next/image';
import one from "../../public/one.jpg"
import java from "../../public/java.jpg"
import python from "../../public/python.jpg"
import crypto from "../../public/crypto.jpg"
import bitcoin from "../../public/bitcoin.jpg"


export default function Course({id,img,title,desc,price}) {
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a class="block relative h-48 rounded overflow-hidden">
        <Image
          src={id==1?one:id==2?java:id==3?python:id==4?crypto:bitcoin}
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {title}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          {desc}
        </h2>
        <p class="mt-1">{price} Eth</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
      </div>
    </div>
  );
}
