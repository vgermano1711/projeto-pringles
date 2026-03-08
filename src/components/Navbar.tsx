import { motion } from "framer-motion";
import pringlesLogo from "@/assets/pringles-logo-clean.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-primary-foreground/10"
      style={{ background: "hsl(var(--pringles-dark) / 0.8)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <img src={pringlesLogo} alt="Pringles" className="h-12 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          {["Sabores", "Produtos", "História", "Comprar"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-primary-foreground/70 hover:text-pringles-yellow font-body text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pringles-yellow-gradient text-pringles-dark font-display text-sm px-6 py-2 rounded-full cursor-pointer"
        >
          COMPRAR
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
