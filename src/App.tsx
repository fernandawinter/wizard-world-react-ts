import "./App.css";
import Header from "./header";
import Footer from "./footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Spells from "./pages/Spells";

const App = () => {
  return (
    <>
      <div className="App">

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}
export default App;



