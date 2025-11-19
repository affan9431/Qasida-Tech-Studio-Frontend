import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function AppLayout() {
  const scrollRef = React.createRef();
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.25,
    });

    return () => {
      scroll.destroy();
    };
  });

  useEffect(() => {
    if (scrollRef.current?._loco) {
      scrollRef.current._loco.update();
    }
  }, [location, scrollRef]);

  return (
    <div
      className="min-h-screen flex flex-col scroll-container"
      ref={scrollRef}
    >
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-600">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
