 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Courses from './components/Courses';
import PageNotFound from './components/pages/PageNotFound';
import OurTeam from './components/OurTeam';
import AboutReadMore from './components/pages/AboutReadMore';

function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/course' element={<Courses />} />
     {/* pages */}
     <Route path='/about_readmore' element={<AboutReadMore />} />
      <Route path='/our-team' element={<OurTeam />} /> 
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
        
    </>
  );
}

export default App;
