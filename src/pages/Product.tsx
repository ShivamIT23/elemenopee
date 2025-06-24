import { motion } from "framer-motion";
import Products from "../components/Home/Products";
import ProductDetails from "../components/Home/ProductDetails";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Product() {
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
      <ProductDetails />
      <Products title="Similar Products" />
    </motion.main>
  )
}
