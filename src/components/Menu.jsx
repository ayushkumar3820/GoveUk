import React from 'react';

const Menu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-white border-t border-gray-300 pl-[280px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          
          {/* Services and Information Section */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              Services and information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              <div className="space-y-2">
                <a href="/benefits" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Benefits
                </a>
                <a href="/births-deaths-marriages" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Births, deaths, marriages and care
                </a>
                <a href="/business" className="block underline text-[#1d70b8] font-bold  hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Business and self-employed
                </a>
                <a href="/childcare" className="block underline text-[#1d70b8] font-bold  hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Childcare and parenting
                </a>
                <a href="/citizenship" className="block underline text-[#1d70b8] font-bold  hover:text-[#003078] hover:underline text-[1em] leading-relaxed">
                  Citizenship and living in the UK
                </a>
                <a href="/crime-justice" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Crime, justice and the law
                </a>
                <a href="/disabled-people" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Disabled people
                </a>
                <a href="/driving" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Driving and transport
                </a>
              </div>
              
              <div className="space-y-2">
                <a href="/education" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Education and learning
                </a>
                <a href="/employment" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Employing people
                </a>
                <a href="/environment" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Environment and countryside
                </a>
                <a href="/housing" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Housing and local services
                </a>
                <a href="/money" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Money and tax
                </a>
                <a href="/passports" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Passports, travel and living abroad
                </a>
                <a href="/visas" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Visas and immigration
                </a>
                <a href="/working" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Working, jobs and pensions
                </a>
              </div>
            </div>
          </div>

          {/* Government Activity Section */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              Government activity
            </h3>
            <div className="space-y-3">
              <div>
                <a href="/departments" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Departments
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  Departments, agencies and public bodies
                </p>
              </div>
              
              <div>
                <a href="/news" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  News
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  News stories, speeches, letters and notices
                </p>
              </div>
              
              <div>
                <a href="/guidance" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem] leading-relaxed">
                  Guidance and regulation
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  Detailed guidance, regulations and rules
                </p>
              </div>
              
              <div>
                <a href="/research" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem]  leading-relaxed">
                  Research and statistics
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  Reports, analysis and official statistics
                </p>
              </div>
              
              <div>
                <a href="/policy" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem]  leading-relaxed">
                  Policy papers and consultations
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  Consultations and strategy
                </p>
              </div>
              
              <div>
                <a href="/transparency" className="block underline text-[#1d70b8] font-bold hover:text-[#003078] hover:underline text-[1rem]  leading-relaxed">
                  Transparency
                </a>
                <p className="text-[1rem] text-gray-600 mt-1">
                  Data, Freedom of Information releases and corporate reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;