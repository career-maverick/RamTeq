import React from 'react';
import bannerImage from '../assets/banner.png'; // Import the banner image
import './HomePage.css'; // Create or use CSS for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to RamTeq!</h1>
      <div className="banner-container">
        <img src={bannerImage} alt="RamTeq Coming Soon Banner" className="banner-image"/>
        {/* You can add text overlay or other elements here if needed */}
      </div>
      <h2>Coming Soon...</h2>
      <p>We're working hard to bring you an exciting new gaming experience. Stay tuned!</p>
    </div>
  );
};

export default HomePage; 