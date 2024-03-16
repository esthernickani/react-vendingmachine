import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Sardine from "./Sardine";
import Sprite from "./Sprite";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/sprite" element={<Sprite/>} />
          <Route path="/sardine" element={<Sardine/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/" element={<VendingMachine />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
