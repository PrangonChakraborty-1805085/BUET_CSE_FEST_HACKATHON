import React from "react";
// unused component
export default function SignIn({name}) {
  return (
    <div>
      <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        {name}
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          {/* <path d="M5 12h14M12 5l7 7-7 7"></path> */}
        </svg>
      </button>
    </div>
  );
}
