import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const flavors = [
  { name: "Original", image: pringlesOriginal, color: "hsl(0, 100%, 44%)" },
  { name: "Sour Cream", image: pringlesScream, color: "hsl(120, 40%, 40%)" },
  { name: "BBQ", image: pringlesbbq, color: "hsl(20, 50%, 25%)" },
  { name: "Cheddar", image: pringlesCheddar, color: "hsl(30, 100%, 50%)" },
  { name: "Pizza", image: pringlesPizza, color: "hsl(15, 90%, 50%)" },
];

const FlavorPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #222 50%, #1A1A1A 100%)"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
            NOSSOS <span className="text-pringles-yellow">SABORES</span>
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg max-w-xl mx-auto">
            Cada lata é uma nova aventura de sabor
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -16, scale: 1.05 }}
              className="group relative cursor-pointer"
              onClick={() => navigate("/sabores")}
            >
              <motion.div
                className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                style={{ background: `${flavor.color}44` }}
              />
              <div className="relative w-28 md:w-36">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <motion.p
                  className="text-center font-display text-sm text-primary-foreground/80 mt-3 group-hover:text-pringles-yellow transition-colors"
                >
                  {flavor.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/sabores")}
            className="bg-pringles-yellow-gradient text-pringles-dark font-display text-sm px-8 py-3 rounded-full cursor-pointer border-none uppercase tracking-wider"
          >
            Ver todos os sabores →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FlavorPreview;
