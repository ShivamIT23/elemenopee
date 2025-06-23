import React, { useState } from "react";

const sortOptions = [
  "Popular",
  "Highest Price",
  "Lowest Price",
  "New Arrivals",
];

const dummyProducts = new Array(8).fill({
  title: "2-Pc Plaid Shirt & Denim Jeans",
  price: "₹876",
  originalPrice: "₹1,519",
  discount: "42% off",
  imageUrl: "/items/img1.png", // Update with your real path
});

export default function Products() {
  const [selectedSort, setSelectedSort] = useState("Popular");

  return (
    <section className="p-3 sm:p-6 bg-[#FFF7ED] min-h-screen">
      <h2 className="text-center edu text-[#FF388E] font-bold text-2xl sm:text-3xl md:text-[40px] mb-4 sm:mb-6">
        Our Products
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-10 text-xs sm:text-sm text-gray-600">
        <span>Sort by:</span>
        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedSort(option)}
            className={`
              ${selectedSort === option
                ? "text-[#FF388E] font-medium underline text-xs sm:text-[14px]"
                : "hover:text-pink-400"}
              transition
            `}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-center px-[3vw] md:px-[5vw] lg:px-[10vw]">
        {dummyProducts.slice(0, 8).map((product, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full aspect-square object-cover"
            />
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
              <h3 className="text-xs sm:text-sm text-[#585858]">{product.title}</h3>
              <div className="text-pink-600 font-semibold mt-1 text-sm sm:text-base">
                {product.price}
                <span className="text-[#8B8A89] line-through text-[10px] ml-2">
                  {product.originalPrice}
                </span>
                <span className=" text-[#8B8A89] text-[10px] ml-[4px]">
                  ({product.discount})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
