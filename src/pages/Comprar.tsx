import Navbar from "@/components/Navbar";
import ComprarSection from "@/components/ComprarSection";

const Comprar = () => (
  <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
    <Navbar />
    <div className="pt-16">
      <ComprarSection />
    </div>
  </div>
);

export default Comprar;
