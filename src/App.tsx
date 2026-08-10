//! global styles
import "./styles/theme.css";
import "./styles/global.css";
//! components
import { Nav } from "./components/Navgation/navgation.tsx";
//! pages
import { Sobre } from "./pages/sobre/sobre.tsx";
import { Home } from "./pages/home/home.tsx";
//! react
import { useState } from "react";


export function App() {
  const [screen, setScreen] = useState("Home");
  
  function RenderScreen() {
    if (screen === "Home") return <Home />;
    if (screen === "Sobre") return <Sobre />;
  }
  return (
    <>
      <Nav OnChangeScreen={setScreen}></Nav>
      <div>{RenderScreen()}</div>
    </>
  );
}
