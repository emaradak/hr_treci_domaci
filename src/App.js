import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projekti from "./stranice/Projekti";
import About from "./stranice/About";

function App() {
  return (
    <>
        <BrowserRouter>
            <Navigacija />
            <Routes>
                <Route path="/" element={<Projekti />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
