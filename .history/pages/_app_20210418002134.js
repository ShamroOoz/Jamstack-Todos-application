import Meta from "../components/Meta";
import "../styles/globals.css";
import { ProvideTodo } from "../Context/Globalcontext";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
