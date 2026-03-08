import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Trophy } from "lucide-react";
import pringlesOriginal from "@/assets/pringles-original.png";
import pringlesScream from "@/assets/pringles-sour-cream.png";
import pringlesCheddar from "@/assets/pringles-cheddar.png";
import pringlesbbq from "@/assets/pringles-bbq.png";
import pringlesPizza from "@/assets/pringles-pizza.png";

const bestSellers = [
  { name: "Original", tag: "#1 Mais Vendido", image: pringlesOriginal, color: "hsl(0, 100%, 44%)" },
  { name: "Sour Cream & Onion", tag: "#2 Favorito Global", image: pringlesScream, color: "hsl(120, 40%, 40%)" },
  { name: "Cheddar Cheese", tag: "#3 Top Queijo", image: pringlesCheddar, color: "hsl(30, 100%, 50%)" },
];

const specialFlavors = [
  { name: "BBQ", image: pringlesbbq, color: "hsl(20, 50%, 25%)" },
  { name: "Pizza", image: pringlesPizza, color: "hsl(15, 90%, 50%)" },
];

const FlavorPreview = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #1A1A1A 0%, #222 50%, #1A1A1A 100%)"
    }}>
      {/* Decorative blurs */}
      <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-20">
        <div className="w-full h-full bg-pringles-red" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-pringles-yellow" />
            <span className="font-body text-sm uppercase tracking-[0.3em] text-pringles-yellow">Os mais pedidos</span>
          </motion.div>
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4">
            MAIS <span className="text-pringles-yellow">VENDIDOS</span>
          </h2>
          <p className="text-primary-foreground/50 font-body text-lg max-w-xl mx-auto">
            Os sabores que conquistaram o mundo inteiro
          </p>
        </motion.div>

        {/* Main layout: best sellers + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Best sellers — 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bestSellers.map((flavor, index) => (
              <motion.div
                key={flavor.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={() => navigate("/sabores")}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-3xl overflow-hidden h-[400px] flex flex-col items-center"
                  style={{
                    background: `linear-gradient(180deg, ${flavor.color}20, ${flavor.color}40)`,
                    border: `1px solid ${flavor.color}30`,
                  }}
                >
                  {/* Rank badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: `${flavor.color}`, color: "#fff" }}
                    >
                      {flavor.tag}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center pt-14 px-6">
                    <div
                      className="absolute w-40 h-40 rounded-full blur-[60px] opacity-30"
                      style={{ background: flavor.color }}
                    />
                    <motion.img
                      src={flavor.image}
                      alt={flavor.name}
                      className="h-56 object-contain drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Name */}
                  <div className="p-5 text-center w-full bg-gradient-to-t from-black/30 to-transparent">
                    <h3 className="font-display text-2xl text-primary-foreground group-hover:text-pringles-yellow transition-colors">
                      {flavor.name}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar — Sabores Especiais */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div
              className="rounded-3xl p-6 h-full flex flex-col"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="font-display text-lg text-pringles-yellow mb-1">MAIS SABORES</h3>
              <p className="font-body text-xs text-primary-foreground/40 mb-6">Explore nossa variedade</p>

              <div className="space-y-4 flex-1">
                {specialFlavors.map((flavor, index) => (
                  <motion.div
                    key={flavor.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => navigate("/sabores")}
                    className="group cursor-pointer"
                  >
                    <div
                      className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: `linear-gradient(135deg, ${flavor.color}20, ${flavor.color}35)`,
                        border: `1px solid ${flavor.color}25`,
                      }}
                    >
                      <img
                        src={flavor.image}
                        alt={flavor.name}
                        className="w-14 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div>
                        <h4 className="font-display text-sm text-primary-foreground group-hover:text-pringles-yellow transition-colors">
                          {flavor.name}
                        </h4>
                        <span className="font-body text-xs text-primary-foreground/40">Sabor especial</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/sabores")}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground/60 hover:text-pringles-yellow font-body text-sm py-3 rounded-xl transition-all cursor-pointer border border-primary-foreground/10"
              >
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlavorPreview;
