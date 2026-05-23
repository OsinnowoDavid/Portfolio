import  { useState } from 'react';
import logo from "../assets/Images/techDeal.IT.jpeg"
const navLinks = [
  { name: 'Services', href: '#' },
  { name: 'Process', href: '#' },
  { name: 'Contact us', href: '#' },
];

export  function Navbar() {
  const [active, setActive] = useState('Services');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[1200px] h-[80px] lg:h-[120px] bg-[#1E1E1E] rounded-[100px] flex items-center justify-between px-6 lg:px-16 z-50 transition-all">
      
      {/* Logo */}
      <img src={logo} className="flex flex-col items-center gap-1 object-cover w-[134px]">

      </img>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={` text-[24px] transition-colors duration-300 cursor-pointer ${
              active === link.name ? 'text-[#F1F1F1] font-bold' : 'text-[#888888] hover:text-[#FFFFFF]'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="hidden lg:flex items-center gap-2 py-3 px-6 bg-[#F1F1F1] rounded-[100px] hover:scale-105 transition-transform">
        <span className=" font-semibold text-[18px] lg:text-[24px] text-[#0F1115]">Book a Call</span>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5668 12.3744L12.0209 21.9203M21.9204 20.5061C21.9204 20.5061 23.0383 13.1388 21.9204 12.0208C20.8024 10.9029 13.4351 12.0208 13.4351 12.0208" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[130px] left-0 w-full bg-[#1E1E1E] rounded-3xl p-8 flex flex-col items-center gap-6 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-xl">{link.name}</a>
          ))}
          <button className="bg-[#F1F1F1] px-6 py-3 rounded-full font-bold">Book a Call</button>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5668 12.3744L12.0209 21.9203M21.9204 20.5061C21.9204 20.5061 23.0383 13.1388 21.9204 12.0208C20.8024 10.9029 13.4351 12.0208 13.4351 12.0208" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      )}
    </nav>
  );
}
export default Navbar;