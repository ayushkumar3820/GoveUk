import React, { useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="bg-gray-100 border-t border-gray-300 flex flex-wrap pb-[16px] pt-[20px] leading-[33px] px-4 sm:px-8 lg:pr-[250px]"
      aria-label="Cookies on GOV.UK"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[26px] font-bold text-black mb-4">
          Cookies on GOV.UK
        </h2>

        <p className="text-[20px] text-black mb-2">
          We use some essential cookies to make this website work.
        </p>

        <p className="text-[20px] text-black mb-2 leading-relaxed">
          We’d like to set additional cookies to understand how you use GOV.UK,
          <br className="hidden sm:block" />
          remember your settings and improve government services.
        </p>

        <p className="text-[20px] text-black mb-6">
          We also use cookies set by other sites to help us deliver content from
          their services.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsVisible(false)}
            className="bg-[#005A30] hover:bg-[#005A30] text-white px-2 py-1 font-medium text-[20px]"
          >
            Accept additional cookies
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="bg-[#005A30] hover:bg-[#005A30] text-white px-2 py-1 font-medium text-[20px]"
          >
            Reject additional cookies
          </button>
          <a
            href="/help/cookies"
            className="text-[#1D70B8] underline text-[20px] hover:text-[#003078] hover:underline"
          >
            View cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
