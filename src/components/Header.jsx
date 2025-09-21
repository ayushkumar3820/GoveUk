/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [logoHighlight, setLogoHighlight] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false); // Close search if menu opens
  };
  const closeMenu = () => setIsMenuOpen(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false); // Close menu if search opens
  };
  const closeSearch = () => setIsSearchOpen(false);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  const handleHeaderSearch = () => {
    console.log("Header search query:", headerSearchQuery);
    closeSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleHeaderKeyPress = (e) => {
    if (e.key === "Enter") handleHeaderSearch();
  };

  return (
    <div className="bg-[#1d70b8] text-white relative">
      <header>
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-2">
          {/* LOGO + GOV.UK - underline on hover for whole group, yellow highlight on click */}
          <button
            className={`flex items-center font-bold text-[18px] gap-2 pb-1 relative group cursor-pointer border-none p-0
              ${
                logoHighlight
                  ? "text-black bg-yellow-400 decoration-black"
                  : "text-white bg-transparent"
              }
            `}
            tabIndex={0}
            onClick={() => setLogoHighlight(!logoHighlight)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 60"
              height="28"
              width="30"
              fill="currentColor"
              className=""
              style={{ verticalAlign: "middle" }}
            >
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
            <span className="text-[29px] pt-[2px]">
              <span className="text-[29px] inline-flex items-center">
                GOV
                <span
                  className={
                    logoHighlight
                      ? "bg-black w-2 h-2 rounded-full inline-block mx-[2px]"
                      : "bg-[#00ffe0] w-2 h-2 rounded-full inline-block mx-[2px]"
                  }
                ></span>
                UK
              </span>
            </span>

            <span
              className={`absolute left-0 right-0 -bottom-[0px] h-[4px] scale-x-0 group-hover:scale-x-100 ${
                logoHighlight ? "bg-black scale-x-100" : "bg-white"
              }`}
            ></span>
          </button>

          {/* Nav */}
          <nav className="flex items-center space-x-6 text-white underline-offset-4 relative">
            {/* Menu Button */}
            <div
              className="relative group"
              style={{ borderRight: "1px solid white" }}
            >
              <button
                onClick={toggleMenu}
                className={`text-sm font-semibold flex items-center gap-1 px-3 cursor-pointer relative py-1 
                    ${
                      isMenuOpen
                        ? "bg-white text-[#1d70b8] -my-3 py-6"
                        : "text-white"
                    }
                  mr-2.5`}
                aria-expanded={isMenuOpen}
                aria-controls="main-menu"
              >
                {/* Up/Down Arrow SVG */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                  aria-hidden="true"
                >
                  <path
                    d={isMenuOpen ? "M7 14l5-5 5 5" : "M7 10l5 5 5-5"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="relative text-[20px]">Menu</span>
                <span className="absolute left-0 right-0 -bottom-[16px] h-[2px] bg-white scale-x-0 group-hover:scale-x-100" />
                </button>
                </div>
                <div className="relative group">
                  <button
                    onClick={toggleSearch}
                    className={`text-sm font-semibold flex items-center gap-1 px-3 cursor-pointer relative py-2 
                        ${
                          isSearchOpen
                            ? "bg-white text-[#1d70b8] -my-3 py-6"
                            : "text-white"
                        }
                      `}
                    aria-expanded={isSearchOpen}
                    aria-controls="header-search"
                  >
                    {isSearchOpen ? (
                  // Close (X) icon when search is open
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="18"
                      y1="6"
                      x2="6"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <line
                      x1="6"
                      y1="6"
                      x2="18"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                ) : (
                  // Search icon when search is closed
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
                )}
                <span className="absolute left-0 right-0 -bottom-[16px] h-[2px] bg-white scale-x-0 group-hover:scale-x-100  " />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Search Dropdown - Full Width */}
      {isSearchOpen && (
        <div
          id="header-search"
          className="relative top-full left-0 right-0 w-full bg-white pt-[30px] pb-[30px]"
        >
          <div className="max-w-5xl mx-auto px-6 py-6">
            <div className="max-w-4xl">
              <label
                htmlFor="header-search-input"
                className="block text-black text-[1.85rem] font-semibold mb-3"
              >
                Search GOV.UK
              </label>
              <div className="flex shadow-lg   border-2 border-black overflow-hidden">
                <input
                  id="header-search-input"
                  type="search"
                  value={headerSearchQuery}
                  onChange={(e) => setHeaderSearchQuery(e.target.value)}
                  onKeyPress={handleHeaderKeyPress}
                  className="flex-1 p-4 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Search GOV.UK"
                  autoFocus
                />
                <button
                  onClick={handleHeaderSearch}
                  className="bg-[#1d70b8] text-white px-6 flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  aria-label="Search"
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
            </div>
          </div>
        </div>
      )}
      
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Hero Section with Search */}
      <section className="pb-[23px] pt-[20px]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.2] mb-8">
            The best place to find <br />
            government services <br />
            and information
          </h1>
          <div className="max-w-2xl">
            <label htmlFor="search-main" className="block text-[20px] mb-2">
              Search
            </label>
            <div className="flex shadow-lg">
              <input
                id="search-main"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 p-4 text-black focus:outline-none focus:ring-4 focus:ring-yellow-300"
                placeholder="Search GOV.UK"
              />
              <button
                onClick={handleSearch}
                className="bg-[#dee0e2] text-[#1d70b8] px-6 flex items-center justify-center hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                aria-label="Search"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
