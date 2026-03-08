import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import pringlesLogo from "@/assets/pringles-logo.png";

const navItems = [
  { label: "Sabores", path: "/sabores" },
  { label: "Produtos", path: "/produtos" },
  { label: "História", path: "/historia" },
  { label: "Comprar", path: "/comprar" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-primary-foreground/10"
      style={{ background: "hsl(var(--pringles-dark) / 0.9)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <img
          src={pringlesLogo}
          alt="Pringles"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.button
                key={item.label}
                onClick={() => navigate(item.path)}
                whileHover={{ y: -2 }}
                className={`font-body text-sm uppercase tracking-wider transition-colors cursor-pointer relative bg-transparent border-none ${
                  isActive ? "text-pringles-yellow" : "text-primary-foreground/70 hover:text-pringles-yellow"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pringles-yellow rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
        <motion.button
          onClick={() => navigate("/comprar")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pringles-yellow-gradient text-pringles-dark font-display text-sm px-6 py-2 rounded-full cursor-pointer border-none"
        >
          COMPRAR
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
