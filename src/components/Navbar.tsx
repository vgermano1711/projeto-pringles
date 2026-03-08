import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import pringlesLogo from "@/assets/pringles-logo.png";

const navItems = [
  { label: "Sabores", href: "#sabores" },
  { label: "Produtos", href: "#produtos" },
  { label: "História", href: "#historia" },
  { label: "Comprar", href: "#comprar" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-primary-foreground/10"
      style={{ background: "hsl(var(--pringles-dark) / 0.9)" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <img src={pringlesLogo} alt="Pringles" className="h-12 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ y: -2 }}
                className={`font-body text-sm uppercase tracking-wider transition-colors cursor-pointer relative ${
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
              </motion.a>
            );
          })}
        </div>
        <motion.a
          href="#comprar"
          onClick={(e) => handleClick(e, "#comprar")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pringles-yellow-gradient text-pringles-dark font-display text-sm px-6 py-2 rounded-full cursor-pointer"
        >
          COMPRAR
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
