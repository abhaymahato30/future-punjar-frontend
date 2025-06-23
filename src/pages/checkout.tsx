import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { resetCart, calculatePrice } from "../redux/reducer/cartReducer"; // ✅ added calculatePrice
import { RootState } from "../redux/store";
import { ImSpinner8 } from "react-icons/im";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const {
    shippingInfo,
    cartItems,
    total,
    discount,
    tax,
    subtotal,
    shippingCharges,
  } = useSelector((state: RootState) => state.cartReducer);

  const { user } = useSelector((state: RootState) => state.userReducer);
  const firebaseUserId = user?._id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      script.onerror = () => reject("Failed to load Razorpay SDK");
      document.body.appendChild(script);
    });

  const paymentHandler = async () => {
    if (!cartItems.length || !shippingInfo) {
      toast.error("Cart or Shipping Info is missing");
      return;
    }

    // ✅ Recalculate price to ensure values are fresh
    dispatch(calculatePrice());

    // ❗ Check again after calculating
    if (
      subtotal === undefined ||
      tax === undefined ||
      shippingCharges === undefined
    ) {
      toast.error("Pricing breakdown missing");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post("/api/v1/payment/create", {
        items: cartItems,
        shippingInfo,
        coupon: "",
        firebaseUserId,
      });

      const { amount, currency, razorpayOrderId } = data;

      await loadRazorpay();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "Panjar Future",
        description: "Order Payment",
        order_id: razorpayOrderId,
        prefill: {
          name: shippingInfo.name || "Guest",
          email: shippingInfo.email || "",
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            console.log("📦 subtotal:", subtotal);
            console.log("🚚 shippingCharges:", shippingCharges);
            console.log("🧾 tax:", tax);

            const verifyRes = await axios.post("/api/v1/payment/verify", {
              ...response,
              items: cartItems,
              shippingInfo,
              firebaseUserId,
              total,
              discount,
              shippingCharges,
              tax,
              subtotal,
            });

            if (verifyRes.data.success) {
              dispatch(resetCart());
              toast.success("Order placed successfully!");
              navigate("/orders");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            toast.error("Verification failed. Please contact support.");
          }
        },
        theme: { color: "#0f172a" },
        modal: {
          ondismiss: () => {
            toast.error("Payment popup closed");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment Error:", error);
      toast.error(error?.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container flex flex-col items-center justify-center mt-10">
      <button
        onClick={paymentHandler}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 text-lg hover:bg-blue-700 transition"
      >
        {loading ? (
          <>
            <ImSpinner8 className="animate-spin" />
            Processing...
          </>
        ) : (
          `Pay ₹${total}`
        )}
      </button>
    </div>
  );
};

export default Checkout;
