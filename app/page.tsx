import HomeSection from "../components/HomeSection";
import ComoPodeAjudar from "../components/ComoPodeAjudar";
import Sobre from "../components/Sobre";
import Depoimentos from "../components/Depoimentos";
import PerguntasFre from "../components/PerguntasFre";
import Consultorio from "../components/Consultorio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ComoPodeAjudar />
      <Sobre />
      <Depoimentos />
      <PerguntasFre />
      <Consultorio />
      <Footer />
    </div>
  );
}
