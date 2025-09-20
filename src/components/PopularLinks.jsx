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
    <section className="py-8  pl-[11rem] pr-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[2.25rem] font-bold mb-6">Popular on GOV.UK</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {links.map((link, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                <FiArrowRight className="text-black w-12 h-8" />
              </span>
              <a
                href={link.href}
                className="text-[#1D7088] font-bold underline hover:text-[#1D7088] text-[1.25rem]"
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
