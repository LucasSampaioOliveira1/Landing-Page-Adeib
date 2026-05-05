import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ComoPodeAjudar from "../components/ComoPodeAjudar";
import Sobre from "../components/Sobre";
import Depoimentos from "../components/Depoimentos";
import PerguntasFre from "../components/PerguntasFre";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <ComoPodeAjudar />
      <Sobre />
      <Depoimentos />
      <PerguntasFre />
      <Footer />
    </div>
  );
}
