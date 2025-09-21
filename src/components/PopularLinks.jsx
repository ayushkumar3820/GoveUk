import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PopularLinks = () => {
  const links = [
    { href: "/log-in-register-hmrc-online-services", text: "HMRC account: sign in or set up" },
    { href: "/evisa", text: "eVisas: access and use your online immigration status" },
    { href: "/sign-in-universal-credit", text: "Universal Credit account: sign in" },
    { href: "/personal-tax-account", text: "Personal tax account: sign in or set up" },
    { href: "/sign-in-childcare-account", text: "Childcare account: sign in" },
    { href: "/check-state-pension", text: "Check your State Pension forecast" },
  ];

  return (
    <section className="py-8  px-4 sm:px-6 lg:px-24 lg:pl-[250px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Popular on GOV.UK
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {links.map((link, index) => (
            <li
              key={index}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="bg-gray-100 rounded-full p-2 sm:p-3 flex items-center justify-center shrink-0">
                <FiArrowRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <a
                href={link.href}
                className="text-[#1d70b8] font-bold underline hover:text-[#004488] text-base sm:text-lg md:text-xl"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularLinks;
