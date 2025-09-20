import React from 'react';
import CookieBanner from './components/CookieBanner';
import Header from './components/Header';
import PopularLinks from './components/PopularLinks';
import ServicesAndInfo from './components/ServicesAndInfo';
import Featured from './components/Featured';
import GovernmentActivity from './components/GovernmentActivity';
// import MoreOnGovuk from './components/MoreOnGovuk';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CookieBanner />
      <Header />

      {/* Hero Section */}
      <main id="content" className="flex-grow bg-white">
       
        {/* Popular Links */}
        <PopularLinks />

        {/* Services & Featured */}
        <div className="border-t-4 border-[#1d70b8] mt-8">
          <div className="max-w-7xl mx-auto pl-[110px] pr-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ServicesAndInfo />
            </div>
            <div>
              <Featured />
            </div>
          </div>
        </div>

        {/* Government Activity & More on GOV.UK */}
        <div className="border-t-4 border-[#1d70b8] mt-8">
          <div className="">
            <div className="md:col-span-2">
              <GovernmentActivity />
            </div>
            <div>
              {/* <MoreOnGovuk /> */}
            </div>
          </div>
        </div>
      </main>

      <Feedback />
         <div className="border-t-4 border-[#1d70b8] mt-8">

      <Footer />
         </div>
    </div>
  );
}

export default App;
