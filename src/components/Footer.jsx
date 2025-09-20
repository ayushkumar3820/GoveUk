// Footer.jsx
import React from "react";

const Footer = () => (
  <>
   <hr className="bg-[#1d70b8]"/>
  <footer className="bg-white py-10 font-sans text-[21px] " style={{"padding-left":"200px"}}>
   
    <div className="max-w-7xl mx-auto px-4">
      {/* GOV.UK Crown SVG */}
      <div className="flex justify-start mb-8">
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
      </div>
      {/* Main Footer Navigation Sections */}
      <div className="md:flex justify-between mb-8">
        {/* Services and Information */}
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Services and information</h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {/* 16 Column links */}
            {[
              { text: "Benefits", href: "/browse/benefits" },
              { text: "Births, death, marriages and care", href: "/browse/births-deaths-marriages" },
              { text: "Business and self-employed", href: "/browse/business" },
              { text: "Childcare and parenting", href: "/browse/childcare-parenting" },
              { text: "Citizenship and living in the UK", href: "/browse/citizenship" },
              { text: "Crime, justice and the law", href: "/browse/justice" },
              { text: "Disabled people", href: "/browse/disabilities" },
              { text: "Driving and transport", href: "/browse/driving" },
              { text: "Education and learning", href: "/browse/education" },
              { text: "Employing people", href: "/browse/employing-people" },
              { text: "Environment and countryside", href: "/browse/environment-countryside" },
              { text: "Housing and local services", href: "/browse/housing-local-services" },
              { text: "Money and tax", href: "/browse/tax" },
              { text: "Passports, travel and living abroad", href: "/browse/abroad" },
              { text: "Visas and immigration", href: "/browse/visas-immigration" },
              { text: "Working, jobs and pensions", href: "/browse/working" }
            ].map((item) => (
              <li key={item.text}>
                <a href={item.href} className="text-black underline hover:underline">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Government activity */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Government activity</h2>
          <ul className="space-y-2">
            {[
              { text: "Departments", href: "/government/organisations" },
              { text: "News", href: "/search/news-and-communications" },
              { text: "Guidance and regulation", href: "/search/guidance-and-regulation" },
              { text: "Research and statistics", href: "/search/research-and-statistics" },
              { text: "Policy papers and consultations", href: "/search/policy-papers-and-consultations" },
              { text: "Transparency", href: "/search/transparency-and-freedom-of-information-releases" },
              { text: "How government works", href: "/government/how-government-works" },
              { text: "Get involved", href: "/government/get-involved" },
            ].map((item) => (
              <li key={item.text}>
                <a href={item.href} className="text-black underline">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Divider */}
     
     <hr className="my-6 bg-red-800" />

{/* Support links and Copyright */}
<div className="md:flex md:justify-between items-start text-[20px] text-gray-800">
  {/* Left Side */}
  <div>
    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3 md:mb-4">
      <a href="/help" className="text-black underline">Help</a>
      <a href="/help/privacy-notice" className="text-black underline">Privacy</a>
      <a href="/help/cookies" className="text-black underline">Cookies</a>
      <a href="/help/accessibility-statement" className="text-black underline">
        Accessibility statement
      </a>
      <a href="/contact" className="text-black underline">Contact</a>
      <a href="/help/terms-conditions" className="text-black underline">
        Terms and conditions
      </a>
      <a href="/cymraeg" className="text-black underline">
        Rhestr o Wasanaethau Cymraeg
      </a>
      <a
        href="/government/organisations/government-digital-service"
        className="text-black underline"
      >
         Government Digital Service
      </a>
    </div>

    {/* OGL Section */}
    <p className="font-bold mb-1">OGL</p>
    <p className="text-gray-700  text-[20px]">
      All content is available under the
      <a
        href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        className="text-black underline ml-1"
      >
        Open Government Licence v3.0
      </a>
      , except where otherwise stated
    </p>
  </div>

  {/* Right Side */}
  <div className="mt-6 md:mt-0 text-center md:text-right">
    <img
      src="https://user-auth.apply-to-visit-or-stay-in-the-uk.homeoffice.gov.uk/auth/resources/7t40d/login/eua-gds/assets/images/govuk-crest.svg" // <-- put crown logo in public/ folder
      alt="Crown Logo"
      className="mx-auto md:ml-auto mb-2 w-128"
    />
    <p className="whitespace-nowrap">
  <a
    href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
    className="text-black underline inline"
  >
    © Crown copyright
  </a>
</p>

  </div>
</div>

    </div>
  </footer>
  </>
);

export default Footer;
