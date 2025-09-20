import React, { useState } from "react";

const Feedback = () => {
  const [isUseful, setIsUseful] = useState(null);

  return (
    <div className="bg-[#f3f6f9] border-t border-gray-300 py-4" style={{"padding-right":"300px"}}>
      <div className="max-w-7xl mx-auto flex flex-row justify-center items-center px-4 space-x-8">
        {/* Left side: Question + Yes/No */}
        <div className="flex items-center space-x-4">
          <span className="font-bold text-black text-[1.06rem]">Is this page useful?</span>
          {/* Yes Button */}
          <button
            onClick={() => setIsUseful(true)}
            className="px-6 py-2 border border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
            style={{ minWidth: "90px" }}
          >
            Yes
          </button>
          {/* No Button */}
          <button
            onClick={() => setIsUseful(false)}
            className="px-6 py-2 border border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
            style={{ minWidth: "90px" }}
          >
            No
          </button>
        </div>
        {/* Right side: Report link */}
        <a
          href="/contact/govuk"
          className="px-6 py-2 border border-black text-black bg-white font-normal leading-tight rounded-none shadow-none hover:bg-gray-100 transition duration-150"
          style={{ minWidth: "240px", marginLeft: "64px" }}
        >
          Report a problem with this page
        </a>
      </div>
      {/* Thank you message */}
      {isUseful !== null && (
        <p className="text-center mt-4 text-black">Thank you for your feedback</p>
      )}
    </div>
  );
};

export default Feedback;
