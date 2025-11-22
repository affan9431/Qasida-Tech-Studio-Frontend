import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function AppLayout() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const scrollInstance = useRef(null);

  // Initialize LocomotiveScroll after images are loaded
  useEffect(() => {
    const scrollEl = scrollRef.current;

    const initScroll = () => {
      if (!scrollEl) return;
      scrollInstance.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.25,
      });
    };

    // Wait for all images to load
    const images = scrollEl.querySelectorAll("img");
    let loadedImages = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener("load", () => {
          loadedImages++;
          if (loadedImages === images.length) initScroll();
        });
        img.addEventListener("error", () => {
          loadedImages++;
          if (loadedImages === images.length) initScroll();
        });
      }
    });

    if (images.length === loadedImages) initScroll();

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);

  // Update LocomotiveScroll on route change
  useEffect(() => {
    scrollInstance.current?.update();
  }, [location]);

  return (
    <div
      className="scroll-container"
      ref={scrollRef}
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content */}
      <main>
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
