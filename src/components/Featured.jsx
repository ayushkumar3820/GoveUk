import React from 'react';

const Featured = () => {
  return (
    <section className="pt-6">
      <h2 className="text-[1.85rem] font-bold mb-6">Featured</h2>
      <div className="space-y-6">
        <div className="flex items-start bg-white border rounded-md p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/find-a-job-4d38717b0451da3bb223ddea7f681d79e48c1c022da5a08f16aba3f681503150.png"
            alt="Find a job"
            className="w-12 h-12 object-contain mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              <a href="/find-a-job" className="text-[#4c2c92] font-bold underline hover:underline text-[1.25rem] leading-snug">
                Find a job
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[1.25rem]">
              Search and apply for jobs in England, Scotland and Wales.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white border rounded-md p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/national-insurance-featured-7169e3631b639dcfc7be22469daf155ad0aa7516143ff8cf2e6f95ba29c8656c.png"
            alt="National Insurance"
            className="w-12 h-12 object-contain mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              <a href="/check-national-insurance-record" className="text-[#1D7088] font-bold underline hover:underline text-[1.25rem] leading-snug">
                National Insurance
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[1.25rem]">
              Check your record to see if you can add more contributions.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white border rounded-md p-4 shadow-sm">
          <img
            src="https://www.gov.uk/assets/frontend/homepage/cost-of-living-featured-4cd41cec449e0bd47e707812a5c3b5c52726bed0acb4f31c9b66548cc6ff6309.png"
            alt="Cost of living support"
            className="w-12 h-12 object-contain mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">
              <a href="/cost-of-living-support" className="text-[#1D7088] font-bold underline hover:underline text-[1.25rem] leading-snug">
                Cost of living support
              </a>
            </h3>
            <p className="text-gray-700 mt-1 text-[1.2rem]">
              Find out what support is available to help with the cost of living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
