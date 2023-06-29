import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <NextNProgress
        color="blue"
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
