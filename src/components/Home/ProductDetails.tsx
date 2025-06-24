import { useState } from "react";

const productImages = [
  "/items/img1.png",
  "/items/img1.png",
  "/items/img1.png",
  "/items/img1.png",
];

const sizes = ["2-3Y", "3-4Y", "4-5Y", "5-6Y"];

export default function ProductDetails() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <section className="flex flex-col md:flex-row gap-8 p-6 w-svw rounded-lg shadow-md">
      {/* Images */}
      <div className="flex flex-col gap-4 items-start md:w-1/2 px-[10vw]">
        <img
          src={productImages[selectedIdx]}
          alt="Product"
          className="w-[70%] rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] object-cover border"
        />
        <div className="flex gap-2 mx-auto">
          {productImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-[25%] object-cover rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 ${
                selectedIdx === idx ? "border-pink-400" : "border-gray-200"
              }`}
              onClick={() => setSelectedIdx(idx)}
            />
          ))}
        </div>
        <div className="flex gap-8 mt-6 w-full justify-center text-center">
          <div>
            <img
              src="/delivery.png"
              alt="Fast Delivery"
              className=" h-20 mx-auto"
            />
          </div>
          <div>
            <img
              src="/payment.png"
              alt="Secure Payments"
              className="h-20 mx-auto"
            />
          </div>
          <div>
            <img
              src="/customer.png"
              alt="Happy Customers"
              className="h-20 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-4 md:w-1/2  max-w-[452px] mr-[10vw]">
        <h1 className="text-2xl font-bold text-[#333333]">
          2-Pc Plaid Shirt & Denim Jeans
        </h1>
        <div className="flex font-semibold items-center gap-2">
          <span className="text-[#FF388E] text-[32px] font-bold">₹876</span>
          <span className="line-through text-[16px] text-[#8B8A89]">
            ₹1,519
          </span>
          <span className="text-[#008000] text-[16px]">(42% off)</span>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between text-[16px] font-bold w-full text-[#333333]">
            <p>Offers</p>
            <p className="text-[#FF388E] cursor-pointer">SEE ALL</p>
          </div>
          <div className="text-[13.02px] font-[550] text-[#0C884A]">
            Best price ₹876. You save ₹36.
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between w-full">
            <label
              htmlFor="size"
              className="font-semibold text-[13px] text-[#333333]"
            >
              Size
            </label>
            <p className="text-[#ff388e] text-[16px] font-bold">
              View Size Chart
            </p>
          </div>
          <div className="relative w-full">
            <select
              id="size"
              className="border block cursor-pointer appearance-none border-[#8B8A89] focus:outline-none bg-transparent text-[#A4A4A4] placeholder-[#A4A4A4] rounded px-2 py-1 w-full"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select a size</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#FF388E]">
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_322_464)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.73026 2.62277L6.52034 7.41212L6.86193 7.75463L7.54609 7.07058L7.20353 6.72807L2.41345 1.93871L2.07282 1.59717L1.3877 2.28122L1.73026 2.62373V2.62277ZM11.3094 1.93968L7.20353 6.04401L6.86193 6.38652L7.54609 7.07058L7.88865 6.72807L11.9936 2.62373L12.3362 2.28122L11.652 1.59717L11.3094 1.93968Z"
                    fill="#FF388E"
                  />
                  <path
                    d="M7.54609 7.07058L6.86193 7.75463L6.52034 7.41212L1.73026 2.62277V2.62373L1.3877 2.28122L2.07282 1.59717L2.41345 1.93871L7.20353 6.72807L7.54609 7.07058ZM7.54609 7.07058L6.86193 6.38652L7.20353 6.04401L11.3094 1.93968L11.652 1.59717L12.3362 2.28122L11.9936 2.62373L7.88865 6.72807L7.54609 7.07058Z"
                    stroke="#FF388E"
                    stroke-linecap="square"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_322_464">
                    <rect
                      width="12.58"
                      height="8"
                      fill="white"
                      transform="translate(0.419922 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-transparent border border-[#FF388E] text-pink-600 px-6 py-2 rounded font-semibold hover:text-white transition-all duration-300 hover:bg-pink-500/50">
            ADD TO CART
          </button>
          <button className="bg-[#FF388E] text-white px-6 py-2 rounded font-semibold hover:bg-pink-600">
            BUY NOW
          </button>
        </div>
        <div className="mt-4 text-sm">
          <div className="mb-2 text-[16px] font-semibold w-full flex justify-between text-[#333333]">
            <p>Delivery</p>
            <p className="text-[#FF388E] cursor-pointer">Check Pin code</p>
          </div>
          <ul className=" text-[#4F4F4F] font-medium">
            <li className="flex items-center gap-[2px]">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 4"
                    stroke="#4F4F4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Get it in{" "}
                <span className="bg-[#35B35D] text-white px-2 py-0.5 rounded">
                  2-3 days
                </span>{" "}
                (Usually ships within a day)
              </span>
            </li>
            <p className="text-[#707070] ml-[18px]">
              Select size and enter pincode for accurate delivery date
            </p>
            <li className="flex items-center gap-[2px]">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 4"
                    stroke="#4F4F4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              15 Day Return
            </li>
            <li className="flex items-center gap-[2px]">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 4"
                    stroke="#4F4F4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Easy Exchange
            </li>
            <li className="flex items-center gap-[2px]">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 4"
                    stroke="#4F4F4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Cash On Delivery
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm">
          <div className="mb-2 text-[16px] font-semibold text-[#333333]">
            Product Details
          </div>
          <p className="text-[#4F4F4F] font-medium">
            Give your child a classic and timeless outfit with this 2-piece
            plaid shirt and denim jeans set, perfect for casual outings and
            everyday wear. The plaid design adds a touch of rustic charm to the
            outfit.
            <br />
            <b>What's Included:</b> 1 Shirt, 1 Jeans
            <br />
            <b>Material:</b> Cotton
            <br />
            <b>Fabric:</b> 95% Cotton, 5% Spandex
          </p>
        </div>
      </div>
    </section>
  );
}
