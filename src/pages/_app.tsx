/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { OpenAPIProvider } from "react-openapi-client";

import customTheme from "../lib/styles/customTheme";
import defaultSEOConfig from "../../next-seo.config";
import "../lib/styles/globals.css";
import { ToastProvider } from "react-toast-notifications";
import Layout from "lib/layout";
import { UserProvider } from "lib/Utils/MainContext";
import Cookies from "js-cookie";
import { OpenAPI } from "Services";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  OpenAPI.TOKEN = Cookies.get("token") as string;

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link rel="icon" href="/assets/fav.png" type="image/x-icon" />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      {/* <Layout> */}
      <UserProvider>
        <ToastProvider>
          <NextNProgress color="#191919" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
      </UserProvider>
      {/* </OpenAPIProvider> */}
    </ChakraProvider>
  );
};
export default MyApp;
