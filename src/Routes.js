import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Ambulance from "./Pages/Ambulance";
import Services from "./Pages/Services";
import Corporate from "./Pages/Corporate";
import Blog from "./Pages/Blog";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/ambulance" exact element={<Ambulance />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/corporate" exact element={<Corporate />} />
        <Route path="/blog" exact element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
