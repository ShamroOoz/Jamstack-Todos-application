import Meta from "../components/Meta";
import "../styles/globals.css";
import { ProvideTodo } from "../Context/Globalcontext";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <div className="container mx-auto my-5 max-w-3xl">
        <Meta />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default MyApp;
