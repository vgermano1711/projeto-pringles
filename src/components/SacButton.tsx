import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const sacFaqs = [
  { q: "Onde posso comprar Pringles?", a: "Você encontra Pringles nos principais supermercados, lojas de conveniência e também em lojas online!" },
  { q: "Quais sabores estão disponíveis?", a: "Temos Original, Cheddar, Sour Cream & Onion, BBQ, Pizza e muito mais! Confira a aba Sabores." },
  { q: "Pringles contém glúten?", a: "Sim, a maioria dos sabores contém trigo. Consulte a embalagem para informações detalhadas." },
  { q: "Como entrar em contato?", a: "Você pode nos encontrar nas redes sociais na aba Contatos, ou enviar uma mensagem por aqui!" },
  { q: "Qual o prazo de validade?", a: "O prazo de validade está impresso na parte inferior de cada lata. Geralmente é de 12 a 15 meses." },
];

type Message = { role: "user" | "bot"; text: string };

const SacButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Olá! 👋 Sou o assistente Pringles. Escolha uma pergunta abaixo ou digite a sua!" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const addBotReply = (userMsg: string) => {
    const lower = userMsg.toLowerCase();
    const matched = sacFaqs.find((f) =>
      f.q.toLowerCase().split(" ").some((w) => w.length > 3 && lower.includes(w.toLowerCase()))
    );
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: matched
            ? matched.a
            : "Obrigado pela sua mensagem! Nossa equipe vai analisar e responder em breve. Enquanto isso, confira as perguntas frequentes abaixo. 😊",
        },
      ]);
      setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }), 50);
    }, 600);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input.trim() }]);
    addBotReply(input.trim());
    setInput("");
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }), 50);
  };

  const handleFaq = (faq: (typeof sacFaqs)[0]) => {
    setMessages((prev) => [...prev, { role: "user", text: faq.q }, { role: "bot", text: faq.a }]);
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }), 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden border border-primary-foreground/10 flex flex-col"
            style={{ background: "#1A1A1A", maxHeight: "75vh" }}
          >
            {/* Header */}
            <div className="bg-pringles-red px-5 py-4 shrink-0">
              <h3 className="font-display text-primary-foreground text-lg">SAC Pringles</h3>
              <p className="font-body text-primary-foreground/70 text-sm">Como podemos ajudar?</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-body text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-pringles-red text-primary-foreground rounded-br-md"
                        : "bg-primary-foreground/10 text-primary-foreground/80 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ chips */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto shrink-0 border-t border-primary-foreground/5">
              {sacFaqs.slice(0, 3).map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleFaq(faq)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/60 font-body text-xs hover:bg-pringles-red/30 hover:text-primary-foreground transition-colors"
                >
                  {faq.q.length > 25 ? faq.q.slice(0, 25) + "…" : faq.q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-primary-foreground/10 shrink-0 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-primary-foreground/10 rounded-xl px-4 py-2.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 outline-none focus:ring-1 focus:ring-pringles-red"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-xl bg-pringles-red flex items-center justify-center text-primary-foreground hover:bg-pringles-red/80 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-pringles-red shadow-lg flex items-center justify-center text-primary-foreground hover:shadow-xl transition-shadow"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default SacButton;
