import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
      <Helmet>
        <title>404 - Page Not Found | Qasida Tech Studio</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Explore Qasida Tech Studio for web development and UI/UX services."
        />
      </Helmet>

      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold mb-4">404</h1>

      {/* Message */}
      <h2 className="text-xl md:text-2xl mb-3">
        Oops… this page doesn’t exist
      </h2>

      <p className="text-gray-400 mb-6 max-w-md">
        The page you’re looking for might have been removed, renamed, or never
        existed in the first place.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
