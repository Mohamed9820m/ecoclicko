import React, { useEffect } from "react";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components/index";
import Services from "./pages/Services";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Partners } from "./pages/Partners";
import { Units } from "./pages/Units";
import { EcoBlogs } from "./pages/ecoBlogs";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OneBlogPage from "./pages/OneBlogPage";
import ContactForm from "./pages/ContactForm";
import ContactUsPage from "./pages/ContactUsPage";
import BlogsPage from "./pages/BlogsPage";
import Comments from "./Admin/components/Comments/Comments";
import Users from "./Admin/components/Users/Users";
import AddBlog from "./components/Blogs/AddBlog/AddBlog";

import ActivationEmail from "./components/Activation/ActivationEmail";
import ResetPasswordPage from "./components/Reset/ResetPassword";
import Payemee from "./components/Payement/Payemee";
import Product from "./components/Product/Product";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";
import Profile from "./components/MyProfile/Profile";
import LoginAdmin from './Admin/components/LoginAdmin/LoginAdmin'
import PrivateRoutes from "./Admin/components/PrivateRoutes";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (window.location.href.includes("#fr")) {
      i18n.changeLanguage("fr");
    }
    if (window.location.href.includes("#en")) {
      i18n.changeLanguage("en");
    }
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/partnership" element={<Partners />} />
          <Route path="/units" element={<Units />} />
          <Route path="/ecoblogs" element={<EcoBlogs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/OneBlog/:id" element={<OneBlogPage />} />

          <Route
            path="/confirm/:activationcode"
            element={<ActivationEmail />}
          />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPasswordPage />}
          />
          <Route path="/payement" element={<Payemee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/myprofile" element={<Profile />} />

          {/* Admin */}
          <Route path="/logDashboard" element={<LoginAdmin />} />
          <Route element={<PrivateRoutes />}>
          <Route path="/dashboard/blog" element={<BlogsPage />} />
          <Route path="/dashboard/comments" element={<Comments />} />
          <Route path="/dashboard" element={<AddBlog />} />
          <Route path="/dashboard/users" element={<Users />} />
            </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
