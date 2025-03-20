/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  {
    _id: "01",
    name: "Diamond Necklace",
    price: 999.99,
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "02",
    name: "Necklace and Bracelet",
    price: 1499.99,
    category: "Necklaces",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1724762183134-c17cf5f5bed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: "03",
    name: "Pearl Earrings",
    price: 299.99,
    imageUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "04",
    name: "Sapphire Ring",
    price: 799.99,
    imageUrl:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to SS Jewelry Store</h1>
        <div className="text-xl text-gray-600 mb-8">
          Discover our exquisite collection of handcrafted jewelry
        </div>
        <Link
          href="/shop"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors text-lg font-semibold"
        >
          Explore Our Collection
        </Link>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">
        Featured Pieces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://media.istockphoto.com/id/2027526224/photo/luxury-jewellery-store-with-jewels-on-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ar1w777E1oe_QskOqHrXYgWJDww9OTAeDQfMQsvya8U="
              alt="SS Jewelry Store workshop"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              At SS Jewelry Store, we believe that jewelry is more than just an
              accessory – it&apos;s a reflection of your unique story and
              personality. Our passion for craftsmanship and attention to detail
              ensures that each piece we create is as special as the person
              wearing it.
            </p>
            <p className="text-gray-700">
              Founded by Sarah and Sam, two lifelong friends with a shared love
              for beautiful jewelry, SS Jewelry Store has been bringing smiles
              to our customers&apos; faces for over a decade. We invite you to
              explore our collection and find the perfect piece to add to your
              story.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let&apos;s Create Something Beautiful Together
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Visit our store or book a virtual consultation to start your jewelry
          journey with us.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors text-lg font-semibold"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
