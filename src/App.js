import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header";
import { Contato } from "./pages/Contato";
import { Departamentos } from "./pages/Departamentos";
import { Home } from "./pages/Home";
import './styles.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <section>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/departamentos" element={<Departamentos />} />

            <Route path="/contato" element={<Contato />} />
          </Routes>
        </section>
      </BrowserRouter>

    </div >
  );
}

export default App;
