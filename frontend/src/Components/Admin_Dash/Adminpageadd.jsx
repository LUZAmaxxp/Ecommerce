import React, { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Save, X } from "lucide-react";

function Adminpageadd() {
  const [selectedCategory, setSelectedCategory] = useState("jeans");
  const [products, setProducts] = useState([]);
  const [Base64Data, setBase64Data] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    { id: "Tagine", label: "Tagine" },
    { id: "Sac cuir", label: "Sac cuir" },
    { id: "Tapis", label: "Tapis" },
    { id: "Centimes", label: "Centimes" },
    { id: "Caftan", label: "Caftan" },
    { id: "Others", label: "Others" },
  ];

  const titleInputRef = React.useRef(null);
  const descriptionInputRef = React.useRef(null);
  const priceInputRef = React.useRef(null);
  const quantityInputRef = React.useRef(null);
  const imageInputRef = React.useRef(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/product/GetAllProduct"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleImageChange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const base64 = await convertToBase64(file);
          setBase64Data(base64);
        } catch (error) {
          console.error("Error converting to Base64:", error);
        }
      }
    };

    const imageInput = imageInputRef.current;
    if (imageInput) {
      imageInput.addEventListener("change", handleImageChange);
      return () => {
        imageInput.removeEventListener("change", handleImageChange);
      };
    }
  }, []);

  const populateForm = (product) => {
    titleInputRef.current.value = product.title;
    descriptionInputRef.current.value = product.description;
    priceInputRef.current.value = product.price;
    quantityInputRef.current.value = product.quantity;
    setSelectedCategory(product.category);
    setBase64Data(product.image);
    setIsEditing(true);
    setEditProductId(product._id);
  };

  const handleSubmitProduct = async () => {
    const title = titleInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const price = priceInputRef.current.value;
    const quantity = quantityInputRef.current.value;

    if (!title || !description || !price || !quantity) {
      alert("Please fill all required fields");
      return;
    }

    const productData = {
      title,
      description,
      price,
      quantity,
      image: Base64Data,
      category: selectedCategory,
    };

    setIsLoading(true);

    try {
      if (isEditing) {
        await axios.put(
          `http://127.0.0.1:5000/product/updateProduct/${editProductId}`,
          productData
        );
        alert("Product updated successfully!");
      } else {
        await axios.post(
          "http://127.0.0.1:5000/product/addProduct",
          productData
        );
        alert("Product added successfully!");
      }

      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    titleInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    priceInputRef.current.value = "";
    quantityInputRef.current.value = "";
    imageInputRef.current.value = "";
    setSelectedCategory("jeans");
    setBase64Data("");
    setIsEditing(false);
    setEditProductId(null);
  };

  const handleUpdateRequest = (product) => {
    populateForm(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      try {
        const base64 = await convertToBase64(file);
        setBase64Data(base64);
      } catch (error) {
        console.error("Error converting to Base64:", error);
      }
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 ease-in-out text-gray-700 bg-white bg-opacity-90 shadow-sm";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <button className="flex items-center justify-center text-gray-600 hover:text-orange-500 bg-white p-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <ArrowLeft size={24} />
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 ml-4 flex-grow text-center pr-10">
            {isEditing ? "Update Product" : "Add New Product"}
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600"></div>

            <div className="p-8">
              {/* Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      ref={titleInputRef}
                      className={inputClasses}
                      placeholder="Enter product title"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      ref={descriptionInputRef}
                      rows="5"
                      className={`${inputClasses} resize-none`}
                      placeholder="Describe your product"
                    />
                  </div>

                  {/* Price & Quantity */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (DH)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="price"
                          ref={priceInputRef}
                          className={inputClasses}
                          step="10"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        ref={quantityInputRef}
                        className={inputClasses}
                        placeholder="0"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                {/* Image & Categories */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Image
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center ${
                        isDragging
                          ? "border-orange-400 bg-orange-50"
                          : "border-gray-300 hover:border-orange-300"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => imageInputRef.current.click()}
                    >
                      <input
                        type="file"
                        name="image"
                        ref={imageInputRef}
                        className="hidden"
                        accept="image/*"
                      />

                      {Base64Data ? (
                        <div className="relative">
                          <img
                            src={Base64Data}
                            alt="Product preview"
                            className="h-48 mx-auto object-contain rounded"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setBase64Data("");
                              if (imageInputRef.current)
                                imageInputRef.current.value = "";
                            }}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-6">
                          <Upload className="h-12 w-12 text-orange-400 mb-2" />
                          <p className="text-sm text-gray-500">
                            Drag and drop your image here or{" "}
                            <span className="text-orange-500 font-medium">
                              browse
                            </span>
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Supported formats: JPG, PNG, WEBP
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <h2 className="text-lg font-medium text-gray-700 mb-3">
                      Product Category
                    </h2>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {categories.map((category) => (
                        <label
                          key={category.id}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedCategory === category.id
                              ? "border-orange-500 bg-orange-50 shadow-sm"
                              : "border-gray-200 hover:border-orange-200 hover:bg-orange-50/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="category"
                            value={category.id}
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                          />
                          <span
                            className={`ml-2 ${
                              selectedCategory === category.id
                                ? "text-gray-800 font-medium"
                                : "text-gray-600"
                            }`}
                          >
                            {category.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={handleSubmitProduct}
                  disabled={isLoading}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : isEditing
                      ? "bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-orange-200"
                      : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg hover:shadow-orange-200 transform hover:translate-y-px"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 12a8 8 0 1 1 16 0"
                        />
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    <span>{isEditing ? "Update Product" : "Add Product"}</span>
                  )}
                </button>
              </div>
            </div>
            <ProductDisplay
              products={products}
              setProducts={setProducts}
              onUpdate={handleUpdateRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminpageadd;
