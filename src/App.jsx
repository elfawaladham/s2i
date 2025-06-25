import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';

const S2InternationalWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  // Hero slideshow images
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern commercial building"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Embassy building"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Government facility"
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Design/Build MSCR Expansion and Rehab - U.S. Embassy Bamako, Mali",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Design/Build US Embassy Compound - Reykjavik, Iceland",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Navy Support Facilities Aegis Ashore; Poland",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Client logos
  const clients = [
    { name: "CCE Specialties, LLC", logo: "CCE\nSPECIALTIES, LLC" },
    { name: "ISTAK", logo: "iSTAK" },
    { name: "Imperium", logo: "imperium\nconsulting group" },
    { name: "CCE Specialties, LLC", logo: "CCE\nSPECIALTIES, LLC" },
    { name: "ISTAK", logo: "iSTAK" },
    { name: "Imperium", logo: "imperium\nconsulting group" }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="flex">
                <div className="bg-orange-600 text-white px-2 py-1 text-lg font-bold">S2</div>
                <div className="bg-blue-600 text-white px-2 py-1 text-lg font-bold">i</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-700">S2 International, LLC</div>
                <div className="text-sm text-gray-500">Construction Management</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Projects <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Slideshow */}
      <div className="relative h-96 overflow-hidden bg-gray-800">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.backgroundColor = '#1f2937';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevProject}
              className="p-3 border-2 border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
            <button
              onClick={nextProject}
              className="p-3 border-2 border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const isActive = index === currentProject;
              const isPrev = index === (currentProject - 1 + projects.length) % projects.length;
              const isNext = index === (currentProject + 1) % projects.length;
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    isActive 
                      ? 'transform scale-105 opacity-100 shadow-2xl' 
                      : (isPrev || isNext) 
                        ? 'opacity-75 shadow-lg' 
                        : 'opacity-50 shadow-md'
                  }`}
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = '#e5e7eb';
                          e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">Image unavailable</div>';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-3">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Clients & Partners Section */}
      <div className="py-12 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Clients & Partners</h2>
          
          {/* Moving carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 mx-4 bg-white rounded-lg p-6 flex items-center justify-center min-h-[120px] shadow-lg"
                >
                  <div className="text-center">
                    {client.name === "CCE Specialties, LLC" && (
                      <div className="text-2xl font-bold text-blue-900">
                        <div>CCE</div>
                        <div className="text-sm font-normal">SPECIALTIES, LLC</div>
                      </div>
                    )}
                    {client.name === "ISTAK" && (
                      <div className="text-2xl font-bold text-white bg-blue-600 px-4 py-2 rounded">
                        iSTAK
                      </div>
                    )}
                    {client.name === "Imperium" && (
                      <div className="text-xl font-bold">
                        <span className="text-green-600 text-2xl">▲</span>
                        <span className="text-gray-800">imperium</span>
                        <div className="text-sm font-normal text-gray-600">consulting group</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">JS</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">John Smith</h3>
              <p className="text-gray-600 text-sm">Project Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">SJ</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">Sarah Johnson</h3>
              <p className="text-gray-600 text-sm">Lead Engineer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">MD</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">Mike Davis</h3>
              <p className="text-gray-600 text-sm">Construction Supervisor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex">
                <div className="bg-orange-600 text-white px-2 py-1 text-lg font-bold">S2</div>
                <div className="bg-blue-600 text-white px-2 py-1 text-lg font-bold">i</div>
              </div>
              <span className="text-xl font-semibold">S2 International, LLC</span>
            </div>
            <p className="text-gray-400 mb-4">Construction Management Excellence</p>
            <div className="flex justify-center space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default S2InternationalWebsite;