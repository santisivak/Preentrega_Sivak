import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);

  return <Home nombre={nombre} contador={contador} setContador={setContador} />;
};

export default HomeContainer;
