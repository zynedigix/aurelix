import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { CheckoutModal } from "./components/ui/CheckoutModal";
import { LoadingScreen } from "./components/ui/LoadingScreen";

function App() {
  const location = useLocation();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isAppLoaded && <LoadingScreen onLoadComplete={() => setIsAppLoaded(true)} />}
      
      <div className={`bg-black text-white min-h-screen font-sans selection:bg-zinc-800 selection:text-white relative transition-opacity duration-1000 ${isAppLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <Navbar onOpenCheckout={() => setIsCheckoutOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenCheckout={() => setIsCheckoutOpen(true)} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />

        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      </div>
    </>
  );
}

export default App;
