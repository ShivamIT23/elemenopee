import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function CheckOut() {
  return (
    <motion.main
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="min-h-screen h-fit tommy relative w-full"
    >
        <h2 className=" edu text-[#FF388E] w-svw text-center font-bold text-2xl sm:text-3xl md:text-[40px] mb-2 sm:mb-4">
          Check-Out
        </h2>
      <section className="p-3 sm:p-6 min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-7xl mx-auto">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl mx-auto lg:mx-0">
          {/* Mobile */}
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Mobile
            </label>
            <input
              type="text"
              placeholder="+91 9876543210"
              className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-medium focus:outline-none"
            />
          </div>
          {/* Ship to */}
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Ship to
            </label>
            <input
              type="text"
              placeholder="Full name"
              value="Divija Maheshwari"
              className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-medium focus:outline-none"
              readOnly
            />
          </div>
          {/* Add an Address */}
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Add an Address
            </label>
            <input
              type="text"
              placeholder="Address"
              value="A-12, Sector 5, Dwarka, New Delhi, 110007"
              className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-semibold focus:outline-none mb-3"
              readOnly
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Pincode"
                value="110007"
                className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-medium focus:outline-none"
                readOnly
              />
              <input
                type="text"
                placeholder="Landmark"
                value="Delhi University"
                className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-semibold focus:outline-none"
                readOnly
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="City"
                value="New Delhi"
                className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-semibold focus:outline-none"
                readOnly
              />
              <input
                type="text"
                placeholder="State"
                value="Delhi"
                className="w-full p-3 rounded border border-[#E6D6B8] bg-[#FFEFCF] text-[15px] font-semibold focus:outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
        {/* Right: Summary */}
        <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          <div className="w-full max-w-md mx-auto bg-transparent">
            <h3 className="text-center lg:text-left edu text-[#FF388E] font-bold text-2xl mb-4">
              Item Summary
            </h3>
            <div className="flex gap-4 items-center mb-2">
              <img
                src="/items/img1.png"
                alt="item"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col gap-1">
                <select className="border border-gray-300 rounded px-2 py-1 text-[14px]">
                  <option>Qty : 1</option>
                </select>
                <span className="text-[13px] text-gray-700">
                  Arrives in 7 days
                </span>
                <span className="text-[13px] text-gray-700">
                  You are saving{" "}
                  <span className="text-[#FF388E] font-semibold">₹643</span>{" "}
                  rupees
                </span>
              </div>
              <span className="ml-auto text-[22px] font-bold">₹876</span>
            </div>
            <div className="mt-6 mb-2">
              <h4 className="text-[18px] font-semibold mb-1">Price Summary</h4>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[18px]">TOTAL</span>
                <span className="text-[#FF388E] font-bold text-[22px]">
                  ₹876
                </span>
              </div>
            </div>
            <button className="w-full bg-[#FF388E] text-white font-bold text-[18px] rounded mt-4 py-2 transition hover:bg-pink-500">
              PAY ₹876
            </button>
            <div className="flex justify-center items-center mt-2">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-2a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6-9V4m0 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
                    stroke="#888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
