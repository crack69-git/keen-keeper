import React from 'react';

const NothingSection = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
        {/* <!-- Icon --> */}
        <div class="flex justify-center mb-4">
          <div class="bg-gray-200 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17v-6h6v6m-7 4h8a2 2 0 002-2V7l-5-4H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* <!-- Title --> */}
        <h2 class="text-xl font-semibold text-gray-800">No Data Available</h2>

        {/* <!-- Description --> */}
        <p class="text-gray-500 mt-2 text-sm">
          There’s nothing to show here right now.
        </p>
      </div>
    </div>
  );
};

export default NothingSection;
