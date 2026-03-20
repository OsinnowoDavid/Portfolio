import { ExternalLink, Smartphone, Globe, ShoppingCart } from "lucide-react";
export function Portfolio() {
  const projects = [
    {
      title: "FinTech Mobile App",
      category: "Mobile App",
      description: "A comprehensive financial management app with real-time market data, portfolio tracking, and AI-powered investment recommendations.",
      image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM4MjE5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      icon: Smartphone,
    },
    {
      title: "E-commerce Platform",
      category: "Web Application",
      description: "A scalable e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzM5MzM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      icon: ShoppingCart,
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities for modern healthcare providers.",
      image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3Mzg2NzExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Django", "PostgreSQL", "WebRTC"],
      icon: Globe,
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features to keep users motivated and engaged.",
      image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzkzNjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "ML Kit"],
      icon: Smartphone,
    },
    {
      title: "Real Estate Portal",
      category: "Web Application",
      description: "Modern property listing platform with virtual tours, advanced search filters, and integrated CRM for real estate agencies.",
      image: "https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB0ZWFtd29yayUyMG9mZmljZXxlbnwxfHx8fDE3NzM5MzY3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
      icon: Globe,
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      description: "End-to-end food delivery solution with real-time tracking, multiple payment options, and smart restaurant recommendations.",
      image: "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MzkxMDYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Express.js", "Redis", "Socket.io"],
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-orange-100">
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
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-semibold">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-50 text-orange-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors font-semibold">
                      View Details <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Success Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build your next great application.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
