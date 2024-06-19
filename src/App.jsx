import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Providers } from "./context/Providers";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Lessons from "./pages/Lessons";
import Terms from "./pages/Terms";
import ServiceDet from "./pages/ServiceDet";
import Comments from "./pages/Comments";

function App() {
  return (
    <Providers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/terms_of_work" element={<Terms />} />
        <Route path="/:name/:id" element={<ServiceDet />} />
      </Routes>
      <Footer />
    </Providers>
  );
}

export default App;
