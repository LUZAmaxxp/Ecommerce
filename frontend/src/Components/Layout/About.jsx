import React, { useEffect, useRef } from "react";
import { Truck, CreditCard, Shield, HeartHandshake } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Features = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const featuresList = [
    {
      icon: Truck,
      title: "Livraison Gratuite",
      description:
        "Livraison gratuite dans tout le Maroc pour les commandes de plus de 500 DH",
      color: "from-amber-500 to-orange-600",
      delay: "0",
    },
    {
      icon: CreditCard,
      title: "Paiement Sécurisé",
      description:
        "Multiples méthodes de paiement sécurisées avec cryptage SSL",
      color: "from-orange-500 to-red-600",
      delay: "100",
    },
    {
      icon: Shield,
      title: "Qualité Garantie",
      description:
        "Tous nos produits sont authentiques et certifiés par des artisans marocains",
      color: "from-orange-600 to-amber-600",
      delay: "200",
    },
    {
      icon: HeartHandshake,
      title: "Support Client",
      description:
        "Service client dédié disponible 7j/7 pour répondre à vos questions",
      color: "from-red-500 to-orange-500",
      delay: "300",
    },
  ];

  // Animation on scroll
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="About"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-orange-50"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMTUgMTVoMzB2MzBIMTV6IiBzdHJva2U9IiNlMjc3MmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 transition-all duration-700 transform translate-y-8 opacity-0 animate-feature-title">
          <div className="inline-block mb-3">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
              À Votre Service
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Pourquoi Nous Choisir
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 opacity-40 rounded"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à valoriser l'artisanat marocain et à offrir une
            expérience d'achat exceptionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="feature-card relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform translate-y-12 opacity-0"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Top ribbon */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${feature.color}`}
              ></div>

              <div className="p-8">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r rounded-full blur-sm opacity-30 group-hover:opacity-100 transition duration-200"></div>
                  <div
                    className={`relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r ${feature.color} shadow-lg`}
                  >
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-orange-300 rounded-bl-2xl"></div>
                </div>
              </div>

              {/* Hover overlay - increases on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Testimonial banner */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-xl relative bg-gradient-to-r from-orange-500 to-amber-500 transform transition-all duration-700 translate-y-8 opacity-0 animate-testimonial">
          <div className="absolute inset-0 mix-blend-soft-light opacity-10">
            <svg width="100%" height="100%">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="1.6257413380501518"
                  fill="#fff"
                ></circle>
              </pattern>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              ></rect>
            </svg>
          </div>

          <div className="px-8 py-10 md:p-12 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  Soutenir l'artisanat marocain
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  Chaque achat contribue directement au soutien des artisans
                  marocains et à la préservation de savoir-faire ancestraux.
                </p>
                <Link to={"/ourmission"}>
                  {" "}
                  <button className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition shadow-lg">
                    Découvrir notre mission
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzdXoB7bTFvJZ9H0FTGSDfCgWk7Wlf9dysw&s"
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Nadia Belkasim
                      </div>
                      <div className="text-sm text-gray-500">
                        Cliente fidèle depuis 2023
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Ces produits artisanaux ont apporté tant de chaleur et
                    d'authenticité à mon foyer. La qualité est exceptionnelle et
                    je suis fière de soutenir ces artistes talentueux."
                  </p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1
                        0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
