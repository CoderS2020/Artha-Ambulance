import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Ambulance from './Pages/Ambulance';
import Services from './Pages/Services';
import Corporate from './Pages/Corporate';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Compose from './Pages/Blog/Compose';
import Delete from './Pages/Blog/Delete';
import Error from './Pages/Login/Error';
import BlogInformation from './Pages/Blog/BlogInformation';
import EditPage from './Pages/Blog/EditPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/ambulance" exact element={<Ambulance />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/corporate" exact element={<Corporate />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/compose" exact element={<Compose />} />
        <Route path="/delete" exact element={<Delete />} />

        <Route path="/bloginfo/:id" exact element={<BlogInformation />} />
        <Route path="/editblog/:id" exact element={<EditPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
