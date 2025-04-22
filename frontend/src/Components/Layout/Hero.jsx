import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Add scroll reveal animation effect
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-amber-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-12 right-1/4 w-64 h-64 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>

        {/* Moroccan pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMzAgMzBMMTUgMTVoMzB6TTMwIDMwTDE1IDQ1aDMwek0zMCAzMEw0NSAxNXYzMHpNMzAgMzBMNDUgNDV2LTMweiIgc3Ryb2tlPSIjZWM4YTRmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="reveal text-center md:text-left transform transition duration-700 opacity-0 translate-y-8">
            <div className="inline-block mb-4 bg-orange-100 px-4 py-1 rounded-full">
              <span className="text-orange-600 font-medium text-sm">
                March 15-21, 2025 • Rabat Exhibition Center
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
              Moroccan craftsmanship
              <br className="hidden md:block" />
              honor to Rabat
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl font-light">
              Provincial Crafts Fair in Rabat: promotion of heritage and driving
              force for local development
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <button className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-300/50 flex items-center justify-center transform hover:-translate-y-1">
                  Shop Now
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </button>
              </Link>
              <Link to="/cards">
                <button className="border-2 border-orange-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all duration-300 hover:border-orange-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Stats with enhanced styling */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="reveal bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-xl shadow-sm transform transition duration-700 opacity-0 translate-y-8 hover:shadow-md hover:bg-opacity-90 transition-all duration-300">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                  500+
                </span>
                <p className="text-gray-600 font-medium">Artisan Products</p>
              </div>
              <div className="reveal bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-xl shadow-sm transform transition duration-700 opacity-0 translate-y-8 delay-100 hover:shadow-md hover:bg-opacity-90 transition-all duration-300">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                  250K+
                </span>
                <p className="text-gray-600 font-medium">Visitors</p>
              </div>
              <div className="reveal bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-xl shadow-sm transform transition duration-700 opacity-0 translate-y-8 delay-200 hover:shadow-md hover:bg-opacity-90 transition-all duration-300">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                  99%
                </span>
                <p className="text-gray-600 font-medium">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Image with enhanced styling */}
          <div className="reveal hidden md:block transform transition duration-1000 opacity-0 translate-x-16">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-lg rotate-12 opacity-80 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-lg -rotate-12 opacity-80 z-0"></div>

              {/* Main image with mask and effects */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/50 z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10"></div>

                <img
                  src="https://i0.wp.com/rni.ma/wp-content/uploads/2021/11/news_1524158250.jpg?resize=800%2C420&ssl=1"
                  alt="Moroccan Crafts Exhibition"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                />

                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm py-2 px-3 rounded-lg shadow-lg z-20">
                  <span className="text-orange-600 font-medium">
                    New Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute -top-16 w-full h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="white"
            d="M0,36.8v16.9h1440V0C1082.8,52,175.1,52,0,36.8z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
