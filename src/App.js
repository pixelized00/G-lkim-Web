import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import EpoksiEsaslı from "./pages/FloorCovering/EpoksiEsaslı";
import PoliüretanEsaslı from "./pages/FloorCovering/PoliüretanEsaslı";
import SporZemin from "./pages/FloorCovering/SporZemin";
import YüzeyHazırlayıcı from "./pages/FloorCovering/YüzeyHazırlayıcı";
import PolyurethaneJoint from "./pages/JointFiller/PolyurethaneJoint";
import PolysulfiteJoint from "./pages/JointFiller/PolysulfiteJoint";
import SiliconeJoint from "./pages/JointFiller/SiliconeJoint";
import BitumenJoint from "./pages/JointFiller/BitumenJoint";
import EpoxyJoint from "./pages/JointFiller/EpoxyJoint";
import Linings from "./pages/JointFiller/Linings";
import ConcreteRepair from "./pages/Concrete/ConcreteRepair";
import ConcreteCuring from "./pages/Concrete/ConcreteCuring";
import ConcreteAdmixture from "./pages/Concrete/ConcreteAdmixture";
import InjectionResins from "./pages/InjectionResins/InjectionResins";
import PolyurethaneInsulation from "./pages/Waterproofing/PolyurethaneInsulation";
import TarInsulation from "./pages/Waterproofing/TarInsulation";
import WaterOilMaterials from "./pages/WaterOilMaterials/WaterOilMaterials";
import AuxiliaryProducts from "./pages/AuxiliaryProducts/AuxiliaryProducts";
import Polycarboxylate from "./pages/Polycarboxylate/Polycarboxylate";
import ProtectivePaints from "./pages/ProtectivePaint/ProtectivePaints";
import RoadMarkingPaints from "./pages/ProtectivePaint/RoadMarkingPaints";
import Plastics from "./pages/Plastics/Plastics";
import Chemicals from "./pages/Chemicals/Chemicals";
import Addtional from "./pages/Additional/Additional";
import Recyled from "./pages/Polymer/Recyled";
import Grade from "./pages/Polymer/Grade";
import Polyolefin from "./pages/Polymer/Polyolefin";
import Engineering from "./pages/Polymer/Engineering";
import Polyethylene from "./pages/Polymer/Polyethylene";
import Polystyrene from "./pages/Polymer/Polystyrene";
import Polyvinyl from "./pages/Polymer/Polyvinyl";
import Polypropylene from "./pages/Polymer/Polypropylene";
import PolymerPolyethylene from "./pages/Polymer/PolymerPolyethylene";
import ChemicalsProducts from "./pages/Chemicals/ChemicalsProducts";
import ChemicalsOild from "./pages/Chemicals/ChemicalsOild";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route
          path="/epoksiesaslızeminkaplamamalzemeleri"
          element={<EpoksiEsaslı />}
        />
        <Route
          path="/poliuretanesaslızeminkaplamamalzemeleri"
          element={<PoliüretanEsaslı />}
        />
        <Route
          path="/sporsahazeminkaplamamalzemeleri"
          element={<SporZemin />}
        />
        <Route
          path="/yuzeyhazırlayıcıastarlar"
          element={<YüzeyHazırlayıcı />}
        />
        {/* {JointFiller Start} */}
        <Route
          path="/poliuretanesaslıderzdolgumacunları"
          element={<PolyurethaneJoint />}
        />
        <Route
          path="/polisulfitesaslıderzdolgumacunları"
          element={<PolysulfiteJoint />}
        />
        <Route
          path="/silikonesaslıderzdolgumacunları"
          element={<SiliconeJoint />}
        />
        <Route
          path="/bitumkauçukesaslıderzdolgumalzemeleri"
          element={<BitumenJoint />}
        />
        <Route
          path="/epoksiesaslıderzdolgumacunları"
          element={<EpoxyJoint />}
        />
        <Route path="/astarlar" element={<Linings />} />
        {/* {JointFiller End} */}

        {/* Concrete Start */}
        <Route path="/betontamirmalzemeleri" element={<ConcreteRepair />} />
        <Route path="/betonkurmalzemeleri" element={<ConcreteCuring />} />
        <Route path="/betonkatkımalzemeleri" element={<ConcreteAdmixture />} />

        {/* Concrete End */}

        {/* ProtectivePaint Start */}
        <Route path="/koruyucuboyalar" element={<ProtectivePaints />} />
        <Route path="/yolçizgiboyaları" element={<RoadMarkingPaints />} />
        {/* ProtectivePaint End */}

        {/* InjectionResins Start */}
        <Route path="/enjeksiyonreçineleri" element={<InjectionResins />} />
        {/* InjectionResins End */}

        {/* Waterproofing Start */}
        <Route
          path="/poliüretanesaslıizolasyonmalzemeleri"
          element={<PolyurethaneInsulation />}
        />
        <Route
          path="/katrankatkılıpoliüretanesaslıizolasyonmalzemeleri"
          element={<TarInsulation />}
        />

        {/* Waterproofing End */}

        {/* WaterOilMaterials Start */}
        <Route path="/suveyagiticimalzemeler" element={<WaterOilMaterials />} />
        {/* WaterOilMaterials End */}

        {/* AuxiliaryProducts Start */}
        <Route path="/yardımcıurunler" element={<AuxiliaryProducts />} />
        {/* AuxiliaryProducts End */}

        {/* Polycarboxylate Start */}
        <Route path="/polikarboksilat" element={<Polycarboxylate />} />
        {/* Polycarboxylate End */}
        <Route path="/plastik" element={<Plastics />} />
        <Route path="/kimyasal" element={<Chemicals />} />
        <Route path="/ekolarak" element={<Addtional />} />
        <Route path="/geridonusturulmus" element={<Recyled />} />
        <Route path="/kapalısebeke" element={<Grade />} />
        <Route path="/poliolefin" element={<Polyolefin />} />
        <Route path="/muhendislikplastigi" element={<Engineering />} />
        <Route path="/polietilen" element={<Polyethylene />} />
        <Route path="/polistiren" element={<Polystyrene />} />
        <Route path="/polivinil" element={<Polyvinyl />} />
        <Route path="/polipropilen" element={<Polypropylene />} />
        <Route path="/polimerpolietilen" element={<PolymerPolyethylene />} />
        <Route path="/kimyasalurunler" element={<ChemicalsProducts />} />
        <Route path="/petrolsahasikimyasallari" element={<ChemicalsOild />} />
      </Routes>
      <Footer />
    </Router>
  );
}
