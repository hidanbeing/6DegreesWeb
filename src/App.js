import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Introduction from "./routes/Introduction";
import Network from "./routes/Network";
import Contact from "./routes/Contact";
import "./css/app.css";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-2590867190158667" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2590867190158667"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/degrees" element={<Details />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/network" element={<Network />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
