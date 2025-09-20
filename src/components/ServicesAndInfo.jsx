import React from 'react';

const listItems = [
  {
    href: "/browse/benefits",
    title: "Benefits",
    description: "Includes eligibility, appeals, tax credits and Universal Credit"
  },
  {
    href: "/browse/births-deaths-marriages",
    title: "Births, deaths, marriages and care",
    description: "Parenting, civil partnerships, divorce and Lasting Power of Attorney"
  },
  {
    href: "/browse/business",
    title: "Business and self-employed",
    description: "Tools and guidance for businesses"
  },
  {
    href: "/browse/childcare-parenting",
    title: "Childcare and parenting",
    description: "Includes giving birth, fostering, adopting, benefits for children, childcare and schools"
  },
  {
    href: "/browse/citizenship",
    title: "Citizenship and living in the UK",
    description: "Voting, community participation, life in the UK, international projects"
  },
  {
    href: "/browse/justice",
    title: "Crime, justice and the law",
    description: "Legal processes, courts and the police"
  },
  {
    href: "/browse/disabilities",
    title: "Disabled people",
    description: "Includes carers, your rights, benefits and the Equality Act"
  },
  {
    href: "/browse/driving",
    title: "Driving and transport",
    description: "Includes vehicle tax, MOT and driving licences"
  },
  {
    href: "/browse/education",
    title: "Education and learning",
    description: "Includes student loans, admissions and apprenticeships"
  },
  {
    href: "/browse/employing-people",
    title: "Employing people",
    description: "Includes pay, contracts, hiring and redundancies"
  },
  {
    href: "/browse/environment-countryside",
    title: "Environment and countryside",
    description: "Includes flooding, recycling, farming and wildlife"
  },
  {
    href: "/browse/housing-local-services",
    title: "Housing and local services",
    description: "Owning or renting and council services"
  },
  {
    href: "/browse/tax",
    title: "Money and tax",
    description: "Includes debt and Self Assessment"
  },
  {
    href: "/browse/abroad",
    title: "Passports, travel and living abroad",
    description: "Includes renewing passports and travel advice by country"
  },
  {
    href: "/browse/visas-immigration",
    title: "Visas and immigration",
    description: "Apply to visit, work, study, settle or seek asylum in the UK"
  },
  {
    href: "/browse/working",
    title: "Working, jobs and pensions",
    description: "Includes holidays, finding a job and redundancy"
  }
];

const ServicesAndInfo = () => {
  return (
    <section className="w-full">
      {/* Top blue border */}
      <div className="border-t-4 border-[#1d70b8] w-full" />
      <div className="flex flex-col md:flex-row w-full">
        {/* Left: Services and information */}
        <div className="w-full md:w-2/3 px-4 pt-4 pb-8">
          <h2 className="text-[2.15rem] font-bold mb-6 mt-2 leading-tight">Services and information</h2>
          <ul className="divide-y divide-gray-200">
            {listItems.map(({ href, title, description }) => (
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
                <p className="text-[1.15rem] text-gray-700 mt-1.5">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Featured */}
        <div className="w-full md:w-1/2 px-4 pt-4 pb-8">
          <h2 className="text-[2.15rem] font-bold mb-6 mt-2 leading-tight">Featured</h2>
          <div className="space-y-12">
            {/* Featured Item 1 */}
            <div className="flex items-start">
              <img
                src="https://www.gov.uk/assets/frontend/homepage/find-a-job-4d38717b0451da3bb223ddea7f681d79e48c1c022da5a08f16aba3f681503150.png"
                alt="Find a job"
                className="w-20 h-20 object-contain mr-4"
              />
              <div>
                <a
                  href="/find-a-job"
                  className="text-[#4c2c92] font-bold underline hover:underline text-[1.20rem] leading-snug"
                >
                  Find a job
                </a>
                <p className="text-gray-700 text-[1.15rem] mt-1">
                  Search and apply for jobs in England, Scotland and Wales.
                </p>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="flex items-start">
              <img
                src="https://www.gov.uk/assets/frontend/homepage/national-insurance-featured-7169e3631b639dcfc7be22469daf155ad0aa7516143ff8cf2e6f95ba29c8656c.png"
                alt="National Insurance"
                className="w-20 h-20 object-contain mr-4"
              />
              <div>
                <a
                  href="/check-national-insurance-record"
                  className="text-[#1D7088] font-bold underline hover:underline text-[1.20rem] leading-snug"
                >
                  National Insurance
                </a>
                <p className="text-gray-700 text-[1.15rem] mt-1">
                  Check your record to see if you can add more contributions.
                </p>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="flex items-start">
              <img
                src="https://www.gov.uk/assets/frontend/homepage/cost-of-living-featured-4cd41cec449e0bd47e707812a5c3b5c52726bed0acb4f31c9b66548cc6ff6309.png"
                alt="Cost of living support"
                className="w-20 h-20 object-contain mr-4"
              />
              <div>
                <a
                  href="/cost-of-living-support"
                  className="text-[#1D7088] font-bold underline hover:underline text-[1.20rem] leading-snug"
                >
                  Cost of living support
                </a>
                <p className="text-gray-700 text-[1.15rem] mt-1">
                  Find out what support is available to help with the cost of living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom blue border */}
      <div className="border-t-2 border-[#1d70b8] w-full mt-6" />
    </section>
  );
};

export default ServicesAndInfo;
