import React from 'react';
import Owen from "../assets/Images/Owen.jpeg"
import Daniel from "../assets/Images/Daniel.jpeg"
import David from "../assets/Images/David.jpeg"
import Olamide from "../assets/Images/Olamide.png"
interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  skills,
  imageUrl,
  socialLinks
}) => {
  return (
    <div className="group bg-[#F9F9F9] border border-[#D9D9D9] rounded-2xl p-3 sm:p-4 flex flex-col gap-4 sm:gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#323745] to-[#1a1d24]">
            <div className="text-white text-center">
              <div className="text-4xl mb-2">👤</div>
              <p className="text-sm font-medium">{name.split(' ')[0]}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Name and Role */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium text-[#0F1115] mb-1">
            {name}
          </h3>
          <p className="text-base sm:text-lg text-[#323745]">
            {role}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#323745] leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 bg-[#F1F1F1] rounded-lg text-xs sm:text-sm text-[#0F1115] whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        {(socialLinks?.github || socialLinks?.linkedin || socialLinks?.email) && (
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.github && (
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#0F1115] transition-colors duration-300"
                aria-label={`${name}'s GitHub`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.296 2.75-1.026 2.75-1.026.544 1.378.201 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#777777] hover:text-[#0077b5] transition-colors duration-300"
                aria-label={`${name}'s LinkedIn`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
                </svg>
              </a>
            )}
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`}
                className="text-[#777777] hover:text-[#0F1115] transition-colors duration-300"
                aria-label={`Email ${name}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Osinnowo David",
      role: "Full-Stack Developer",
      description: "Experienced full-stack developer with expertise in React, Node.js, and cloud infrastructure. Passionate about building scalable solutions.",
      skills: ["React", "Node.js", "Typescript"],
      imageUrl: David,
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "david@example.com"
      }
    },
    {
      name: "Omoteyinshe Daniel",
      role: "Backend Developer",
      description: "Backend specialist with deep knowledge of API design, database optimization, and microservices architecture. Security-first mindset.",
      skills: ["Node.js", "Python", "MongoDB"],
      imageUrl: Daniel,
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "daniel@example.com"
      }
    },
    {
      name: "Owen Erhabor",
      role: "Frontend Developer",
      description: "Creative frontend developer specializing in React and modern JavaScript. Focused on creating beautiful user interfaces.",
      skills: ["React", "Node.js", "Typescript"],
      imageUrl: Owen,
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "owen@example.com"
      }
    },
    {
      name: "Olabisi Olamide",
      role: "Product Designer",
      description: "Creative UI/UX Designer skilled in creating engaging user experiences and turning ideas into clean, user-centered designs.",
      skills: ["Figma", "Figjam", "Prototype"],
      imageUrl: Olamide,
      socialLinks: {
        linkedin: "https://linkedin.com",
        email: "bisi@example.com"
      }
    }
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1115] max-w-4xl mx-auto md:mx-0 leading-tight">
            Our Team is the right fit for you
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F1115] to-transparent mt-4 mx-auto md:mx-0"></div>
          <p className="text-base sm:text-lg text-[#323745] mt-4 max-w-2xl mx-auto md:mx-0">
            Meet the talented individuals who bring your ideas to life with passion and expertise
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;