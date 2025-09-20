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
    <section className="bg-white border-t-4 py-5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[1.85rem] font-bold mb-6 pl-4">Services and information</h2>
        <ul className="divide-y divide-gray-200">
          {listItems.map(({ href, title, description }) => (
           <li key={title} className="py-4 pl-8 flex flex-col">
  <div className="flex items-center justify-between">
    <h3 className="text-[20px] font-bold mb-1">
      <a
        href={href}
        className="group text-[#1D7088] font-bold underline hover:underline text-[1.25rem] leading-snug"
      >
        {title}
      </a>
    </h3>
    <span className="text-[#1D7088] font-bold" style={{ fontSize: "1.8rem" }}>
      ›
    </span>
  </div>
  <p className="text-gray-700 text-[1.2rem]">{description}</p>
</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesAndInfo;
