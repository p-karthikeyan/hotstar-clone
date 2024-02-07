import Footer from "./components/Footer";
import GenereList from "./components/GenereList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="z-[90]">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenereList/>
      <Footer/>
    </div>
  );
}

export default App;
