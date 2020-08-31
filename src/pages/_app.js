import '../styles/index.css'
import NavBar from "../components/shared/navbar";
import Cta from "../components/shared/cta";
import Footer from "../components/shared/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen justify-between">
        <div className="px-5 py-20">
          <Component {...pageProps} />
        </div>
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default MyApp
