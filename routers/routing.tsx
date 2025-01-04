import React, { useMemo } from "react";
import ProtectedRoute from "./protectedRoute";
import { AuthRoutes } from "./routes";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

const routing = ({ Component, pageProps, router }: AppProps) => {
  const isAuthRequired = AuthRoutes.includes(router.pathname);

  const CurrentPage = useMemo(() => {
    return () => <Component {...pageProps} />;
  }, [Component, pageProps]);

  if (isAuthRequired) {
    return (
      <ProtectedRoute>
        <Layout Component={CurrentPage}></Layout>
      </ProtectedRoute>
    );
  } else {
    return <Component {...pageProps} />;
  }
};

export default React.memo(routing);
