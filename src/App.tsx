  import { onAuthStateChanged } from "firebase/auth";
  import { Suspense, lazy, useEffect } from "react";
  import { Toaster } from "react-hot-toast";
  import { useDispatch, useSelector } from "react-redux";
  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
  import Header from "./components/header";
  import Loader, { LoaderLayout } from "./components/loader";
  import ProtectedRoute from "./components/protected-route";
  import { auth } from "./firebase";
  import { getUser } from "./redux/api/userAPI";
  import { userExist, userNotExist } from "./redux/reducer/userReducer";
  import { RootState } from "./redux/store";
  import Footer from "./components/footer";
  import Teampage from "./pages/teamPage";
  import AboutPage from "./pages/AboutPage";
  import ContactPage from "./pages/ContactPage";
  import ScrollToTop from "./ScrollTop" ;
  import Policy from "./pages/Policy";
  import TermandCondition from "./pages/Term&Condition";
  import CancellationPage from "./pages/cancellationRefund"


  const Home = lazy(() => import("./pages/home"));
  const Search = lazy(() => import("./pages/search"));
  const ProductDetails = lazy(() => import("./pages/product-details"));
  const Cart = lazy(() => import("./pages/cart"));
  const Shipping = lazy(() => import("./pages/shipping"));
  const Login = lazy(() => import("./pages/login"));
  const Orders = lazy(() => import("./pages/orders"));
  const OrderDetails = lazy(() => import("./pages/order-details"));
  const NotFound = lazy(() => import("./pages/not-found"));
  const Checkout = lazy(() => import("./pages/checkout"));

  // Admin Routes Importing
  const Dashboard = lazy(() => import("./pages/admin/dashboard"));
  const Products = lazy(() => import("./pages/admin/products"));
  const Customers = lazy(() => import("./pages/admin/customers"));
  const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));
  const Discount = lazy(() => import("./pages/admin/discount"));
  const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
  const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
  const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
  const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
  const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
  const Toss = lazy(() => import("./pages/admin/apps/toss"));
  const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
  const ProductManagement = lazy(
    () => import("./pages/admin/management/productmanagement")
  );
  const TransactionManagement = lazy(
    () => import("./pages/admin/management/transactionmanagement")
  );
  const DiscountManagement = lazy(
    () => import("./pages/admin/management/discountmanagement")
  );

  const NewDiscount = lazy(() => import("./pages/admin/management/newdiscount"));

  const App = () => {
    const { user, loading } = useSelector(
      (state: RootState) => state.userReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const data = await getUser(user.uid);
          dispatch(userExist(data.user));
        } else dispatch(userNotExist());
      });
    }, []);

    return loading ? (
      <Loader />
    ) : (
      <Router>
        {/* Header */}
        <Header user={user} />
        <Suspense fallback={<LoaderLayout />}>
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/team" element={<Teampage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/policy" element={<Policy/>} />
            <Route path="/t&c" element={<TermandCondition/>} />
            <Route path="/cancellation" element={<CancellationPage/>} />








            {/* Not logged In Route */}
            <Route
              path="/login"
              element={
                <ProtectedRoute isAuthenticated={user ? false : true}>
                  <Login />
                </ProtectedRoute>
              }
            />
            {/* Logged In User Routes */}
            <Route
              element={<ProtectedRoute isAuthenticated={user ? true : false} />}
            >
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/pay" element={<Checkout />} />
              
            </Route>
            {/* Admin Routes */}
            <Route
              element={
                <ProtectedRoute
                  isAuthenticated={true}
                  adminOnly={true}
                  admin={user?.role === "admin" ? true : false}
                />
              }
            >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/customer" element={<Customers />} />
              <Route path="/admin/all-orders" element={<AdminOrders />} />
              <Route path="/admin/discount" element={<Discount />} />

              {/* Charts */}
              <Route path="/admin/chart/bar" element={<Barcharts />} />
              <Route path="/admin/chart/pie" element={<Piecharts />} />
              <Route path="/admin/chart/line" element={<Linecharts />} />
              {/* Apps */}
              <Route path="/admin/app/coupon" element={<Coupon />} />
              <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
              <Route path="/admin/app/toss" element={<Toss />} />

              {/* Management */}
              <Route path="/admin/product/new" element={<NewProduct />} />

              <Route path="/admin/product/:id" element={<ProductManagement />} />

              <Route
                path="/admin/transaction/:id"
                element={<TransactionManagement />}
              />

              <Route path="/admin/discount/new" element={<NewDiscount />} />

              <Route
                path="/admin/discount/:id"
                element={<DiscountManagement />}
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="bottom-center" />
      </Router>
    );
  };

  export default App;
