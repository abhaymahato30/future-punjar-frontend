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
      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://res.cloudinary.com/duzo8q4gg/image/upload/v1738263148/2_vs8wmw.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "700px",
            width: "100%",
            paddingRight: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              lineHeight: "1.3",
              background: "linear-gradient(to right, #facc15, #f97316, #dc2626)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            Empowering Lives With Solar Energy
          </h1>
          <p
            style={{
              marginTop: "20px",
              fontSize: "1rem",
              fontWeight: "300",
              fontStyle: "italic",
              opacity: 0.9,
              lineHeight: "1.6",
            }}
          >
            Elevating businesses with innovation, sustainability, and passion.
          </p>
        </div>
      </section>

      {/* service section */}
      <ServiceSection/>
      {/* Products Section */}
      <main style={{ padding: "20px" }}>
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
      </main>
    </div>
  );
};

export default Home;
