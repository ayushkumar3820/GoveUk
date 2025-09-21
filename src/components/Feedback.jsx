import React, { useState } from "react";

const Feedback = () => {
  const [isUseful, setIsUseful] = useState(null);

  return (
    <div className="bg-[#f3f6f9] border-t mt-[80px] border-blue-300 py-4 px-2 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-8 px-4">
        {/* Left side: Question + Yes/No */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <span className="font-bold text-black text-[1.06rem] text-center sm:text-left">
            Is this page useful?
          </span>
          {/* Yes Button */}
          <button
            onClick={() => setIsUseful(true)}
            className="px-6 py-2 border-[1px] border-b-[4px] border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
            style={{ minWidth: "90px" }}
          >
            Yes
          </button>
          {/* No Button */}
          <button
            onClick={() => setIsUseful(false)}
            className="px-6 py-2 border-[1px] border-b-[4px] border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
            style={{ minWidth: "90px" }}
          >
            No
          </button>
        </div>

        {/* Right side: Report link */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="/contact/govuk"
            className="px-6 py-2 border-[1px] border-b-[4px] border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
            style={{ minWidth: "240px" }}
          >
            Report a problem with this page
          </a>
        </div>
      </div>

      {isUseful !== null && (
        <p className="text-center mt-4 text-black">Thank you for your feedback</p>
      )}
    </div>
  );
};

export default Feedback;
