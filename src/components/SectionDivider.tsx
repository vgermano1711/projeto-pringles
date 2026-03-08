import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative h-[3px] w-full overflow-visible my-1">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pringles-yellow to-transparent opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pringles-yellow to-transparent blur-sm opacity-50" />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pringles-yellow shadow-[0_0_12px_4px_rgba(255,215,0,0.6)]"
      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default SectionDivider;