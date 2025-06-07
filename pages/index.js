import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [heroTitle, setHeroTitle] = useState('Ignite Your Taste Buds');
  const [heroTagline, setHeroTagline] = useState('Experience the perfect blend of heat and flavor with our handcrafted sauces.');

  useEffect(() => {
    const savedHomepage = localStorage.getItem('homepage');
    if (savedHomepage) {
      const { title, tagline } = JSON.parse(savedHomepage);
      setHeroTitle(title);
      setHeroTagline(tagline);
    }
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[60vh] bg-gradient-to-br from-red-600 to-yellow-500 text-white px-4">
        <h2 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          {heroTitle}
        </h2>
        <p className="text-xl max-w-2xl">
          {heroTagline}
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Sauces */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Signature Sauces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/images/cayenne.png"
              alt="Classic Cayenne"
              width={400}
              height={300}
              className="rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Classic Cayenne</h3>
            <p>Medium heat with a punch of flavor.</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Learn More
            </button>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/images/jalapeno.png"
              alt="Jalapeño Zing"
              width={400}
              height={300}
              className="rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Jalapeño Zing</h3>
            <p>Mild kick with a citrus twist — great for nachos!</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Learn More
            </button>
          </div>
          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src="/images/zehirli-zakkum.png"
              alt="Zehirli Zakkum"
              width={400}
              height={300}
              className="rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Zehirli Zakkum</h3>
            <p>Our hottest sauce — not for the faint of heart!</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-4">About Kül</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          From farm to bottle, every drop of Kül Hot Sauce is crafted with
          passion and the finest peppers. Learn how we bring the heat and
          flavor to your table.
        </p>
        <div className="text-center mt-6">
          <Link href="/about">
            <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        &copy; {new Date().getFullYear()} Kül Hot Sauce. All rights reserved.
      </footer>
    </div>
  );
}
