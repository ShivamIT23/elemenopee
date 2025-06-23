export default function Form() {
  return (
    <section className="flex justify-center mb-[70px] mt-[30px] items-center relative min-h-[30vh] h-fit">
      <div className="max-w-[600px] min-h-[30vh] h-fit flex flex-col justify-center items-center gap-y-6">
        <h3 className=" w-svw text-center text-[#FF388E] edu text-[40px] font-bold mb-4">
          Needs Help? Let&apos;s Get in Touch
        </h3>
        <div className="mx-[10%] w-[70%] flex justify-center gap-4">
          <input
            style={{ border: "1px solid #F7BE0E" }}
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-2 w-1/2 font-light placeholder-black text-[12px] rounded-xl"
          />
          <input
            style={{ border: "1px solid #F7BE0E" }}
            name="email"
            type="text"
            placeholder="Email"
            className="p-2 w-1/2 font-light text-black placeholder-black text-[12px] rounded-xl"
          />
        </div>
        <input
          style={{ border: "1px solid #F7BE0E" }}
          name="subject"
          type="text"
          placeholder="Subject"
          className="p-2 mx-[10%] w-[70%] text-black placeholder-black font-light text-[12px] rounded-xl"
        />
        <textarea
          name="message"
          style={{ border: "1px solid #F7BE0E" }}
          placeholder="Message"
          className="p-2 w-[70%] placeholder-black font-light text-[12px] rounded-xl min-h-[120px] resize-none align-top"
        />
      </div>
    </section>
  );
}
