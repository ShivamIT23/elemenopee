import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-fit max-h-[600px] min-h-[30vh] mb-[120px] flex flex-col items-center w-svw">
      <img src="/pinkLine.png" alt="" className="object-contain" />
      <img src="/main1.png" alt="" className="object-contain w-1/2" />
      <div className="w-svw text-[#FF388E] text-2xl font-semibold tommy flex justify-evenly ">
        <div className="w-[20%]"></div>
        {/* Navigation links */}
        <nav aria-label="Footer Navigation" className="flex justify-center gap-12 w-[70%]">
          <ul className="flex gap-12">
            <li><Link to="/">Our Products</Link></li>
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/">New Arrivals</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </nav>
        <section className="flex justify-center gap-4 w-[20%]">
        <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-10 h-10 relative p-2 flex justify-center items-center bg-[#FF388E]"
          >
            <img src="/Footer/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full w-10 h-10 relative p-2 flex justify-center items-center bg-[#FF388E]"
          >
            <img src="/Footer/insta.png" alt="Instagram" />
          </a>
        </section>
      </div>
    </footer>
  );
}
