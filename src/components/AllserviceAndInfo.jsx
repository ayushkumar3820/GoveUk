import React from "react";

const servicesItems = [
  { href: "/browse/benefits", title: "Benefits" },
  { href: "/browse/education", title: "Education and learning" },
  {
    href: "/browse/births-deaths-marriages",
    title: "Births, deaths, marriages and care",
  },
  { href: "/browse/employing-people", title: "Employing people" },
  { href: "/browse/business", title: "Business and self-employed" },
  {
    href: "/browse/environment-countryside",
    title: "Environment and countryside",
  },
  { href: "/browse/childcare-parenting", title: "Childcare and parenting" },
  {
    href: "/browse/housing-local-services",
    title: "Housing and local services",
  },
  { href: "/browse/citizenship", title: "Citizenship and living in the UK" },
  { href: "/browse/tax", title: "Money and tax" },
  { href: "/browse/justice", title: "Crime, justice and the law" },
  { href: "/browse/abroad", title: "Passports, travel and living abroad" },
  { href: "/browse/disabilities", title: "Disabled people" },
  { href: "/browse/visas-immigration", title: "Visas and immigration" },
  { href: "/browse/driving", title: "Driving and transport" },
  { href: "/browse/working", title: "Working, jobs and pensions" },
];

const governmentItems = [
  { href: "/government/organisations", title: "Departments" },
  { href: "/search/news-and-communications", title: "News" },
  { href: "/search/guidance-and-regulation", title: "Guidance and regulation" },
  { href: "/search/research-and-statistics", title: "Research and statistics" },
  {
    href: "/search/policy-papers-and-consultations",
    title: "Policy papers and consultations",
  },
  {
    href: "/search/transparency-and-freedom-of-information-releases",
    title: "Transparency",
  },
  { href: "/government/how-government-works", title: "How government works" },
  { href: "/government/get-involved", title: "Get involved" },
];
const AllserviceAndInfo = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto px-4" >
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation" viewBox="0 0 64 60" height="30" width="32" fill="currentColor">
              <g>
                <circle cx="20" cy="17.6" r="3.7" />
                <circle cx="10.2" cy="23.5" r="3.7" />
                <circle cx="3.7" cy="33.2" r="3.7" />
                <circle cx="31.7" cy="30.6" r="3.7" />
                <circle cx="43.3" cy="17.6" r="3.7" />
                <circle cx="53.2" cy="23.5" r="3.7" />
                <circle cx="59.7" cy="33.2" r="3.7" />
                <circle cx="31.7" cy="30.6" r="3.7" />
                <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z" />
              </g>
            </svg>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Services and information */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-4">
              <h2 className="text-2xl font-bold text-black leading-tight">
                Services and information
              </h2>
            </div>

            {/* Blue underline */}
            <div className="border-b-[1.5px] border-[#1D70B8] mb-6"></div>

            {/* Two column layout for services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {servicesItems.map(({ href, title }) => (
                <div key={title} className="py-2">
                  <a
                    href={href}
                    className="text-black underline hover:text-[#1D70B8] text-base leading-relaxed block"
                  >
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Government activity */}
          <div className="w-full lg:w-80 self-start mt-0">
            <h2 className="text-2xl font-bold text-black leading-tight mb-4">
              Government activity
            </h2>

            {/* Blue underline */}
            <div className="border-b-[1.5px] border-[#1D70B8] mb-6"></div>

            {/* Single column for government items */}
            <div className="space-x-1">
              {governmentItems.map(({ href, title }) => (
                <div key={title} className="py-2">
                  <a
                    href={href}
                    className="text-black underline hover:text-[#1D70B8] text-base leading-relaxed block"
                  >
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllserviceAndInfo;
