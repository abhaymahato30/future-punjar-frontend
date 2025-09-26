import { FaShoppingCart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartItem } from "../types/types";
import { transformImage } from "../utils/features";

type ProductsProps = {
  productId: string;
  photos: {
    url: string;
    public_id: string;
  }[];
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductShowcase = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-yellow-50 via-white to-yellow-100 px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="relative flex justify-center">
          <img
            src={transformImage(photos?.[0]?.url, 800)}
            alt={name}
            className="w-full max-w-lg rounded-2xl shadow-xl object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Stock Badge */}
          {stock < 5 && stock > 0 && (
            <span className="absolute top-6 left-6 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
              Low Stock
            </span>
          )}
          {stock === 0 && (
            <span className="absolute top-6 left-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
              Out of Stock
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{name}</h1>
          <p className="text-3xl font-semibold text-yellow-600">
            ₹{price.toLocaleString()}
          </p>
          <span className="text-gray-500 text-lg">Stock: {stock}</span>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={() =>
                handler({
                  productId,
                  price,
                  name,
                  photo: photos[0].url,
                  stock,
                  quantity: 1,
                })
              }
              disabled={stock < 1}
              className="flex-1 flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded-xl text-lg transition-colors duration-300"
            >
              <FaShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            <Link
              to={`/product/${productId}`}
              className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-8 rounded-xl text-lg transition-colors duration-300"
            >
              <FaEye className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
  