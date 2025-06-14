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
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  useEffect(() => {
    if (productIsError) {
      const err = productError as CustomError;
      toast.error(err.data.message);
    }
  }, [productIsError, productError]);

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
      <section id="products">     <main style={{ padding: "20px" }}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>Our Products</h1>

          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              width: "300px",
              outline: "none",
            }}
          />
        </div>

        {/* Loading Skeleton */}
        {productLoading ? (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ width: "18.75rem", height: "25rem" }}>
                <Skeleton width="100%" height="20rem" />
                <Skeleton width="100%" height="1.95rem" />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {searchedData?.products.map((i) => (
              <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photos={i.photos}
              />
            ))}
          </div>
        )}
      </main></section>
   

      {/* review section */}
      <section id="review">    <Review/> </section>
   

      {/* Faqs section */}
      <FAQ/>
    </div>
  );
};

export default Home;
