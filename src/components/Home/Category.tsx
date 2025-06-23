export default function Category() {
  return (
    <section className="flex flex-col justify-center items-center relative min-h-[50vh] h-fit my-[40px] px-[3vw] sm:my-[60px]">
      <h3 className="w-full text-center text-[#FF388E] mb-6 sm:mb-10 edu text-2xl sm:text-3xl md:text-[40px] font-bold">Categories</h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 w-full max-w-6xl">
        <img src="/category/img1.png" alt="category1" className="w-full sm:w-1/2 max-w-[540px] drop-shadow-sm hover:drop-shadow-xl transition-all duration-500 hover:scale-105" />
        <img src="/category/img2.png" alt="category2" className="w-full sm:w-1/2 max-w-[540px] drop-shadow-sm hover:drop-shadow-xl transition-all duration-500 hover:scale-105" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-[50px] gap-6 sm:gap-10 w-full max-w-6xl">
        <img src="/category/img3.png" alt="category3" className="w-full sm:w-1/2 max-w-[540px] drop-shadow-sm hover:drop-shadow-xl transition-all duration-500 hover:scale-105" />
        <img src="/category/img4.png" alt="category4" className="w-full sm:w-1/2 max-w-[540px] drop-shadow-sm hover:drop-shadow-xl transition-all duration-500 hover:scale-105" />
      </div>
      <img src="/planet.png" alt="Planet" className="hidden md:block absolute right-[13%] translate-x-1/2 -translate-y-1/2 -top-[0] w-24 md:w-40" />
    </section>
  );
}
