import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-fit max-h-[600px] min-h-[30vh] mb-[60px] sm:mb-[80px] md:mb-[120px] flex flex-col items-center w-full px-2 sm:px-4">
      <img src="/pinkLine.png" alt="" className="object-contain w-full" />
      <img src="/main1.png" alt="" className="object-contain w-2/3 sm:w-3/4 md:w-1/2 mx-auto" />
      <div className="w-full text-[#FF388E] text-lg sm:text-xl md:text-2xl font-semibold tommy flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 mt-4">
        <div className="hidden md:block w-[20%]" />
        {/* Navigation links */}
        <nav aria-label="Footer Navigation" className="w-full lg:w-[70%] flex justify-center">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-12 items-center justify-center w-full">
            <li><Link to="/">Our Products</Link></li>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/">New Arrivals</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </nav>
        <section className="flex justify-center gap-3 sm:gap-6 md:gap-4 w-full lg:w-[20%] mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 relative p-1 sm:p-2 flex justify-center items-center bg-[#FF388E]"
          >
            <img src="/Footer/facebook.png" alt="Facebook" className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 relative p-1 sm:p-2 flex justify-center items-center bg-[#FF388E]"
          >
            <img src="/Footer/insta.png" alt="Instagram" className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain" />
          </a>
        </section>
      </div>
    </footer>
  );
}
