import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";

// I kind of like the idea of having the layout be a page prop
// Assume the app layout by default
// But allow a page prop to be defined for specifying a different layout
// This could also be used to override and specify no layout
// This would be useful if fetching HTML to inject into an existing page
// (e.g., how Basecamp uses stimulus)

function NailsApp({ Component, pageProps }): ReactElement {
  const { currentUser, requireAuth } = pageProps;

  const router = useRouter();

  useEffect(() => {
    // I'm not set on this implementation at all
    if (requireAuth && !currentUser) {
      router.push("/login");
    }
  }, [currentUser, requireAuth]);

  return <Component {...pageProps} />;
}

export default NailsApp;
