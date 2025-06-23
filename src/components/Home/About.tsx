export default function About() {
  return (
    <section className="relative flex flex-col justify-center items-center mt-[120px] pt-5 md:pt-[30px] xl:pt-[80px] min-h-fit h-[70vh] w-svw">
      <img
        src="/pinkLine.png"
        alt=""
        className="object-contain hidden md:block absolute top-0 md:-top-6 w-full max-h-[60px] md:max-h-none"
      />

      <section className="bg-[#FF388E] relative py-[60px] sm:py-[70px] md:py-[80px] w-svw min-h-[78%] z-20 px-[5vw] pt-[6vh] mb-[30px] md:mb-[80px] lg:mb-[150px]">
        <div className="flex px-[5vw] justify-start items-center relative">
          <img
            src="/About/triangle.png"
            alt=""
            className="max-w-[60px] sm:max-w-[70px] md:max-w-[80px]"
          />
          <img
            src="/About/pencil.png"
            alt=""
            className="absolute top-0 md:-top-[150%] right-[5vw] max-h-[120px] sm:max-h-[160px] md:max-h-[200px]"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-[5vw] mb-[60px] sm:mb-[70px] md:mb-[80px]">
          <div className="px-6 sm:px-10 py-10 md:p-16 md:w-[45%] text-[#FFF8E7]">
            <h3 className="text-[24px] sm:text-[28px] md:text-[32px] text-white text-start font-bold edu">
              More About Us
            </h3>
            <p className="text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-tight">
              Thoughtful Clothing for Your Little Ones
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] pr-[3vw] mt-4">
              Create fun and stylish clothing ideas for kids that are ready for
              playtime! Think about colorful patterns and comfy materials that
              let kids move freely while looking great. Make sure to include
              cool accessories that kids will love, like funky hats and playful
              backpacks!
            </p>
            <button className="mt-6 sm:mt-[20px] px-4 py-2 text-[#FF388E] rounded-full bg-[#FFE7C0] border border-[#EEA992] font-bold tommy text-[10px] sm:text-[10.1px] flex gap-2 justify-center items-center">
              Shop Now
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.91699 12.2082L11.5837 5.5415M11.5837 5.5415H6.25033M11.5837 5.5415V10.8748"
                  stroke="#FF388E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="md:w-[55%] relative min-h-[320px] sm:min-h-[400px]">
            <img
              src="/About/child1.png"
              alt=""
              className="absolute bottom-0 left-0 w-[60%] md:w-[50%] lg:w-[40%] rounded-3xl drop-shadow-xl z-20"
            />
            <div className="absolute top-[15%] -translate-y-1/2 left-[28%] -translate-x-1/2 drop-shadow-md hidden md:block">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  fill="#FF388E"
                  stroke="#FFE7C0"
                  strokeWidth="7"
                />
              </svg>
            </div>
            <div className="absolute top-[8%] -translate-y-1/2 left-[32%] -translate-x-1/2 drop-shadow-md hidden md:block">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  fill="#FF388E"
                  stroke="#FFE7C0"
                  strokeWidth="7"
                />
              </svg>
            </div>
            <div className="absolute top-[22%] -translate-y-1/2 left-[24%] -translate-x-1/2 drop-shadow-md hidden md:block">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  fill="#FF388E"
                  stroke="#FFE7C0"
                  strokeWidth="7"
                />
              </svg>
            </div>
            <img
              src="/About/child2.png"
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[60%] md:w-[50%] lg:w-[40%] rounded-3xl drop-shadow-xl z-10"
            />
            <img
              src="/About/child3.png"
              alt=""
              className="absolute top-0 right-0 w-[60%] md:w-[50%] lg:w-[40%] rounded-3xl drop-shadow-xl z-0"
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center text-white text-[18px] sm:text-[20px] md:text-[24px] font-bold tommy text-center">
          <div className="sm:w-[10%] hidden sm:block" />
          <div className="w-full sm:w-[70%] flex flex-col sm:flex-row gap-4 sm:gap-[10%] justify-between items-center">
            <p>Trendy Threads for Kids</p>
            <p>How Long We've Been Making Clothes!</p>
            <p>Kids in Cool Clothes</p>
            <p>All the Fun styles</p>
          </div>
          <div className="sm:w-[15%] hidden sm:flex justify-end">
            <img
              src="/About/triangle.png"
              alt=""
              className="max-w-[60px] md:max-w-[80px] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="w-svw hidden md:block absolute bottom-[7%] lg:bottom-[15%] translate-y-1/2 h-fit">
        <img
          src="/pinkLine.png"
          alt=""
          className="relative z-10 w-full max-h-[50px] sm:max-h-[70px]"
        />
        <img
          src="/yellowLine.png"
          alt=""
          className="absolute top-4 md:top-10 z-0 w-full max-h-[50px] sm:max-h-[70px]"
        />
      </div>
    </section>
  );
}
