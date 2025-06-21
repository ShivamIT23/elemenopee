
export default function Latest() {
  return (
    <section className="flex flex-col justify-center items-center relative min-h-[10vh] h-fit">
        <h3 className=" w-svw text-center text-[#FF388E] mb-10 edu text-[40px] font-bold">Latest Styles</h3>
        <div className="flex mb-20 h-fit justify-between gap-10 max-h-[250px]">
            <img src="/child1.jpg" alt="" className="w-[30%] object-cover rounded-sm latest-img1" />
            <img src="/child2.jpg" alt="" className="w-[30%] object-cover rounded-sm scale-[0.92]" />
            <img src="/child3.jpg" alt="" className="w-[30%] object-cover rounded-sm latest-img2" />
        </div>
    </section>
  )
}
