import uiux from "../assets/Images/UIUX.png";
import security from "../assets/Images/security.png";
import brand from "../assets/Images/brand.png";
import app from "../assets/Images/app.png";
import web from "../assets/Images/web.png";

const ServiceSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 w-full min-h-screen">
      <div className="max-w-[1276px] mx-auto w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-12 overflow-hidden">
          <h2 className=" font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F1115] leading-tight">
            Transforming ideas into impactful digital experiences built for growth and performance.
          </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Main Large Card - Branding */}
          <div className="bg-white border border-[#F1F1F1] rounded-[16px] p-6 sm:p-8 h-auto md:h-[710px] w-full flex flex-col">
            <div className="text-xl sm:text-2xl font-bold mb-3">Branding & Digital Identity</div>
            <div className="text-[#323745] text-base sm:text-lg md:text-xl leading-relaxed">
              We create cohesive digital identities that help brands stand out in competitive markets.
            </div>
            <div className="flex-1 flex items-end justify-center mt-6 md:mt-8">
              <img 
                className="max-w-full h-auto object-contain" 
                src={brand} 
                alt="Branding"
              />
            </div>
          </div>

          {/* Secondary Stacked Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* UI/UX Design Card */}
            <div className="bg-white border border-[#F1F1F1] rounded-[16px] p-6 sm:p-8 h-auto md:h-[350px] w-full flex flex-col overflow-hidden">
              <div className="text-xl sm:text-2xl font-bold mb-3">UI/UX Design</div>
              <div className="text-[#323745] text-sm sm:text-base leading-relaxed">
                Intuitive and visually engaging interfaces that enhance user interaction and elevate digital experiences. 
                Through thoughtful research, wireframing, prototyping, and modern UI design
              </div>
              <div className="flex justify-end mt-4 md:mt-3">
                <img 
                  className="object-contain max-w-full h-auto md:max-w-[80%] lg:ml-auto" 
                  src={uiux} 
                  alt="UI/UX Design"
                />
              </div>
            </div>

            {/* Security & Maintenance Card */}
            <div className="bg-white border border-[#F1F1F1] rounded-[16px] p-6 sm:p-2 h-auto md:h-[350px] w-full flex flex-col overflow-hidden">
              <div className="text-xl sm:text-2xl font-bold mb-3">Security & Maintenance</div>
              <div className="text-[#323745] text-sm sm:text-base leading-relaxed">
                Our partnership doesn't end after launch. We provide ongoing maintenance, updates, and technical support 
                to ensure your digital products remain secure, efficient, and ready to scale as your business evolves.
              </div>
              <div className="flex justify-end mt-8 md:mt-2">
                <img 
                  className="object-contain max-w-full h-auto md:max-w-[80%] lg:ml-auto" 
                  src={security} 
                  alt="Security"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Mobile & Web Development */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5">
          {/* Mobile App Development Card */}
          <div className="rounded-[16px] bg-white p-6 sm:p-8 flex-1 border border-[#F1F1F1] flex flex-col overflow-hidden">
            <div className="text-xl sm:text-2xl font-bold mb-3">
              Mobile App Development
            </div>
            <div className="text-[#323745] text-base sm:text-lg md:text-xl leading-relaxed">
              We build powerful mobile applications for iOS and Android that deliver seamless user 
              experiences and scalable performance.
            </div>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img 
                className="max-w-full h-auto object-contain" 
                src={app} 
                alt="Mobile App Development"
              />
            </div>
          </div>

          {/* Web App Development Card */}
          <div className="rounded-[16px] bg-white p-6 sm:p-8 flex-1 border border-[#F1F1F1] flex flex-col">
            <div className="text-xl sm:text-2xl font-bold mb-3">
              Web App Development
            </div>
            <div className="text-[#323745] text-base sm:text-lg md:text-xl leading-relaxed">
              We develop robust web applications. From dashboards and SaaS platforms to enterprise 
              systems and custom tools.
            </div>
            <div className="flex justify-center items-center mt-6 md:mt-8">
              <img 
                className="max-w-full h-auto object-contain" 
                src={web} 
                alt="Web App Development"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;