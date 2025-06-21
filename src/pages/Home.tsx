import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import Latest from "../components/Home/Latest";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Home() {
  return (
    <motion.main
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="min-h-screen h-fit tommy relative w-svw"
    >
      <Hero />
      <Latest />
    </motion.main>
  );
}
