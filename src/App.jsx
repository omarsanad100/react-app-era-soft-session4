import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFoundPage from "./pages/NotFoundPage";
// Contact page
import Contact from "./pages/Contact";
// Contact sub-pages
import Emails from "./pages/contact/Emails";
import Locations from "./pages/contact/Locations";
import Phones from "./pages/contact/Phones";
import ContactUsForm from "./pages/contact/ContactUsForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />}>
          {/* Nested routes for contact */}
          <Route path="contact-form" element={<ContactUsForm />} />
          <Route path="emails" element={<Emails />} />
          <Route path="locations" element={<Locations />} />
          <Route path="phones" element={<Phones />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
