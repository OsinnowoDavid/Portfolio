import React from 'react';
import image1 from "../assets/Images/finTech.png"
import image2 from "../assets/Images/banking.png"
import image3 from "../assets/Images/RealEstate.png"
import image4 from "../assets/Images/health.png"
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  bgColor?: string;
  image:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  image,
  description, 
  technologies,
}) => {
  return (
    <div className="bg-[#F9F9F9] border border-[#D9D9D9] rounded-xl p-3 sm:p-4 flex flex-col gap-4 sm:gap-6 md:gap-8 h-auto md:h-[545px] w-full hover:shadow-lg transition-shadow duration-300">
      {/* Image Placeholder */}
      <img 
        className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover flex items-center justify-center"
        src={image}
      >
        </img>
        <div className="text-white text-center px-4">
          <p className="text-sm sm:text-base">Project Preview</p>
          <p className="text-xs sm:text-sm opacity-80 mt-2">{title}</p>
        </div>
  

      {/* Content */}
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-[17px] flex-1">
        {/* Title and Description */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-medium leading-tight md:leading-[34px] text-[#0F1115]">
            {title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-[150%] text-[#323745]">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 sm:py-[3px] bg-[#F1F1F1] rounded-lg text-xs sm:text-sm md:text-base text-[#0F1115] whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projectsData = {
    row1: [
      {
        title: "FinTech Mobile App",
        description: "A comprehensive financial management app with real-time market data, portfolio tracking, and AI-powered investment recommendations.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
        bgColor: "#323745",
        image:image1
      },
      {
        title: "E-commerce Platform",
        description: "A scalable e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout experience.",
        technologies: ["Next.js", "Typescript", "Stripe", "MongoDB"],
        bgColor: "#323745",
        image:image2

        
      },
    
    ],
    row2: [
      {
        title: "Real Estate Platform",
        description: "Modern property listing platform with payment of different types including buying property outrightly with seamless micro-saving user experience ",
        technologies: ["React Native", "Firebase", "React Native", "Node", "PayStack"],
        bgColor: "#323745",
        image:image3

      },
      {
        title: "Healthcare Dashboard",
        description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities for modern healthcare providers.",
        technologies: ["React", "Node", "MySQL", "Stripe"],
        bgColor: "#323745",
        image:image4

      },
  
    ]
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1276px] mx-auto">
        {/* Projects Grid */}
        <div className='mb-3 text-[48px] font-bold'>Our Projects</div>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 ">
            {projectsData.row1.map((project, index) => (
              <ProjectCard key={`row1-${index}`} {...project} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {projectsData.row2.map((project, index) => (
              <ProjectCard key={`row2-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;