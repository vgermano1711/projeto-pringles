import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative h-px w-full overflow-visible">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pringles-yellow/40 to-transparent" />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pringles-yellow/60"
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default SectionDivider;