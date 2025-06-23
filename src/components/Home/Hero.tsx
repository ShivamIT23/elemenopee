export default function Hero() {
  return (
    <>
      <section className="w-full flex justify-center relative overflow-x-clip">
        <img src="/main2.png" alt="Main" className="max-w-[95vw] sm:max-w-[80vw] md:max-w-[70%]" />
        <img
          src="/bee.png"
          alt=""
          className="absolute top-[35%] sm:top-[40%] md:top-[50%] -translate-y-1/2 h-6 sm:h-8 md:h-16 right-[10%] sm:right-[15%] md:right-[20%] -translate-x-1/2"
        />
      </section>
      <section className="w-full flex flex-col mt-6 sm:mt-8 md:mt-[30px] text-[#B4929E] text-xs sm:text-sm font-medium items-center justify-center relative px-2">
        <p>Where every clothing sparks imagination allowing</p>
        <p>your child to express themselves!</p>
        <button className="mt-4 sm:mt-5 p-2 sm:p-3 bg-[#FF388E] rounded-full text-white font-bold text-[10px] sm:text-xs flex gap-2 justify-center items-center">
          Shop now
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.91699 12.2082L11.5837 5.5415M11.5837 5.5415H6.25033M11.5837 5.5415V10.8748"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
      <section className="my-6 sm:my-8 md:my-[30px] gap-6 sm:gap-8 md:gap-10 font-bold flex flex-col justify-center items-center edu relative px-2">
        <section className="flex flex-col md:flex-row justify-center items-center w-full gap-2 md:gap-0">
          <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center flex-wrap">
            <span className="text-xl sm:text-2xl md:text-[32px] text-[#FD6D13]">Dress</span>
            <span className="flex gap-2 sm:gap-4 md:gap-5 text-xl sm:text-2xl md:text-[34px] text-[#FF388E]">
              Your Little
            </span>
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#FD6D13] p-1 sm:p-2 flex justify-center items-center">
              <img src="/giraffe.png" alt="giraffe" />
            </span>
          </div>
          <div className="flex text-xl sm:text-2xl md:text-[32px] gap-3 sm:gap-4 md:gap-6 justify-center items-center relative flex-wrap">
            <div></div>
            <span className="flex gap-2 sm:gap-4 md:gap-5 text-[#00B4DD] relative">
              Ones in
              <img
                src="/img2.png"
                alt=""
                className="w-3 sm:w-4 absolute -top-1 -left-3 sm:-left-4"
              />
            </span>
            <span className="relative">
              <span className="absolute -top-1/2 text-[#FD6D13] translate-y-[40%] sm:text-lg md:text-[32px]">
                Colorful
              </span>
              <svg
                width="80"
                height="28"
                viewBox="0 0 107 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 sm:w-[80px] md:w-[107px] h-7 sm:h-8 md:h-[37px]"
              >
                <path
                  d="M89.0107 2.46582C91.2702 2.29959 93.5344 2.72551 95.5791 3.70117C97.2987 4.52176 98.8175 5.70953 100.028 7.18066L102.663 10.3818C104.012 12.0211 104.75 14.0791 104.75 16.2021C104.75 18.9436 103.521 21.5409 101.402 23.2803L98.749 25.458C96.1003 27.6322 92.8373 28.9237 89.418 29.1504L14.5488 34.1123C12.8753 34.2232 11.2 33.928 9.66504 33.252C7.89685 32.4731 6.38028 31.2177 5.28516 29.626L5.01172 29.2295C3.15449 26.5297 2.47117 23.1919 3.11816 19.9795L3.30469 19.0527C4.17641 14.7246 7.03629 11.0602 11.0225 9.16211C12.5923 8.41462 14.2875 7.9655 16.0215 7.83789L89.0107 2.46582Z"
                  fill="#FFCA24"
                  stroke="#FFCA24"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <img
              src="/pencilSpread.png"
              alt="Pencil"
              className="hidden lg:block absolute -top-1/2 -translate-y-1/2 -right-1/2 translate-x-1/2 w-[18vw] min-w-[60px] max-w-[120px]"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center relative w-full">
          <div className="flex text-xl sm:text-2xl md:text-[32px] gap-3 sm:gap-4 md:gap-6 justify-center items-center relative flex-wrap">
            <div></div>
            <span className="relative">
              <span className="absolute text-center right-1/2 translate-x-1/2 bottom-[20%] text-[#FF388E] -translate-y-[50%] sm:text-lg md:text-[32px]">
                Confidence!
              </span>
              <svg
                width="180"
                height="24"
                viewBox="0 0 242 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-36 sm:w-[180px] md:w-[242px] h-6 sm:h-8 md:h-[34px]"
              >
                <path
                  d="M5 29L90.4625 4.31083C91.5006 4.01093 92.2106 5.34243 91.3831 6.03734L72.1419 22.1956C71.3256 22.881 72.0051 24.1974 73.0366 23.9292L131.384 8.75538C132.391 8.49345 133.079 9.75268 132.314 10.4583L119.087 22.6575C118.347 23.3404 118.967 24.5659 119.956 24.3743L176.467 13.4231L206.6 9.21978L237 6.5"
                  stroke="#FFCA24"
                  strokeWidth="8.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <img
            src="/pop.png"
            alt=""
            className="scale-x-[-1] absolute -right-[20%] sm:-right-[30%] md:-right-[38%] translate-x-1/2 w-6 sm:w-8 md:w-10 -top-[40%] sm:-top-[50%]"
          />
          <div className="flex flex-col items-center mt-6 md:mt-8 lg:hidden">
            <p className="flex text-[#F17052] text-lg md:text-[27px] relative">
              952
              <img
                src="/pop.png"
                alt=""
                className=" absolute right-[30%] translate-x-1/2 w-4 md:w-6 -top-1/2"
              />
            </p>
            <p className="text-base md:text-[21px] text-[#8E5677]">Families Prefer Us!</p>
          </div>
        </section>
        <section className="absolute top-1/2 edu -translate-y-1/2 left-[8%] -translate-x-1/2 hidden lg:block">
          <p className="flex text-[#F17052] text-lg md:text-[27px] relative">
            952
            <img
              src="/pop.png"
              alt=""
              className=" absolute right-[30%] translate-x-1/2 w-4 md:w-6 -top-1/2"
            />
          </p>
          <p className="text-base md:text-[21px] text-[#8E5677]">Families Prefer Us!</p>
        </section>
        {/* Paint spreads only on lg+ and placed more naturally */}
        <img
          src="/paintSpread.png"
          alt=""
          className="hidden lg:block absolute w-24 left-[18%] top-[60%] -translate-y-1/2 -rotate-6"
        />
        <img
          src="/paintSpread.png"
          alt=""
          className="hidden lg:block absolute rotate-[220deg] w-20 right-[12%] top-[30%] -translate-y-1/2"
        />
      </section>
      <img src="/pinkLine.png" alt="" className="object-contain w-full" />
    </>
  );
}
