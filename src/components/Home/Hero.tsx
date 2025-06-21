export default function Hero() {
  return (
    <>
      <section className="w-svw flex justify-center relative">
        <img src="/main2.png" alt="Main" className="max-w-[70%]" />
        <img
          src="/bee.png"
          alt=""
          className="absolute top-[40%] md:top-[50%] -translate-y-1/2 h-8 md:h-16 right-[20%] -translate-x-1/2"
        />
      </section>
      <section className="w-svw flex flex-col mt-[30px] text-[#B4929E] text-sm font-medium items-center justify-center relative">
        <p>Where every clothing sparks imagination allowing</p>
        <p>your child to express themselves!</p>
        <button className="mt-[20px] p-2 bg-[#FF388E] rounded-full text-white font-bold text-[10px] flex gap-2 justify-center items-center">
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
      <section className="my-[30px] gap-10 font-bold flex flex-col justify-center items-center edu relative">
        <section className="flex justify-center items-center">
          <div className="flex gap-8 justify-center items-center">
            <span className="text-[32px] text-[#FD6D13]">Dress</span>
            <span className=" flex gap-5 text-[34px] text-[#FF388E]">
              Your Little
            </span>
            <span className="w-8 h-8 rounded-full bg-[#FD6D13] p-2 flex justify-center items-center">
              <img src="/giraffe.png" alt="giraffe" />
            </span>
          </div>
          <div className="flex text-[32px] gap-6 justify-center items-center relative">
            <div></div>
            <span className="flex gap-5 text-[#00B4DD] relative">
              Ones in
              <img
                src="/img2.png"
                alt=""
                className="w-4 absolute -top-1 -left-4"
              />
            </span>
            <span className="relative">
              <span className="absolute -bottom-1/2 text-[#FD6D13] -translate-y-[40%]">
                Colorful
              </span>
              <svg
                width="107"
                height="37"
                viewBox="0 0 107 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              className="absolute -top-1/2 -translate-y-1/2 -right-1/2 translate-x-1/2 w-[30%]"
            />
          </div>
        </section>
        <section className="flex justify-center items-center relative">
          <div className="flex text-[32px] gap-6 justify-center items-center relative">
            <div></div>
            <span className="relative">
              <span className="absolute text-center right-1/2 translate-x-1/2 -bottom-1/2 text-[#FF388E] -translate-y-[60%]">
                Confidence!
              </span>
              <svg
                width="242"
                height="34"
                viewBox="0 0 242 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            className="scale-x-[-1] absolute -right-[38%] translate-x-1/2 w-10 -top-[50%]"
          />
        </section>
        <section className="absolute top-1/2 edu -translate-y-1/2 left-[8%] -translate-x-1/2">
          <p className="flex text-[#F17052] text-[27px] relative">
            952
            <img
              src="/pop.png"
              alt=""
              className=" absolute right-[30%] translate-x-1/2 w-6 -top-1/2"
            />
          </p>
          <p className="text-[21px] text-[#8E5677]">Families Prefer Us!</p>
        </section>
        <img
          src="/paintSpread.png"
          alt=""
          className="absolute w-24 left-[27%] translate-x-1/2"
        />
        <img
          src="/paintSpread.png"
          alt=""
          className="absolute rotate-[230deg] w-24 right-[10%] -translate-x-1/2"
        />
      </section>
      <img src="/pinkLine.png" alt="" className="object-contain" />
    </>
  );
}
