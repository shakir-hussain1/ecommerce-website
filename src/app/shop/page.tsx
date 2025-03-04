"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    _id: "1",
    name: "Diamond Necklace",
    price: 999.99,
    category: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "2",
    name: "Gold Ring",
    price: 549.99,
    category: "Rings",
    imageUrl:
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: "3",
    name: "Pearl Earrings",
    price: 299.99,
    category: "Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "4",
    name: "Sapphire Ring",
    price: 799.99,
    category: "Rings",
    imageUrl:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "5",
    name: "Emerald Pendant",
    price: 1299.99,
    category: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "6",
    name: "Ruby Stud Earrings",
    price: 499.99,
    category: "Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "7",
    name: "Necklace and Bracelet",
    price: 1499.99,
    category: "Necklaces",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1724762183134-c17cf5f5bed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: "8",
    name: "Silver Charm Bracelet",
    price: 249.99,
    category: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "9",
    name: "Gold Pendant Necklace",
    price: 1199.99,
    category: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: "10",
    name: "Gold Bracelet",
    price: 599.99,
    category: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    _id: "11",
    name: "Diamond Hoop Earrings",
    price: 749.99,
    category: "Earrings",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFycmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: "12",
    name: "Gold Chain Bracelet",
    price: 949.99,
    category: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const urlSearchQuery = searchParams.get("q");

  useEffect(() => {
    if (urlSearchQuery) {
      setSearchQuery(urlSearchQuery);
    }
  }, [urlSearchQuery]);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Shop SS Jewelry Store Collection
      </h1>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <label htmlFor="sort" className="block mb-2 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
}
