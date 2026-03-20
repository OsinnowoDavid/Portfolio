import { Code2, Palette, Server, Users, Linkedin, Github, Mail } from "lucide-react";
import David from "../assets/Images/David.jpeg"

const Team =()=> {
  const teamMembers = [
    {
      name: "Osinnowo David",
      role: "Full-Stack Developer",
      image: David,
      bio: "Experienced full-stack developer with expertise in React, Node.js, and cloud infrastructure. Passionate about building scalable solutions.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      icon: Code2,
    },
    {
      name: "Omoteyinshe Daniel",
      role: "Frontend Developer",
      image: {David},
      bio: "Creative frontend developer specializing in React and modern JavaScript. Focused on creating beautiful, performant user interfaces.",
      skills: ["React", "Next.js", "Tailwind CSS", "Animation", "Responsive Design"],
      icon: Code2,
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      image: {David},
      bio: "Backend specialist with deep knowledge of API design, database optimization, and microservices architecture. Security-first mindset.",
      skills: ["Node.js", "Python", "MongoDB", "GraphQL", "Docker"],
      icon: Server,
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image:David,
      bio: "User-centered designer with a passion for creating intuitive, accessible interfaces. Expert in design systems and user research.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
      icon: Palette,
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Quality First",
      description: "We never compromise on code quality and best practices. Every line of code is written with maintainability and scalability in mind.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with our clients throughout the development process, ensuring alignment and transparency at every step.",
    },
    {
      icon: Server,
      title: "Cutting-Edge Tech",
      description: "We stay up-to-date with the latest technologies and frameworks to deliver modern, efficient solutions.",
    },
    {
      icon: Palette,
      title: "User-Centered Design",
      description: "Every project starts with understanding the user. We create experiences that are both beautiful and functional.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-orange-100">
              A passionate group of developers and designers dedicated to building 
              exceptional digital experiences for tech founders.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Member Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-600 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-orange-600 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We're always looking for talented developers and designers who are 
                passionate about creating great software.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Remote-friendly work environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Competitive compensation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Continuous learning opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Work on exciting projects</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors font-semibold"
              >
                Get in Touch
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB0ZWFtd29yayUyMG9mZmljZXxlbnwxfHx8fDE3NzM5MzY3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Team