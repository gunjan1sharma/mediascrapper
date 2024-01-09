import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";
import UpMenu from "./components/UpMenu";
import Particle from "./components/Particle";
import Home from "./pages/HomePage";
import SimpleIntro from "./components/SimpleIntro";

function App() {
  const [color, setColor] = useState<string>("");
  const handleColorChange = (color: string) => {
    setColor(color);
  };

  return (
    <div>
      <UpMenu />
      <SimpleIntro
        tag="FREE TOOL"
        heading="Ultimate Media Scrapper"
        subtitle="Scrap Media Files From Websites"
        btntext="Start Scrapping"
      />
      <ColorContext.Provider
        value={{
          color: color,
          setColor: handleColorChange,
        }}
      >
        <Home />
      </ColorContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
