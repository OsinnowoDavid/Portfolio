import { motion } from 'framer-motion';

const ProjectCard = ({ title, type, year }: { title: string, type: string, year: string }) => (
  // Responsively scale the card: from 300px width on mobile to 587px on desktop
  <div className="relative w-[300px] h-[300px] md:w-[587px] md:h-[556px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-[30px] md:rounded-[60px] flex-shrink-0">
    
    {/* Inner Image Placeholder - Responsive sizing */}
    <div className="absolute top-[10px] left-[12px] md:top-[20px] md:left-[24px] w-[276px] h-[170px] md:w-[539px] md:h-[337px] bg-white border border-[#323745] rounded-[30px] md:rounded-[60px]" />
    
    {/* Text Info */}
    <div className="absolute top-[200px] left-[20px] md:top-[386px] md:left-[24px] flex flex-col gap-[5px] md:gap-[20px]">
      <h3 className="font-['Inter'] font-medium text-[18px] md:text-[28px] text-black">{title}</h3>
      <p className="font-['Inter'] font-normal text-[18px] md:text-[28px] text-[#323745]">{type}</p>
    </div>
    
    <span className="absolute bottom-[20px] right-[20px] md:bottom-[48px] md:right-[24px] font-['Inter'] font-normal text-[18px] md:text-[28px] text-[#323745]">
      {year}
    </span>
  </div>
);

export function Services() {
  const cards = [
    { title: "Sample 1", type: "Web app", year: "2025" },
    { title: "Sample 2", type: "Web app", year: "2025" },
    { title: "Sample 3", type: "Web app", year: "2025" },
  ];

  return (
    // Responsive container padding
    <div className="w-full overflow-hidden py-8 md:py-16 bg-white">
      <motion.div 
        className="flex gap-[15px] md:gap-[20px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      >
        {[...cards, ...cards].map((card, i) => (
          <ProjectCard key={i} {...card} />
        ))}
      </motion.div>
    </div>
  );
}
export default Services
