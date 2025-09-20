import React from "react";
import CookieBanner from "./components/CookieBanner";
import Header from "./components/Header";
import PopularLinks from "./components/PopularLinks";
import ServicesAndInfo from "./components/ServicesAndInfo";
import Featured from "./components/Featured";
import GovernmentActivity from "./components/GovernmentActivity";
// import MoreOnGovuk from './components/MoreOnGovuk';
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import AllserviceAndInfo from "./components/AllserviceAndInfo";

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

        <div className="max-w-7xl mx-auto pl-[160px] pr-[-20px]">
          <div className="md:col-span-3">
            <ServicesAndInfo />
            <GovernmentActivity />
            <Feedback />
          </div>
        </div>
      </main>
      <div className="border-t-8 border-[#1d70b8] mt-0">
        <div className="max-w-7xl mx-auto pl-[70px] pr-[-20px]">
          <div className="md:col-span-3">
            <AllserviceAndInfo />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
