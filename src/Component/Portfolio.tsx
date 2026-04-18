import { Smartphone, Globe, ShoppingCart, ExternalLink } from "lucide-react";
import { useState } from "react";
import frame2 from "../assets/Images/frame.jpeg";
import ecommercer from "../assets/Images/ecommerce.jpeg";
import finTech from "../assets/Images/finTech.jpeg";

// Define types
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}

interface LoadingState {
  [key: number]: boolean;
}

export function Portfolio(): JSX.Element {
  const [loadedImages, setLoadedImages] = useState<LoadingState>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "FinTech Mobile App",
      category: "Mobile App",
      description: "A comprehensive financial management app with real-time market data, portfolio tracking, and AI-powered investment recommendations.",
      image: frame2,
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      icon: Smartphone,
      bgColor: "from-blue-600 to-blue-500",
    },
    {
      title: "E-commerce Platform",
      category: "Web Application",
      description: "A scalable e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout experience.",
      image: ecommercer,
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      icon: ShoppingCart,
      bgColor: "from-green-600 to-green-500",
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities for modern healthcare providers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Django", "PostgreSQL", "WebRTC"],
      icon: Globe,
      bgColor: "from-purple-600 to-purple-500",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features to keep users motivated and engaged.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "ML Kit"],
      icon: Smartphone,
      bgColor: "from-red-600 to-red-500",
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      description: "Modern property listing platform with virtual tours, advanced search filters, and integrated CRM for real estate agencies.",
      image: finTech,
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
      icon: Globe,
      bgColor: "from-yellow-600 to-yellow-500",
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      description: "End-to-end food delivery solution with real-time tracking, multiple payment options, and smart restaurant recommendations.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React Native", "Express.js", "Redis", "Socket.io"],
      icon: Smartphone,
      bgColor: "from-pink-600 to-pink-500",
    },
  ];

  const handleImageLoad = (index: number): void => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  // Stats data type
  interface Stat {
    value: string;
    label: string;
    icon: string;
  }

  const stats: Stat[] = [
    { value: "50+", label: "Projects Completed", icon: "🚀" },
    { value: "100%", label: "Client Satisfaction", icon: "⭐" },
    { value: "30+", label: "Happy Clients", icon: "😊" },
    { value: "10+", label: "Years Experience", icon: "🏆" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 animate-slide-up">
              Explore our recent projects and see how we've helped tech founders 
              build successful mobile apps and websites.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isLoaded = loadedImages[index];
              const isHovered = hoveredProject === index;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image with improved presentation */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                    {!isLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse flex space-x-2">
                          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-orange-400 rounded-full animation-delay-200"></div>
                          <div className="w-3 h-3 bg-orange-400 rounded-full animation-delay-400"></div>
                        </div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.bgColor} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg transform -translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-gray-800">{project.category}</span>
                      </div>
                    </div>

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        type="button"
                        className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:shadow-xl"
                        onClick={() => console.log(`Quick view: ${project.title}`)}
                      >
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full hover:bg-orange-100 transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button 
                      type="button"
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors font-semibold group/btn"
                      onClick={() => console.log(`View details: ${project.title}`)}
                    >
                      View Details 
                      <ExternalLink className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Project Success Metrics
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build your next great application.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}