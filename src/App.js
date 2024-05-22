import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import IntroductionPage from "./routes/IntroductionPage";
import Network from "./routes/Network";
import Contact from "./routes/Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/degrees" element={<Details />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/network" element={<Network />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
