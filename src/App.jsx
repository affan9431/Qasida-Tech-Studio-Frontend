import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Review from "./pages/Review";

import { Toaster } from "react-hot-toast";
import "./locomotiveScroll.css";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Home */}
            <Route index element={<Home />} />

            {/* Static Pages */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="review" element={<Review />} />
            <Route path="services/:serviceId" element={<ServiceDetails />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetails />} />

            {/* Dynamic Project Page */}
            <Route path="projects/:projectId" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </>
  );
}

export default App;
