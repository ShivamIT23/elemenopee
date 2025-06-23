export default function Latest() {
  return (
    <section className="flex flex-col justify-center items-center relative min-h-[10vh] h-fit px-2 sm:px-4 md:px-0">
      <h3 className="w-full text-center text-[#FF388E] mb-6 sm:mb-10 edu text-2xl sm:text-3xl md:text-[40px] font-bold">
        Latest Styles
      </h3>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:flex md:flex-row mb-10 sm:mb-20 h-fit justify-between md:gap-10 sm:gap-6 w-full max-w-svw">
        <img src="/child1.jpg" alt="" className="w-full md:w-[30%] object-cover rounded-sm latest-img1 max-h-[160px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[280px]" />
        <img src="/child2.jpg" alt="" className="w-full md:w-[30%] object-cover rounded-sm scale-[0.96] md:scale-[0.92] max-h-[160px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[280px]" />
        <img src="/child3.jpg" alt="" className="w-full md:w-[30%] object-cover rounded-sm latest-img2 max-h-[160px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[280px] sm:col-span-2 sm:mx-auto md:col-span-1 md:mx-0" />
      </div>
    </section>
  );
}
