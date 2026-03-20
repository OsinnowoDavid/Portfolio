import  { useState } from 'react';
import logo from "../assets/Images/Logo.png"
import office from "../assets/Images/office.jpeg"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm border-b border-white/10 z-50"
    >
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-20 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="">
          <img src={logo} className='object-cover w-40'></img>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:flex items-center gap-12">
          <a href="/rider" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Service
          </a>
          <a href="/driver" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Team
          </a>
          <a href="/safety" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Portfolio
          </a>
          {/* Company with dropdown */}
          <a href="/company">

          <div
            className="relative"
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
                Company
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${
                  showCompanyDropdown ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1F1F1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Dropdown Card */}
            {showCompanyDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[896px] bg-white rounded-2xl  p-5 border-2 border-white z-50">
                <div className="flex gap-8">
                  {/* Left image placeholder */}
                  <div className="w-[303px] h-[208px] bg-[#2D2D2D] rounded-xl overflow-hidden">
                    {/* You can replace with an actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/50">
                      <img src={office} alt="Company" className="object-cover w-full h-full" />
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="flex-1 flex flex-col gap-3">
                    {/* About us */}
                    <div>
                      <h4 className=" font-medium text-[19px] leading-[28px] text-[#2D2D2D]">
                        About us
                      </h4>
                      <p className=" font-normal text-[15px] leading-[22px] text-[#5A5A5A] mt-0.5">
                        We turn everyday mobility into measurable climate progress through
                        responsible transport choices.
                      </p>
                    </div>

                    {/* Contact */}
                    <div>
                      <h4 className=" font-medium text-[19px] leading-[28px] text-[#2D2D2D]">
                        Contact
                      </h4>
                      <p className=" font-normal text-[15px] leading-[22px] text-[#5A5A5A] mt-0.5">
                        Reach out to our team.
                      </p>
                    </div>

                    {/* FAQ */}
                    <div>
                      <h4 className=" font-medium text-[19px] leading-[28px] text-[#2D2D2D]">
                        FAQ
                      </h4>
                      <p className=" font-normal text-[15px] leading-[22px] text-[#5A5A5A] mt-0.5">
                        Find answers to common questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          </a>

        </div>

        {/* Ride Now Button */}
        <button className="relative hidden md:block bg-[#eb5e28] text-white  font-medium text-lg py-3 px-8 rounded-full overflow-hidden group">
          <span className="relative z-10">Ride Now</span>
          <span
            className="absolute w-[17px] h-[292px] bg-white/10 rotate-[21.9deg] left-[147px] -top-[56px] -z-10"
            aria-hidden="true"
          />
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
        >
          <span className="block w-6 h-0.5 bg-[#2D2D2D]"></span>
          <span className="block w-6 h-0.5 bg-[#2D2D2D]"></span>
          <span className="block w-6 h-0.5 bg-[#2D2D2D]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <a href="#" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Service
          </a>
          <a href="#" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Team
          </a>
          <a href="#" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Portfolio
          </a>
          {/* Company link on mobile – no dropdown, just a link */}
          <a href="#" className="text-[#2D2D2D]  font-medium text-lg hover:text-[#eb5e28] transition">
            Company
          </a>
          {/* Mobile Ride Now button */}
          <button className="relative bg-[#eb5e28] text-white  font-medium text-lg py-3 px-8 rounded-full overflow-hidden group w-full mt-2">
            <span className="relative z-10">Ride Now</span>
            <span
              className="absolute w-[17px] h-[292px] bg-white/10 rotate-[21.9deg] left-[147px] -top-[56px] -z-10"
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;