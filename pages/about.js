import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  const [aboutText, setAboutText] = useState(
    "Kül Hot Sauce was born out of a passion for flavor and a love for the perfect balance of heat and taste. " +
    "Our journey began with a single batch of peppers in a small kitchen — and quickly grew into a full-fledged sauce business that now reaches spice lovers worldwide. " +
    "Each sauce is crafted with care, using only the freshest local peppers and spices. From our mild Jalapeño Zing to our extra hot Zehirli Zakkum, " +
    "we strive to bring you the highest quality sauces that transform every meal into a culinary adventure. " +
    "Thank you for joining us on this journey — we can’t wait for you to experience the heat!"
  );

  useEffect(() => {
    const savedAbout = localStorage.getItem('about');
    if (savedAbout) {
      setAboutText(savedAbout);
    }
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Kül Hot Sauce
        </h1>
        <p className="text-lg mb-4 whitespace-pre-wrap">
          {aboutText}
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Kül Hot Sauce. All rights reserved.
      </footer>
    </div>
  );
}
