import Navbar from "@/components/Navbar";
import FlavorShowcase from "@/components/FlavorShowcase";

const Sabores = () => (
  <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
    <Navbar />
    <div className="pt-16">
      <FlavorShowcase />
    </div>
  </div>
);

export default Sabores;
