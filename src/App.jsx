import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Service";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Clients from "./Components/Clients";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FAQ from "./Components/FAQ";
import WhatsAppButton from "./Components/WhatsAppButton";
import CustomCursor from "./Components/CustomCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    <CustomCursor/>
      <AnimatePresence>
        {isLoading && (
          <Preloader
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Clients />
            <Testimonials />
            <FAQ/>
            <Contact />
          </main>

          <Footer />
          <WhatsAppButton/>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
          />
        </>
      )}
    </>
  );
}

export default App;