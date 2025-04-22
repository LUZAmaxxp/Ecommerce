import React, { useState, useEffect } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductShowcase = () => {
  const [products] = useState([
    {
      id: 1,
      name: " Mini Tagine",
      category: "Gastronomie",
      price: 249.99,
      rating: 4.5,
      image:
        "https://mda.gov.ma/wp-content/uploads/2020/07/Artisanat-du-Maroc-1-1024x538.jpg",
      description: "Artisanat ancien avec des motifs berbères authentiques",
    },
    {
      id: 2,
      name: "Collier en Argent Filigrané",
      category: "Joaillerie",
      price: 599.99,
      rating: 4.7,
      image:
        "data:image/jpeg;base64,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",

      description: "Travail manuel minutieux avec des techniques ancestrales",
    },
    {
      id: 3,
      name: "Bracelets Amazigh en Cuivre",
      category: "Joaillerie",
      price: 79.99,
      rating: 4.3,
      image:
        "https://www.dorsetdeja.com/17893-large_default/bracelet-berbere-cuivre.jpg",
      description: "Designs emblématiques de la culture Amazigh marocaine",
    },
    {
      id: 4,
      name: "Tapis Berbère Fait Main",
      category: "Textiles",
      price: 129.99,
      rating: 4.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc94-DtsWopX8d12ilaiG5YrULf_AX5DPxRQ&s",
      description: "Motifs géométriques traditionnels tissés à la main",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  // For parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const products = document.querySelectorAll(".product-card");
      products.forEach((product, index) => {
        const rect = product.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          const yPos = window.scrollY - rect.top;
          product.style.transform = `translateY(${50}px)`;
        }
      });
    };

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Auto-rotate featured products
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % products.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [products.length]);

  const categories = ["All", "Gastronomie", "Joaillerie", "Textiles"];

  const handleSubmit = (category) => {
    setActiveCategory(category);
    console.log(category); // Logs the selected category
  };

  const filteredCategory =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Navigation handlers
  const nextProduct = () =>
    setActiveIndex((activeIndex+ 1) % products.length);
  console.log(activeIndex);

  const prevProduct = () =>
    setActiveIndex((activeIndex - 1 + products.length) % products.length);
  console.log(activeIndex);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-24">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CiAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik00MCA0MEwyMCAyMGg0MHpNNDAgNDBMMjAgNjBoNDB6TTQwIDQwTDYwIDIwdjQwek00MCA0MEw2MCA2MHYtNDB6IiBzdHJva2U9IiNFMDc5MkQiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-80"></div>
      </div>

      {/* Featured Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block mb-3">
            <span className="inline-block bg-orange-200 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
              Collection 2025
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                Trésors Artisanaux
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 opacity-40 rounded"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre collection d'artisanat marocain authentique, mettant
            en valeur des siècles de savoir-faire et de tradition
          </p>
        </div>

        {/* Featured Product */}
        <div className="relative mb-24 rounded-2xl bg-white shadow-xl overflow-hidden fade-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src={products[activeIndex].image}
                alt={products[activeIndex].name}
                className="w-full h-full object-cover transform scale-110 hover:scale-125 transition-all duration-700 ease-out"
              />

              {/* Navigation arrows */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={prevProduct}
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition"
                >
                  <ChevronLeft size={24} className="text-orange-700" />
                </button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <button
                  onClick={nextProduct}
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition"
                >
                  <ChevronRight size={24} className="text-orange-700" />
                </button>
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-medium text-orange-600">
                  {products[activeIndex].category}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {products[activeIndex].name}
              </h3>
              <p className="text-gray-600 mb-6">
                {products[activeIndex].description}
              </p>

              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(products[activeIndex].rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill={
                        i < Math.floor(products[activeIndex].rating)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({products[activeIndex].rating})
                </span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="text-3xl font-bold text-orange-600">
                  {products[activeIndex].price.toLocaleString()} DH
                </div>
                <div className="text-sm text-gray-500">
                  Livraison gratuite • Disponible
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-lg shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                  <ShoppingCart
                    className="mr-2 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  Ajouter au Panier
                </button>
                <button className="px-4 border-2 border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSubmit(category)}
              value={category}
              className={`px-5 py-2 rounded-full transition-all duration-300 z-10 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-orange-100 text-orange-800 hover:bg-orange-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategory.map((product) => (
            <div
              key={product.id}
              className="product-card relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out fade-in"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 group relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Artisanal
                  </span>
                </div>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-64 object-cover transform transition-all duration-700 ${
                    hoveredId === product.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredId === product.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Quick actions */}
                <div
                  className={`absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 transform transition-transform duration-500 ${
                    hoveredId === product.id
                      ? "translate-y-0"
                      : "translate-y-full"
                  }`}
                >
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
                    <Heart
                      size={18}
                      className={`transition-colors ${
                        hoveredId === product.id && "text-red-500"
                      }`}
                    />
                  </button>

                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition flex items-center">
                    <Eye size={18} className="mr-1" />
                    Voir
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="text-xs text-orange-600 font-medium mb-1">
                  {product.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill={
                          i < Math.floor(product.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {product.price.toLocaleString()} DH
                  </span>
                  <button className="bg-orange-100 p-2 rounded-full text-orange-600 shadow-md hover:bg-orange-200 transition-all duration-300">
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
