import React from "react";

export default function Certificate({ id, title, name, email,date,cid,account }) {
  return (
    <div class="py-8 flex flex-wrap md:flex-nowrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="font-semibold title-font text-gray-700">Course</span>
        <span class="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p class="leading-relaxed">
          Name : {name}
        </p>
        <p class="leading-relaxed">
          Email : {email}
        </p>
        <p class="leading-relaxed">
          Wallet : {account}
        </p>
        <p class="leading-relaxed">
          CID of IPFS : {cid}
        </p>
        <a class="text-indigo-500 inline-flex items-center mt-4">
          Issued by CourseZila
        </a>
      </div>
    </div>
  );
}
