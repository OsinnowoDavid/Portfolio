import React, { useState, useEffect } from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  details?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  bgColor,
  details 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full md:w-[220px] lg:w-[200px] xl:w-[220px] h-[200px] md:h-[304px] flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotated Card */}
      <div 
        className="w-full h-full rounded-2xl md:rounded-3xl flex items-center justify-center transform md:-rotate-90 transition-all duration-300 shadow-sm hover:shadow-xl"
        style={{ backgroundColor: bgColor }}
      >
        <div className="md:transform md:rotate-90 text-center md:text-left px-4 md:px-3 lg:px-4">
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
            <span className="text-xl md:text-2xl font-semibold text-black opacity-80">
              {number}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold text-black">
              {title}
            </h3>
            <p className={`text-sm md:text-base text-[#323745] max-w-[200px] md:max-w-[200px] lg:max-w-[220px] text-center md:text-left transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
              {description}
            </p>
            {details && isHovered && (
              <p className="text-xs text-[#323745] mt-2 max-w-[200px] md:max-w-[200px] lg:max-w-[220px] text-center md:text-left animate-fadeIn">
                {details}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState(4);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your needs and goals",
      details: "Market research, stakeholder interviews, and requirements gathering",
      bgColor: "#FAF6F3"
    },
    {
      number: "02",
      title: "Design",
      description: "Creating and mapping out wireframes and mockups",
      details: "UI/UX design, prototyping, and user flow validation",
      bgColor: "#EDF2FE"
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with best practices",
      details: "Agile development, code reviews, and continuous integration",
      bgColor: "#FFF5F6"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Testing, Deployment, support and Maintenance",
      details: "Quality assurance, deployment, and 24/7 technical support",
      bgColor: "#F0F5F4"
    }
  ];

  // Adjust visible steps based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSteps(4);
      } else {
        setVisibleSteps(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full bg-[#F9F9F9] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[82px]">
      <div className="max-w-[1276px] mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight lg:leading-[58px] text-[#0F1115] max-w-[1095px] mx-auto md:mx-0">
            Our Development Process
          </h2>
          <p className="text-base sm:text-lg text-[#323745] mt-3 max-w-2xl mx-auto md:mx-0">
            A systematic approach to deliver exceptional digital products
          </p>
        </div>

        {/* Desktop Layout: Flexible Grid without Scrollbar */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 xl:gap-6">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* Mobile/Tablet Layout: Stacked Cards */}
        <div className="md:hidden">
          <div className="flex flex-col gap-4">
            {processSteps.slice(0, visibleSteps).map((step, index) => (
              <div 
                key={index}
                className="w-full rounded-2xl p-5 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                style={{ backgroundColor: step.bgColor }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Step Number with Animation */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#323745] leading-relaxed">
                      {step.description}
                    </p>
                    {step.details && (
                      <p className="text-xs text-[#323745] opacity-75 mt-2 sm:mt-3">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Animated Connector Line */}
                {index < processSteps.slice(0, visibleSteps).length - 1 && (
                  <div className="flex justify-center mt-3 sm:mt-4">
                    <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href='https://wa.me/2348135880678' className="px-6 sm:px-8 py-3 bg-[#0F1115] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span>Start Your Project </span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
        
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;