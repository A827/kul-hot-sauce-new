import Navbar from '../components/Navbar';
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "Classic Cayenne",
      image: "/images/cayenne.png",
      description: "Medium heat with a punch of flavor.",
    },
    {
      name: "Jalapeño Zing",
      image: "/images/jalapeno.png",
      description: "Mild kick with a citrus twist — great for nachos!",
    },
    {
      name: "Zehirli Zakkum",
      image: "/images/zehirli-zakkum.png",
      description: "Our hottest sauce — not for the faint of heart!",
    },
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Hot Sauces
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded mb-4 mx-auto"
              />
              <h2 className="text-2xl font-semibold mb-2">
                {product.name}
              </h2>
              <p className="mb-4">{product.description}</p>
              <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
