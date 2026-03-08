import Navbar from "@/components/Navbar";
import HistoriaSection from "@/components/HistoriaSection";

const Historia = () => (
  <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
    <Navbar />
    <div className="pt-16">
      <HistoriaSection />
    </div>
  </div>
);

export default Historia;
