import React, { useState, useEffect } from "react";
import BANNERS from "../banners";
import "./MovieBanner.css";

const MovieBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="movie-banner">
      <img
        src={BANNERS[currentImageIndex]}
        alt={"Movie Banner"}
      />
    </div>
  );
};

export default MovieBanner;