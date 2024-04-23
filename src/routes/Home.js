import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
function Home() {
  return (
    <>
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-2590867190158667" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
