
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import BookRides from "./BookRides";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import ViewRides from './ViewRides';
import { Link, Routes, Route } from 'react-router-dom'

function App() {

  //const [addresses, getaddresses] = useState([])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="book" element={<BookRides />} />
        <Route path="view" element={<ViewRides />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
