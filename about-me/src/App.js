import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Inicio from '../src/paginas/Inicio'
import SobreMin from '../src/paginas/SobreMin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobreMin" element={<SobreMin />}/>
        <Route path="*" element={<div>Page Not found</div>}/>
      </Routes>
    </BrowserRouter>
  );

  
}

export default App;
