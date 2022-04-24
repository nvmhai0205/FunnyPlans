import "./App.css";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Client from "./pages/client.module";
import Rank from "./pages/ranking/ranking"

function App() {
    return (
        <BrowserRouter>
            <Client />
        </BrowserRouter>
    );
}

export default App;
