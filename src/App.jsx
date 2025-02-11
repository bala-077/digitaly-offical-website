import AboutSection from "./components/divisions/AboutSection";
import Arrow from "./components/divisions/Arrow";
import ConnectionForm from "./components/divisions/ConnectionForm";
import Csuite from "./components/divisions/Csuite";
import FooterSection from "./components/divisions/FooterSection";
import Projects from "./components/divisions/Projects";
import ServiceSection from "./components/divisions/ServiceSection";
import Staffs from "./components/divisions/Staffs";
import Whatsapp from "./components/divisions/Whatsapp";
import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./components/pages/ServicePage";
import { NavTitleProvider } from "./components/context/NavTitle";
import { ServiceContent } from "./components/context/ServiceContent";
import IndustryPage from "./components/pages/IndustryPage";
import ProductPage from "./components/pages/ProductPage";
import { IndustryContent } from "./components/context/IndustryContent";
import { ProductContent } from "./components/context/ProductContext";
import ServiceContact from "./components/divisions/ServiceContact";

function App() {
  return (
    <NavTitleProvider>
      <IndustryContent>
        <ServiceContent>
          <ProductContent>
            <Router>
              <Navbar />
              <Whatsapp />
              <Arrow />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <AboutSection />
                      <ServiceSection />
                      <Projects />
                      <Csuite />
                      <Staffs />
                      <FooterSection />
                    </>
                  }
                />
                <Route path="/contact-form" element={<ConnectionForm />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/industries" element={<IndustryPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/service-contact" element={<ServiceContact />} />
              </Routes>
            </Router>
          </ProductContent>
        </ServiceContent>
      </IndustryContent>
    </NavTitleProvider>
  );
}

export default App;
