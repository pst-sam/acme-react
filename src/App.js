import ContactForm from "./ContactForm";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Hero from "./Hero";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";
import Layout from "./Layout";
import Footer from "./Footer";


function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route index element={<Hero />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  );
}

export default App;
