import { motion } from "framer-motion";
import Products from "../components/Home/Products";
import Category from "../components/Home/Category";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Shop() {
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
      <Products title="Popular Products" />
      <Category />
      <Products title="Latest Products" />
    </motion.main>
  );
}
