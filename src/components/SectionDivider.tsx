import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative w-full flex items-center justify-center py-4 overflow-hidden">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent"
    />
  </div>
);

export default SectionDivider;
