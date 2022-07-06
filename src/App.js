import React, {useState} from "react";
// import { Nav, Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import FormCard from "./components/FormCard";
import './style.css';
import Footer from "./components/Footer";

function App() {

  //const [addresses, getaddresses] = useState([])
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <FormCard />
      {/*  addresses={addresses}/> */}
      <Footer />
    </div>
  );
}

export default App;
