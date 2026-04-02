import { Code2, Smartphone, Palette, Database, Globe, Zap, Shield, Users } from "lucide-react";
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "We create stunning native and cross-platform mobile applications for iOS and Android. Our apps are built with performance, security, and user experience in mind.",
      features: [
        "Native iOS & Android Development",
        "React Native & Flutter",
        "App Store Optimization",
        "Push Notifications & Analytics",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "From simple landing pages to complex web applications, we build responsive, fast, and scalable solutions using modern frameworks and best practices.",
      features: [
        "React & Next.js Applications",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Custom CMS Development",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Our designers create beautiful, intuitive interfaces that delight users. We focus on user research, wireframing, prototyping, and visual design.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Usability Testing",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "We build robust, scalable backend systems with secure APIs, efficient databases, and cloud infrastructure that power your applications.",
      features: [
        "RESTful & GraphQL APIs",
        "Database Design & Optimization",
        "Cloud Infrastructure (AWS, Azure)",
        "Microservices Architecture",
      ],
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Our full-stack developers handle both frontend and backend, providing end-to-end solutions that are cohesive, efficient, and maintainable.",
      features: [
        "End-to-End Development",
        "Modern Tech Stack",
        "Agile Development Process",
        "Code Quality & Testing",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "We optimize your applications for speed, efficiency, and scalability, ensuring the best possible experience for your users.",
      features: [
        "Speed Optimization",
        "SEO Enhancement",
        "Code Refactoring",
        "Load Testing & Monitoring",
      ],
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Protect your applications with our security audits, regular updates, and ongoing maintenance services to keep everything running smoothly.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Bug Fixes & Support",
        "Performance Monitoring",
      ],
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description: "Get expert advice on technology choices, architecture decisions, and best practices to ensure your project's success from start to finish.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Reviews",
        "Team Training & Mentoring",
      ],
    },
  ];

const Services= () =>{

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-orange-100">
              Comprehensive software development solutions tailored to your needs. 
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and mockups" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today for a free consultation.
          </p>
          <a
            href="https://wa.me/2348135880678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition-colors font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
export default Services
