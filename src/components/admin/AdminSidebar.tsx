import { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  
 
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
 
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { MdDiscount } from "react-icons/md";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
                marginTop:"28vh",
              }
            : {}
        }
        
      >
        
        <DivOne location={location} />
        <DivTwo location={location} />
        {/* <DivThree location={location} /> */}

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Product"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/all-orders"
        text="Orders"
        Icon={AiFillFileText}
        location={location}
      />

      <Li
        url="/admin/discount"
        text="Discount"
        Icon={MdDiscount}
        location={location}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);

// const DivThree = ({ location }: { location: Location }) => (
//   <div>
//     <h5>Apps</h5>
//     <ul>
//       <Li
//         url="/admin/app/stopwatch"
//         text="Stopwatch"
//         Icon={FaStopwatch}
//         location={location}
//       />
//       <Li
//         url="/admin/app/coupon"
//         text="Coupon"
//         Icon={RiCoupon3Fill}
//         location={location}
//       />
//       <Li
//         url="/admin/app/toss"
//         text="Toss"
//         Icon={FaGamepad}
//         location={location}
//       />
//     </ul>
//   </div>
// );

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
