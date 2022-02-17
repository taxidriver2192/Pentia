//  import global  css
import "../styles/globals.css";
// import layout  components form components folder
import Layout from "../Components/Layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
