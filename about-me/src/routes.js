import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Inicio from './paginas/Inicio'
import SobreMin from './paginas/SobreMin'
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobreMin" element={<SobreMin />}/>
        <Route path="*" element={<div>Page Not found</div>}/>
      </Routes>
    </BrowserRouter>
  );

  
}

export default AppRoutes;
