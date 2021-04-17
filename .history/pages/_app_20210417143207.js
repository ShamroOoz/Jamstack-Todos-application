import Meta from "../components/Meta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="content-around">
      <Meta />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
