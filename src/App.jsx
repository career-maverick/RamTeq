import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect for the redirect check
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Component to handle development redirect logic
const DevelopmentRedirectHandler = ({ children }) => {
  const location = useLocation();
  const unwantedDevPath = '/RamTeq-LandingSite';

  // Only run this check in development mode
  if (import.meta.env.DEV && location.pathname.startsWith(unwantedDevPath)) {
    // Calculate the correct path by removing the unwanted prefix
    const correctPath = location.pathname.substring(unwantedDevPath.length) || '/';
    console.warn(`Redirecting from development path ${location.pathname} to ${correctPath}`);
    // Use Navigate component for declarative redirection
    return <Navigate to={correctPath + location.search + location.hash} replace />;
  }

  return children; // Render children if no redirect is needed
};

function App() {
  return (
    <Router>
      <DevelopmentRedirectHandler> {/* Wrap the main content */} 
        <Navbar />
        <div className="container"> {/* Optional: Add a container for padding/styling */} 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Optional: Add a catch-all route for 404 pages if desired */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </div>
      </DevelopmentRedirectHandler>
    </Router>
  );
}

export default App;
