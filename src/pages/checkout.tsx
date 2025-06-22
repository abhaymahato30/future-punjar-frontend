import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useNewOrderMutation } from "../redux/api/orderAPI";
import { resetCart } from "../redux/reducer/cartReducer";
import { RootState } from "../redux/store";
import { NewOrderRequest } from "../types/api-types";
import { responseToast } from "../utils/features";
import { ImSpinner8 } from "react-icons/im";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const { user, token } = useSelector((state: RootState) => state.userReducer);
  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total,
  } = useSelector((state: RootState) => state.cartReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newOrder] = useNewOrderMutation();
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
    if (!user || !user._id || !token) {
      toast.error("Please log in to proceed.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `/api/v1/payment/create`,
        {
          userId: user._id,
          items: cartItems,
          shippingInfo,
          coupon: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
          name: user.name,
          email: user.email,
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await axios.post(
              "/api/v1/payment/verify",
              response,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (verifyRes.data.success) {
              const orderData: NewOrderRequest = {
                shippingInfo,
                orderItems: cartItems,
                subtotal,
                tax,
                discount,
                shippingCharges,
                total,
                user: user._id,
              };

              const result = await newOrder(orderData);
              dispatch(resetCart());
              toast.success("Payment Successful!");

              setTimeout(() => {
                responseToast(result, navigate, "/orders");
              }, 1500);
            } else {
              toast.error("Payment verification failed");
            }
          } catch (err) {
            toast.error("Verification failed");
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
