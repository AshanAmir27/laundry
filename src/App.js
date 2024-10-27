import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services"; // Correct the import path for Services
import Footer from "./components/Footer";
import About from './components/About'
import Contact from "./components/Contact";

function App() {
  return (
    <Router> {/* Wrap your application with Router */}
      <div>
        <Navbar />
        <Routes> {/* Define the routes for your application */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/services" element={<Services />} /> {/* Services route */}
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          {/* You can add more routes here as needed */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
