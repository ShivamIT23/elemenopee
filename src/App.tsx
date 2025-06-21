import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      eventsTarget: window,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    raf(performance.now());

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative pt-[80px] h-fit min-h-screen ">
      <Router>
        <div className="absolute flex justify-center h-[80px] top-0 w-svw">
          <Navbar />
        </div>
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
