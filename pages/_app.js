import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../store";

import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    useStore.setState({ router });
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
