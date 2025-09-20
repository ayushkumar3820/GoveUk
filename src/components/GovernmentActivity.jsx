import React from 'react';

const activityLinks = [
  {
    href: "/government/organisations",
    title: "Departments",
    desc: "Departments, agencies and public bodies",
  },
  {
    href: "/search/news-and-communications",
    title: "News",
    desc: "News stories, speeches, letters and notices",
  },
  {
    href: "/search/guidance-and-regulation",
    title: "Guidance and regulation",
    desc: "Detailed guidance, regulations and rules",
  },
  {
    href: "/search/research-and-statistics",
    title: "Research and statistics",
    desc: "Reports, analysis and official statistics",
  },
  {
    href: "/search/policy-papers-and-consultations",
    title: "Policy papers and consultations",
    desc: "Consultations and strategy",
  },
  {
    href: "/search/transparency-and-freedom-of-information-releases",
    title: "Transparency documents",
    desc: "Data, Freedom of Information releases and corporate reports",
  },
];

const moreLinks = [
  { href: "#", text: "HMRC services: sign in" },
  { href: "#", text: "Check MOT history of a vehicle" },
  { href: "#", text: "Tax your vehicle" },
  { href: "#", text: "Universal Credit" },
  { href: "#", text: "Foreign travel advice" },
  { href: "#", text: "Check your State Pension age" },
  { href: "#", text: "Childcare account: sign in" },
  { href: "#", text: "Student finance: sign in" },
  { href: "#", text: "Self Assessment tax returns" },
  { href: "#", text: "Apply for a passport" },
];

const GovernmentActivity = () => {
  return (
    <section className="w-full">
      {/* Top blue border */}
      <div className="border-t-2 border-[#1d70b8] w-full" />
      <div className="flex flex-col md:flex-row w-full">
        {/* Left: Government activity */}
        <div className="w-full md:w-2/3 px-4 pt-4 pb-8">
          <h2 className="text-[2.15rem] font-bold mb-6 mt-2 leading-tight">
            Government activity
          </h2>
          <p className="mb-6 text-[1.05rem] text-gray-800">
            Find out what the government is doing
          </p>
          <ul className="divide-y divide-gray-200">
            {activityLinks.map(({ href, title, desc }) => (
              <li key={title} className="flex flex-col py-6">
                <div className="flex items-center justify-between">
                  <a
                    href={href}
                    className="text-[#1d70b8] text-[1.20rem] font-semibold underline hover:text-[#003078] hover:underline"
                  >
                    {title}
                  </a>
                  <span
                    className="text-[#1d70b8] text-[2rem] font-bold ml-2"
                    aria-hidden="true"
                  >
                    &rsaquo;
                  </span>
                </div>
                <p className="text-[1.15rem] text-gray-700 mt-1.5">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: More on GOV.UK */}
        <div className="w-full md:w-1/2 px-4 pt-4 pb-8">
          <h2 className="text-[2.15rem] font-bold mb-6 mt-2 leading-tight">
            More on GOV.UK
          </h2>
          <ul className="space-y-4">
            {moreLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="text-[#1d70b8] text-[1.15rem] font-bold underline hover:text-[#003078] hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GovernmentActivity;
