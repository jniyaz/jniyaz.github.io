import Router from 'next/router';
import Head from 'next/head';
import NavBar from "../components/shared/navbar";
// import Cta from "../components/shared/cta";
import Footer from "../components/shared/footer";
import NProgress from 'nprogress';
import '../styles/index.css';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChnageStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChnageComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChnageError triggered');
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <div className="px-5 py-20">
          <Component {...pageProps} />
        </div>
        {/* <Cta /> */}
        <Footer />
      </div>
    </>
  );
}

export default (MyApp);
