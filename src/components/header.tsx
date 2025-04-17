import { useState } from "react";
import { Link } from "react-router-dom";
// import logo1 from "../../assets/general/Logo-3.png";
import {

  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [linkHover, setLinkHover] = useState<string | null>(null);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsUserMenuOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  const navLinkStyle = (path: string) => ({
    fontSize: "1.125rem",
    fontWeight: 500,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    color: linkHover === path ? "#facc15" : "#ffffff",
    transform: linkHover === path ? "scale(1.05)" : "scale(1)",
    textDecoration: linkHover === path ? "underline" : "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  });

  return (
    <>
      {/* WhatsApp Banner */}
      <div style={{
        backgroundColor: "#eab308",
        textAlign: "center",
        padding: "8px 0",
        color: "white",
        fontWeight: 500,
        fontSize: "0.875rem",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 30
      }}>
        <a
          href="https://wa.me/9430649460"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "white",
            textDecoration: "none"
          }}
        >
          <FaWhatsapp style={{ fontSize: "1.125rem" }} />
          For bulk orders, contact us on WhatsApp
        </a>
      </div>

      {/* Header */}
      <header style={{
        position: "fixed",
        top: "32px",
        width: "100%",
        zIndex: 20,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#1e293b"
      }}>
        <nav style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "30px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          height: "100px"
        }}>
          {/* Logo with Link to Home */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
          src="https://res.cloudinary.com/duzo8q4gg/image/upload/v1738263106/Logo-3_av9fsj.png"
          alt="Logo"
         style={{ width: "128px", height: "80px" }}
          />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: "none", gap: "48px", fontSize: "1.125rem", fontWeight: 500, fontFamily: "sans-serif", textTransform: "uppercase" }}>
            {["/", "/about", "/team", "/products", "/review", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                style={navLinkStyle(path)}
                onMouseEnter={() => setLinkHover(path)}
                onMouseLeave={() => setLinkHover(null)}
              >
                {path === "/" ? "Home" : path.slice(1)}
              </Link>
            ))}
          </div>

          {/* Icons Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* <Link to="/search" style={{ color: "white" }}>
              <FaSearch />
            </Link> */}
            <Link to="/cart" style={{ color: "white" }}>
              <FaShoppingBag />
            </Link>
            
            {user?._id ? (
              <div style={{ position: "relative" }}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
                >
                  <FaUser />
                </button>
                {isUserMenuOpen && (
                  <div style={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    minWidth: "160px"
                  }}>
                    {user.role === "admin" && (
                      <Link 
                        to="/admin/dashboard"
                        style={{ color: "#1e293b", textDecoration: "none" }}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Admin
                      </Link>
                    )}
                    <Link
                      to="/orders"
                      style={{ color: "#1e293b", textDecoration: "none" }}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <button 
                      onClick={logoutHandler}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#1e293b",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <FaSignOutAlt /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" style={{ color: "white" }}>
                <FaSignInAlt />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                display: "block",
                cursor: "pointer"
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                style={{ width: "32px", height: "32px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div style={{
          display: isMobileMenuOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "24px",
          backgroundColor: "#1e293b",
          padding: "24px",
          borderTop: "2px solid #e2e8f0"
        }}>
          {["/", "/about", "/team", "/products", "/review", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              style={{
                ...navLinkStyle(path),
                textAlign: "center",
                fontSize: "1.125rem"
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {path === "/" ? "Home" : path.slice(1)}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;