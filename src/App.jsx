import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const [nombre, setNombre] = useState("Santi");

  const saludo = "Hola, espero que tengas un buen día";

  return (
    <div>
      <Navbar />
      <button onClick={() => setNombre("Ruben")}>Cambiar nombre</button>
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
