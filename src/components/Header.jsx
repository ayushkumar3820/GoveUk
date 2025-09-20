import React, { useState } from "react";
import Menu from "./Menu"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-[#1d70b8]">
        <div className="max-w-7xl mx-auto flex justify-between items-center pl-[9rem] pr-6 py-3 hover:underline">
          <a href="/" className="flex items-center text-white text-[32px] font-bold gap-2">
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
            <span>
              GOV <span className="text-[#00ffe0]">·</span> UK
            </span>
          </a>

          {/* Right Menu */}
          <nav className="flex items-center space-x-6 text-white">
            <button 
              onClick={toggleMenu}
              className="text-sm font-semibold flex items-center hover:underline"
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
            >
              ▼ Menu
            </button>
            <h1>|</h1>
            <a href="/search" className="text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.0161"
                  cy="11.0161"
                  r="8.51613"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="17.8668"
                  y1="17.3587"
                  x2="26.4475"
                  y2="25.9393"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Menu Component */}
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Hero Section */}
      <section className="bg-[#1d70b8] text-white pb-[23px]">
        <div className="maxWidth mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-8">
            The best place to find <br />
            government services <br />
            and information
          </h1>

          {/* Search Form */}
          <form className="max-w-2xl text-[20px]" action="/search/all" method="get">
            <div className="flex shadow-lg">
              <input
                id="search-main"
                type="search"
                className="w-full p-4 text-black focus:outline-none"
                placeholder="Search GOV.UK"
              />
              <button
                type="submit"
                className="bg-[#dee0e2] text-[#1d70b8] px-5 flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.0161"
                    cy="11.0161"
                    r="8.51613"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <line
                    x1="17.8668"
                    y1="17.3587"
                    x2="26.4475"
                    y2="25.9393"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Header;