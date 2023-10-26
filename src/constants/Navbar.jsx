import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/Logo.png";
import { BsFacebook, BsLinkedin, BsWhatsapp, BsGlobe, BsPersonFill } from "react-icons/bs";
import BubblyButton from "./BubblyButton";
import { Link , useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from "axios";
import { useTranslation } from "react-i18next";

const fetchUserImage = async (userId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/api/Users/oneUser/${userId}`);
    return response.data.image; 
  } catch (error) {
    console.error('Error fetching user image:', error);
    return null;
  }
};

function NavBar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const location = useLocation();
  const [t, i18n ] = useTranslation();

  const handleNavToggle = () => {
    setShowNavMenu(!showNavMenu);
  };

  // Close the navigation menu when a link is clicked
  const handleLinkClick = () => {
    setShowNavMenu(false);
  };

  useEffect(() => {
    // Close the navigation menu when the route changes
    setShowNavMenu(false);
  }, [location.pathname]);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLoggedIn(true);

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;

      fetchUserImage(userId)
        .then((image) => setUserImage(image))
        .catch((error) => console.error('Error fetching user image:', error));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
    setUserImage(null);
  };


  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-style">
          <Container>
            <Navbar.Brand href="#" className="">
              <img src={logo} width={130} height={50} alt="EcoCicko-Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
             onClick={handleNavToggle}
             />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showNavMenu}
            >
              <Offcanvas.Header closeButton onHide={handleNavToggle}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} width={130} height={50} alt="EcoCicko-Logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end mx-auto align-items-center">
                  <Link to="/" 
                  onClick={handleLinkClick}
                  className="navbarLinks-color nav-link"
                   
                   >
                    Home
                  </Link>
                  <Link to="/about" className="navbarLinks-color nav-link">
                    About
                  </Link>
                  <Link to="/services" className="navbarLinks-color nav-link">
                    Services
                  </Link>
                  <Link to="/units" className="navbarLinks-color nav-link">
                    Units
                  </Link>
                  <Link to="/partnership" className="navbarLinks-color nav-link">
                    Partnership
                  </Link>
                  <Link to="/ecoblogs" className="navbarLinks-color nav-link">
                    Eco Blog
                  </Link>
                </Nav>
                <div className="nav-icons d-flex align-items-center">
                  <ul className="d-flex m-3 list-unstyled">
                    <li className="me-3">
                      <a
                        href="https://www.linkedin.com/in/nissaf-sleimi-984694b4/"
                        className="navbarLinks-color"
                        aria-label="instagram"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li className="me-3">
                      <a
                        href="https://www.facebook.com/ecoclicko"
                        className="navbarLinks-color"
                        aria-label="facebook"
                      >
                        <BsFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/message/R2KUHAI7HEI2K1"
                        className="navbarLinks-color"
                        aria-label="whatsapp"
                      >
                        <BsWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center _n1CnLn">
                  <div className="d-flex align-items-center me-4">
                    <Link to="/contact">
                    <button className="mainBtn">Contact Us</button>
                    </Link>
                  </div>

                  <div className="d-flex align-items-center sm_content-center">
                    <NavDropdown
                      title={<BsGlobe className="fs-4" aria-label="globe" />}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#ar">Ar</NavDropdown.Item>
                      <NavDropdown.Item href="#fr" onClick={() => {
                        i18n.changeLanguage('fr');
                      }}>Fr</NavDropdown.Item>
                      <NavDropdown.Item href="#en" onClick={() => {
                        i18n.changeLanguage('en');
                      }}>En</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="d-flex align-items-center sm_content-center m-3 me-6">
  {isLoggedIn ? (
    <NavDropdown title={<img src={userImage || 'DEFAULT_AVATAR_URL'} alt="User Avatar" className="avatar-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid green', objectFit:"cover" }} />} id="offcanvasNavbarDropdown">
      <NavDropdown.Item>
        <Link to="/myprofile" className="text-dark text-decoration-none">
          My Profile
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    </NavDropdown>
  ) : (
    <NavDropdown title={<BsPersonFill className="fs-4" aria-label="avatar" />} id="offcanvasNavbarDropdown">
      <NavDropdown.Item>
        <Link to="/login" className="text-dark text-decoration-none">
          Login
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="/register" className="text-dark text-decoration-none">
          Register
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  )}
</div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
