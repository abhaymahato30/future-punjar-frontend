import { useState, useEffect } from "react";
import ProductCard from "../components/product-card";
import { useSearchProductsQuery } from "../redux/api/productAPI";
import { CustomError } from "../types/api-types";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";
import { CartItem } from "../types/types";
import { addToCart } from "../redux/reducer/cartReducer";
import { useDispatch } from "react-redux";
import ServiceSection from "../components/service";
import Review from "../components/review";
import FAQ from "../components/Faqs";
import { Link } from "react-router-dom";

const TOAST_OPTIONS = {
  duration: 10000,
  position: "top-center" as const,
  className: "big-toast",
  style: {},
};

const Home = () => {
  const [search, setSearch] = useState("");
  
  const {
    isLoading: productLoading,
    data: searchedData,
    isError: productIsError,
    error: productError,
  } = useSearchProductsQuery({
    search,
    page: 1,
    category: "",
    price: 0,  // Removed price filter as per your request
    sort: "asc",
  });

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock", TOAST_OPTIONS);
    dispatch(addToCart(cartItem));
    toast.success("Added to cart", TOAST_OPTIONS);
  };

  useEffect(() => {
    if (productIsError) {
      const err = productError as CustomError;
      toast.error(err.data.message, TOAST_OPTIONS);
    }
  }, [productIsError, productError]);
useEffect(() => {
  console.log("Fetched products:", searchedData?.products);
}, [searchedData]);
  return (
    <div className="product-list-page">
      {/* Hero Section */}
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center px-4" style={{ backgroundImage:  "url('https://res.cloudinary.com/duzo8q4gg/image/upload/v1738263148/2_vs8wmw.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center max-w-3xl w-full pr-4 sm:pr-12 mt-42">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-2xl">
          Empowering Lives With Solar Energy
        </h1>
        <p className="mt-6 text-sm sm:text-lg md:text-2xl font-light italic text-white opacity-90 leading-relaxed">
          Elevating businesses with innovation, sustainability, and passion.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/about">
            <button className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>

      {/* service section */}
      <ServiceSection/>
      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of high-quality solar products designed to power your future sustainably
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Products Grid */}
      {productLoading ? (
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
        <Skeleton width="100%" height="200px" />
        <div className="p-4">
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="16px" />
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
    {searchedData?.products.map((product) => (
      <ProductCard
        key={product._id}
        productId={product._id}
        name={product.name}
        price={product.price}
        stock={product.stock}
        handler={addToCartHandler}
     photos={product.photos && product.photos.length > 0 ? product.photos : [{ url: "/fallback.jpg", public_id: "fallback" }]}

      />
    ))}
  </div>
)}

{/* {productLoading ? (
  // ✅ Full-width loading skeleton for one product
  <div className="w-full flex justify-center items-center px-6">
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-60 sm:h-96 bg-gray-200"></div>  
      <div className="p-6 space-y-4">
        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-10 w-1/3 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>  
) : (
  // ✅ Show single product in full-width hero style
  <div className="w-full">
    {searchedData?.products && searchedData.products.length > 0 ? (
      <ProductCard  
        productId={searchedData.products[0]._id}
        name={searchedData.products[0].name}
        price={searchedData.products[0].price}
        stock={searchedData.products[0].stock}
        handler={addToCartHandler}
        photos={searchedData.products[0].photos}
      />
    ) : (
      <p className="text-center text-gray-500 mt-10">
        No products found
      </p>
    )}
  </div>
)} */}
          {/* No Products Message */}
          {!productLoading && searchedData?.products.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search terms or browse our full catalog.</p>
            </div>
          )}
        </div>
      </section>
   

      {/* review section */}
      <section id="review">    <Review/> </section>
   

      {/* Faqs section */}
      <FAQ/>
    </div>
  );
};

export default Home;
