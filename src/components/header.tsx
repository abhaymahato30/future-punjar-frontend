import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsUserMenuOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const navLinkStyle = (path: string): React.CSSProperties => ({
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
      <header className=" bg-slate-900" style={{
        position: "fixed",
        top: "32px",
        width: "100%",
        zIndex: 20,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      
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
          {/* Logo */}
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
       

          {/* Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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

            {/* Mobile Menu Toggle */}
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
  position: "fixed",
  top: "132px", // 32px (WhatsApp banner) + 100px (header)
  right: isMobileMenuOpen ? "0" : "-250px",
  width: "250px",
  height: "100vh",
  backgroundColor: "#1e293b",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  transition: "left 0.3s ease-in-out",
  zIndex: 40
}}>
          <span onClick={() => { setIsMobileMenuOpen(false); navigate("/"); }} style={navLinkStyle("/")}>Home</span>
          <span onClick={() => { setIsMobileMenuOpen(false); scrollToSection("products"); }} style={navLinkStyle("/products")}>Products</span>
          <span onClick={() => { setIsMobileMenuOpen(false); scrollToSection("review"); }} style={navLinkStyle("/review")}>Review</span>
          <Link to="/about" style={navLinkStyle("/about")} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/team" style={navLinkStyle("/team")} onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          <Link to="/contact" style={navLinkStyle("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
