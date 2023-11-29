import React from 'react';

export default function AppLoading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="bg-gray-500 rounded-full p-2">
        <svg
          className="w-40 h-40"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="logo-ani-A"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M427.999 381.4L314.299 184.467L200.6 381.4H243.805L314.299 259.302L384.793 381.4H427.999Z"
            fill="#E5E5E5"
          />
          <path
            id="logo-ani-H"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M283.186 130.638L169.486 327.572L396.885 327.572L375.283 290.154L234.295 290.154L304.789 168.056L283.186 130.638Z"
            fill="#E5E5E5"
          />
          <path
            id="logo-ani-Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M181.7 381.4L295.4 184.467L68.0003 184.467L89.6032 221.884L230.591 221.884L160.097 343.983L181.7 381.4Z"
            fill="#E5E5E5"
          />
        </svg>
      </div>
    </div>
  );
}
