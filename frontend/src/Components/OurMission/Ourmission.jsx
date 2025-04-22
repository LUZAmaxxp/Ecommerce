import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 5000);

    // Scroll reveal animation effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const missionPoints = [
    {
      title: "Preserve Heritage",
      description:
        "Safeguarding centuries-old Moroccan crafting techniques and passing traditional knowledge to future generations.",
      icon: "🏺",
    },
    {
      title: "Empower Artisans",
      description:
        "Supporting local craftspeople with fair compensation and global market access to sustain their livelihoods.",
      icon: "✋",
    },
    {
      title: "Celebrate Innovation",
      description:
        "Embracing contemporary influences while honoring traditional methods to create modern Moroccan masterpieces.",
      icon: "💫",
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 1s ease-in-out" }}
    >
      {/* Decorative background elements */}

      {/* Moroccan pattern overlay */}

      {/* Decorative Pattern Header */}

      {/* Navigation */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
          <div className="reveal text-center transform transition duration-700 opacity-0 translate-y-8">
            <div className="inline-block mb-4 bg-orange-100 px-4 py-1 rounded-full">
              <span className="text-orange-600 font-medium text-sm">
                Our Purpose • Our Vision • Our Values
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
              Our Mission
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Celebrating and preserving Morocco's rich artisanal heritage while
              creating sustainable futures for our talented craftspeople.
            </p>

            <button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-300/50 flex items-center justify-center transform hover:-translate-y-1 mx-auto">
              Join Our Journey
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mission Points */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className={`reveal bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-sm transform transition duration-700 opacity-0 translate-y-8 p-8 hover:shadow-md hover:bg-opacity-90 transition-all duration-300 ${
                activeSection === index
                  ? "ring-2 ring-orange-200 shadow-lg shadow-orange-100"
                  : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="relative py-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal transform transition duration-700 opacity-0 translate-y-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
                Our Story
              </h2>
              <p className="mb-4 text-gray-600">
                Founded in 2020, Artisanat Marocain was born from a passion to
                protect Morocco's incredible craft heritage that spans
                millennia. Our annual fair brings together over 500 artisans
                from all regions of Morocco, creating a vibrant marketplace for
                authentic craftsmanship.
              </p>
              <p className="mb-6 text-gray-600">
                We believe that by connecting these skilled craftspeople with
                global markets and contemporary design influences, we can ensure
                these traditions not only survive but thrive for generations to
                come.
              </p>
              <button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-300/50 flex items-center transform hover:-translate-y-1">
                Learn More About Us
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </button>
            </div>
            <div className="reveal transform transition duration-1000 opacity-0 translate-x-16">
              <div className="relative">
                {/* Decorative elements around image */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-lg rotate-12 opacity-80 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-lg -rotate-12 opacity-80 z-0"></div>

                {/* Main image placeholder with mask and effects */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/50 z-10 h-64 md:h-96 bg-gradient-to-r from-orange-200 to-amber-200">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-orange-600 text-opacity-30 text-6xl font-bold">
                    <img
                      src="https://s7g10.scene7.com/is/image/barcelo/moroccan-crafts_moroccan-tapestry?&&fmt=webp-alpha&qlt=75&wid=1200&fit=crop,1"
                      alt="ezff"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 relative z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMzBMMTUgMTVoMzB6TTMwIDMwTDE1IDQ1aDMwek0zMCAzMEw0NSAxNXYzMHpNMzAgMzBMNDUgNDV2LTMweiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Artisans Supported" },
              { number: "12", label: "Regions Represented" },
              { number: "250K+", label: "Annual Visitors" },
              { number: "70%", label: "Women Artisans" },
            ].map((stat, index) => (
              <div
                key={index}
                className="reveal transform transition duration-700 opacity-0 translate-y-8 hover:scale-105 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-white text-opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white bg-opacity-70 backdrop-blur-sm relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal transform transition duration-700 opacity-0 translate-y-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
              Join Us in Preserving Morocco's Craft Legacy
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Be part of our mission to celebrate and sustain traditional
              Moroccan craftsmanship. Whether you're an artisan, sponsor, or
              craft enthusiast, there's a place for you in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Become a Partner Button */}
              <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium px-8 py-4 rounded-full shadow-xl hover:shadow-amber-200/50 transform transition duration-300 hover:translate-y-1 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500">
                Become a Partner
              </button>

              {/* Register for Next Fair Button */}
              <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full shadow-xl hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:translate-y-1">
                Register for Next Fair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default OurMission;
