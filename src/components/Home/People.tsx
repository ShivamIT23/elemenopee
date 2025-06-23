export default function People() {
  return (
    <section className="flex flex-col justify-center items-center relative min-h-[50vh] h-fit my-[60px] sm:my-[80px] md:my-[120px] px-2 sm:px-4 md:px-0">
      <h3 className="w-full text-center text-[#FF388E] mb-6 sm:mb-8 md:mb-10 edu text-2xl sm:text-3xl md:text-[40px] font-bold">
        What People say about us
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full max-w-5xl">
        <Card
          imgSrc="/people/img1.png"
          name="Aarav Vashisth"
          review="Collection of kids' clothing is stylish and comfortable, perfect for playtime and adventures!"
        />
        <Card
          imgSrc="/people/img2.png"
          name="Anaya Kapoor"
          review="As a mother, I must say that this collection of children's clothing is both fashionable and cozy, making it ideal for all their playful adventures!"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-[50px] gap-6 md:gap-10 w-full max-w-5xl">
        <Card
          imgSrc="/people/img3.png"
          name="Ankita Roy"
          review="Our range of children's clothing offers a variety of stylish and comfortable options, ideal for both playtime and exciting adventures!"
        />
        <Card
          imgSrc="/people/img4.png"
          name="Jason Tamang"
          review="Our range of children's clothing offers a variety of stylish and comfortable options, ideal for both playtime and exciting adventures!"
        />
      </div>
      <img
        src="/planet.png"
        alt="Planet"
        className="hidden md:block absolute left-[13%] translate-x-1/2 -translate-y-1/2 -top-[0] w-24 md:w-40"
      />
    </section>
  );
}

function Card({
  imgSrc,
  name,
  review,
}: {
  imgSrc: string;
  name: string;
  review: string;
}) {
  return (
    <div className="people_card flex flex-col sm:flex-row items-center h-auto sm:h-[260px] md:h-[300px] p-3 pb-10 sm:p-5 gap-3 sm:gap-5 relative w-full max-w-xs sm:max-w-md md:max-w-[600px] hover:drop-shadow-lg transition-all duration-500 hover:scale-105 group bg-white rounded-xl">
      <div className="flex-shrink-0">
        <img src={imgSrc} alt="People" className="max-h-[120px] sm:max-h-[186px] w-auto object-contain rounded-full" />
      </div>
      <div className="flex-1 w-full">
        <p className="tommy text-base sm:text-lg md:text-xl group-hover:text-xl md:group-hover:text-2xl text-[#710A85] group-hover:font-bold transition-all duration-300 font-medium text-center sm:text-left">{name}</p>
        <p className="text-start text-xs sm:text-sm md:text-base text-[#454444] font-normal mt-1">{review}</p>
      </div>
      <img src="/people/pencil.png" alt="" className="absolute bottom-2 right-2 sm:bottom-4 sm:right-5 max-h-[40px] sm:max-h-[60px] md:max-h-[80px]" />
    </div>
  );
}
