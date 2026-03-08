import Navbar from "@/components/Navbar";
import ProductExperience from "@/components/ProductExperience";

const Produtos = () => (
  <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
    <Navbar />
    <div className="pt-16">
      <ProductExperience />
    </div>
  </div>
);

export default Produtos;
