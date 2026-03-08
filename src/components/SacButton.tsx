import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const sacFaqs = [
  { q: "Onde posso comprar Pringles?", a: "Você encontra Pringles nos principais supermercados, lojas de conveniência e também em lojas online!" },
  { q: "Quais sabores estão disponíveis?", a: "Temos Original, Cheddar, Sour Cream & Onion, BBQ, Pizza e muito mais! Confira a aba Sabores." },
  { q: "Pringles contém glúten?", a: "Sim, a maioria dos sabores contém trigo. Consulte a embalagem para informações detalhadas." },
  { q: "Como entrar em contato?", a: "Você pode nos encontrar nas redes sociais na aba Contatos, ou enviar uma mensagem por aqui!" },
  { q: "Qual o prazo de validade?", a: "O prazo de validade está impresso na parte inferior de cada lata. Geralmente é de 12 a 15 meses." },
];

const SacButton = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-80 max-h-[70vh] rounded-2xl shadow-2xl overflow-hidden border border-primary-foreground/10"
            style={{ background: "#1A1A1A" }}
          >
            {/* Header */}
            <div className="bg-pringles-red px-5 py-4">
              <h3 className="font-display text-primary-foreground text-lg">SAC Pringles</h3>
              <p className="font-body text-primary-foreground/70 text-sm">Como podemos ajudar?</p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2 max-h-[50vh] overflow-y-auto">
              {selected === null ? (
                sacFaqs.map((faq, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelected(i)}
                    className="w-full text-left px-4 py-3 rounded-xl font-body text-sm text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3 h-3 text-pringles-yellow shrink-0" />
                    {faq.q}
                  </motion.button>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <p className="font-body text-sm text-pringles-yellow font-semibold">{sacFaqs[selected].q}</p>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{sacFaqs[selected].a}</p>
                  <button
                    onClick={() => setSelected(null)}
                    className="font-body text-xs text-pringles-yellow hover:underline mt-2"
                  >
                    ← Voltar às perguntas
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setOpen(!open); setSelected(null); }}
        className="w-14 h-14 rounded-full bg-pringles-red shadow-lg flex items-center justify-center text-primary-foreground hover:shadow-xl transition-shadow"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default SacButton;
