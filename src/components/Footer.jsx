import React from "react";

const Footer = () => (
  <footer className="bg-white text-[16px] font-sans w-full py-8">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left: Links and OGL */}
        <div className="flex-0">
          <nav className="mb-1">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-base">
              <li>
                <a href="/help" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Help</a>
              </li>
              <li>
                <a href="/help/privacy-notice" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Privacy</a>
              </li>
              <li>
                <a href="/help/cookies" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Cookies</a>
              </li>
              <li>
                <a href="/help/accessibility-statement" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Accessibility statement</a>
              </li>
              <li>
                <a href="/contact" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Contact</a>
              </li>
              <li>
                <a href="/help/terms-conditions" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Terms and conditions</a>
              </li>
            </ul>
          </nav>
          
          <div className="mb-1">
            <a href="/cymraeg" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Rhestr o Wasanaethau Cymraeg</a>
            &nbsp;&nbsp;<a href="/government/organisations/government-digital-service" className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Government Digital Service</a>
          </div>

          <div>
            <div className="font-extrabold text-[20px] text-black">OGL</div>
            <div className="text-black">
              All content is available under the{" "}
              <a
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]"
              >
                Open Government 
              </a>
            </div>
            <div className="mb-1">
              <a href="#"
                className="text-black underline decoration-2 underline-offset-2 hover:text-[#1D70B8]">Licence v3.0</a>
              ,&nbsp;except where otherwise stated
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <img
            src="https://user-auth.apply-to-visit-or-stay-in-the-uk.homeoffice.gov.uk/auth/resources/7t40d/login/eua-gds/assets/images/govuk-crest.svg"
            alt="Crown Logo"
            className="w-[125px] h-auto mb-3"
          />
          <a
            href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
            className="text-black underline hover:text-[#1D70B8] text-base"
          >
            © Crown copyright
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;