import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./components/home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
