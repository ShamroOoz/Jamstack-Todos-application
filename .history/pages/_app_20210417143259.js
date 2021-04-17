import Meta from "../components/Meta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-10">
      <Meta />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
