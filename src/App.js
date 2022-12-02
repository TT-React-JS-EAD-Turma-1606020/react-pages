import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Contato } from "./pages/Contato";
import { DepartamentoDetalhe } from './pages/DepartamentoDetalhe';
import { Departamentos } from "./pages/Departamentos";
import { Home } from "./pages/Home";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <section>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/departamentos" element={<Departamentos />} />

          <Route path="/contato" element={<Contato />} />

          <Route path="/departamentos/:id/:nome" element={<DepartamentoDetalhe />} />
        </Routes>
      </section>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
