export default function Cart() {
  return (
    <main className="min-h-screen h-fit tommy relative w-full bg-[#FFF7ED]">
      <h2 className="edu text-[#FF388E] w-svw text-center font-bold text-2xl sm:text-3xl md:text-[40px] mb-2 sm:mb-4 mt-4">
        Your Cart
      </h2>
      <section className="p-3 sm:p-6 flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-6xl mx-auto">
        {/* Left: Cart Item */}
        <div className="flex-1 flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start bg-white/0 p-2 rounded-lg">
            <img
              src="/items/img1.png"
              alt="item"
              className="w-28 h-28 object-cover rounded"
            />
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-bold text-lg sm:text-xl md:text-2xl text-[#333333]">
                  2-Pc Plaid Shirt & Denim Jeans
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#FF388E] font-bold text-xl">₹876</span>
                <span className="text-[#8B8A89] line-through font-semibold text-[13px] ml-2">
                  ₹1,519
                </span>
                <span className="text-green-600 text-[13px] ml-2 font-semibold">
                  (42% off)
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <select className="border border-gray-300 rounded px-2 py-1 text-[14px]">
                  <option>Qty : 1</option>
                </select>
              </div>
              <span className="text-[13px] text-[#565656] ml-2">
                Arrives in 7 days
              </span>
              <button className="ml-auto text-[#565656] hover:text-[#FF388E] transition">
                <svg width="18" height="18" fill="#565656" viewBox="0 0 24 24">
                  <path
                    d="M3 6h18M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Right: Price Summary */}
        <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          <div className="w-full text-[#565656] max-w-md mx-auto bg-transparent">
            <h3 className="text-left font-bold text-black text-lg mb-4">
              Price Summary
            </h3>
            <div className="flex justify-between items-center mb-2">
              <span>Total Item Price</span>
              <span className="text-[15px] text-[#555555] font-semibold">
                ₹1,519
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Item Discount</span>
              <span className="text-[15px] font-semibold text-[#555555]">
                -₹643
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Shipping Fee</span>
              <span className="text-[15px] font-semibold text-[#555555]">
                Free
              </span>
            </div>
            <div className="flex justify-between items-center mt-4 mb-2 font-bold text-lg">
              <span className="text-black">TOTAL</span>
              <span className="text-[#FF388E] text-[22px] font-bold">₹876</span>
            </div>
            <button className="w-full bg-[#FF388E] text-white font-bold text-[18px] rounded mt-4 py-2 transition hover:bg-pink-500">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </section>
      {/* Features Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 mt-10 mb-8">
        <div className="flex flex-col items-center">
          <img
            src="/delivery.png"
            alt="Fast Delivery"
            className="h-20 mb-1"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/payment.png"
            alt="Secure Payments"
            className="h-20 mb-1"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/customer.png"
            alt="Happy Customers"
            className="h-20 mb-1"
          />
        </div>
      </div>
    </main>
  );
}
