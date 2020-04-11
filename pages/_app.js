import "bootstrap/dist/css/bootstrap.min.css";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NailsApp({ Component, pageProps }) {
  const { currentUser, requireAuth } = pageProps;

  const router = useRouter();

  useEffect(() => {
    if (requireAuth && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, requireAuth]);

  return <Component {...pageProps} />;
}
