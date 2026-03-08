import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Instagram, Facebook, Twitter, Youtube, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/pringles/",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    followers: "2.5M seguidores",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Pringles/",
    icon: Facebook,
    color: "from-blue-600 to-blue-800",
    followers: "30M seguidores",
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/Pringles",
    icon: Twitter,
    color: "from-gray-700 to-gray-900",
    followers: "1.2M seguidores",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/pringles",
    icon: Youtube,
    color: "from-red-600 to-red-800",
    followers: "500K inscritos",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@pringles",
    icon: ExternalLink,
    color: "from-gray-900 to-gray-700",
    followers: "3M seguidores",
  },
];

const Contatos = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--pringles-dark))" }}>
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
              NOSSAS <span className="text-pringles-yellow">REDES</span>
            </h1>
            <p className="font-body text-primary-foreground/60 text-lg max-w-xl mx-auto">
              Siga a Pringles nas redes sociais e fique por dentro das novidades, promoções e muito mais!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                    <social.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary-foreground mb-1">{social.name}</h3>
                    <p className="font-body text-primary-foreground/70 text-sm">{social.followers}</p>
                  </div>
                  <span className="font-body text-sm text-primary-foreground/80 flex items-center gap-1 group-hover:text-pringles-yellow transition-colors">
                    Seguir <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatos;
