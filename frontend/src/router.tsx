import { Route, Routes } from "react-router-dom";
import { Entrega } from "./pages/Entrega";
import {Home} from "./pages/Home";

export function Router() {
  return (
    <Routes>
  
        <Route path="/" element={<Home />} />
 
        <Route path="/entrega" element={<Entrega />} />
    
    </Routes>
  );
}
