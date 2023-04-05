import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Pokegame from "./Pokegame";
import Poke from "./Poke";

function App() {
    const { id } = useParams();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pokegame />} exact />
                <Route path={"/:id"} element={<Poke />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
