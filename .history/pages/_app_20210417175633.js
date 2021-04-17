import Meta from "../components/Meta";
import "../styles/globals.css";
import { ProvideTodo } from "../Context/Globalcontext";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideTodo>
      <div className="container mx-auto my-5 max-w-3xl">
        <Meta />
        <Component {...pageProps} />
      </div>
    </ProvideTodo>
  );
}

export default MyApp;
