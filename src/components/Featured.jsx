import React from 'react';

const Featured = () => {
  return (
    <section className="pt-6 px-4 sm:px-6 lg:px-0">
      <h2 className="text-[1.5rem] sm:text-[1.85rem] font-bold mb-4 sm:mb-6">
        Featured
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {/* Featured Item 1 */}
        <div className="flex flex-col sm:flex-row items-start bg-white border rounded-md p-3 sm:p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/find-a-job-4d38717b0451da3bb223ddea7f681d79e48c1c022da5a08f16aba3f681503150.png"
            alt="Find a job"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 sm:mb-0 sm:mr-4 flex-shrink-0"
          />
          <div className="flex-grow">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold">
              <a
                href="/find-a-job"
                className="text-[#1d70b8] font-bold underline hover:underline leading-snug"
              >
                Find a job
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[1rem] sm:text-[1.25rem] leading-relaxed">
              Search and apply for jobs in England, Scotland and Wales.
            </p>
          </div>
        </div>

        {/* Featured Item 2 */}
        <div className="flex flex-col sm:flex-row items-start bg-white border rounded-md p-3 sm:p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/national-insurance-featured-7169e3631b639dcfc7be22469daf155ad0aa7516143ff8cf2e6f95ba29c8656c.png"
            alt="National Insurance"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 sm:mb-0 sm:mr-4 flex-shrink-0"
          />
          <div className="flex-grow">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold">
              <a
                href="/check-national-insurance-record"
                className="text-[#1d70b8] font-bold underline hover:underline leading-snug"
              >
                National Insurance
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[1rem] sm:text-[1.25rem] leading-relaxed">
              Check your record to see if you can add more contributions.
            </p>
          </div>
        </div>

        {/* Featured Item 3 */}
        <div className="flex flex-col sm:flex-row items-start bg-white border rounded-md p-3 sm:p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/cost-of-living-featured-4cd41cec449e0bd47e707812a5c3b5c52726bed0acb4f31c9b66548cc6ff6309.png"
            alt="Cost of living support"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 sm:mb-0 sm:mr-4 flex-shrink-0"
          />
          <div className="flex-grow">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold">
              <a
                href="/cost-of-living-support"
                className="text-[#1d70b8] font-bold underline hover:underline leading-snug"
              >
                Cost of living support
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[0.95rem] sm:text-[1.2rem] leading-relaxed">
              Find out what support is available to help with the cost of living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
