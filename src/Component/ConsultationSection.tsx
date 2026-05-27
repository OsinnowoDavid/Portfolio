import React from 'react';
import office from "../assets/Images/office.jpeg"
const ConsultationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0F1115] py-16 sm:py-20 md:py-24 lg:py-[80px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[82px]">
      <div className="max-w-7xl mx-auto">
        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium leading-tight lg:leading-[58px] text-[#F1F1F1] max-w-full lg:max-w-[598px]">
                Book Your Free Consultation
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed lg:leading-[29px] text-[#F1F1F1] max-w-full lg:max-w-[578px]">
                Talk to our experts and explore how we can create scalable, high-performance digital solutions for your business.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start mt-2 sm:mt-4">
                <button className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#F1F1F1] rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl w-full sm:w-auto">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#0F1115]">
                    Book free consultation
                  </span>
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-45"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="#0F1115" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full lg:w-auto mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl lg:rounded-[60px] shadow-2xl group">
              <img 
                src={office}
                alt="Business consultation meeting"
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[402px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;