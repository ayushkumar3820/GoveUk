import React from 'react';
import '../../src/index.css'; 

const GovernmentActivity = () => {
  return (
    <section className="gov-section">
      <div className="gov-container">
        {/* Left Column */}
        <div className="gov-left">
          <h2 className="gov-heading-l">Government activity</h2>
          <p className="gov-subheading">Find out what the government is doing</p>
          <ul className="gov-list">
            <li>
              <div className="gov-item">
                <div>
                  <a href="/government/organisations" className="gov-link">Departments</a>
                  <p className="gov-desc">Departments, agencies and public bodies</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
            <li>
              <div className="gov-item">
                <div>
                  <a href="/search/news-and-communications" className="gov-link">News</a>
                  <p className="gov-desc">News stories, speeches, letters and notices</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
            <li>
              <div className="gov-item">
                <div>
                  <a href="/search/guidance-and-regulation" className="gov-link">Guidance and regulation</a>
                  <p className="gov-desc">Detailed guidance, regulations and rules</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
            <li>
              <div className="gov-item">
                <div>
                  <a href="/search/research-and-statistics" className="gov-link">Research and statistics</a>
                  <p className="gov-desc">Reports, analysis and official statistics</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
            <li>
              <div className="gov-item">
                <div>
                  <a href="/search/policy-papers-and-consultations" className="gov-link">Policy papers and consultations</a>
                  <p className="gov-desc">Consultations and strategy</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
            <li>
              <div className="gov-item">
                <div>
                  <a href="/search/transparency-and-freedom-of-information-releases" className="gov-link">Transparency documents</a>
                  <p className="gov-desc">Data, Freedom of Information releases and corporate reports</p>
                </div>
                <span className="gov-arrow">›</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="gov-right">
          <h2 className="gov-heading-l">More on GOV.UK</h2>
          <ul className="gov-right-list">
            <li><a href="#" className="gov-link">HMRC services: sign in</a></li>
            <li><a href="#" className="gov-link">Check MOT history of a vehicle</a></li>
            <li><a href="#" className="gov-link">Tax your vehicle</a></li>
            <li><a href="#" className="gov-link">Universal Credit</a></li>
            <li><a href="#" className="gov-link">Foreign travel advice</a></li>
            <li><a href="#" className="gov-link">Check your State Pension age</a></li>
            <li><a href="#" className="gov-link">Childcare account: sign in</a></li>
            <li><a href="#" className="gov-link">Student finance: sign in</a></li>
            <li><a href="#" className="gov-link">Self Assessment tax returns</a></li>
            <li><a href="#" className="gov-link">Apply for a passport</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GovernmentActivity;
