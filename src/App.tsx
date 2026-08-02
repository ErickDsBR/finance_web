import "./styles/theme.css";
import "./styles/global.css";
import { Nav } from "./components/Navgation/navgation.tsx";
import { Home } from "./pages/home/home.tsx";
export function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
    </>
  );
}
