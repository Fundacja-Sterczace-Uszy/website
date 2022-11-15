import App from "next/app"
import { createContext, useState } from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@emotion/react"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query"
import { node, shape } from "prop-types"

import theme from "design-system/theme/theme"

import { fetchAPI } from "../lib/api"

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalContext.Provider value={pageProps.global}>
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: shape({}).isRequired,
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const globalRes = await fetchAPI("/global", {
    populate: {
      seo: { populate: "*" },
      socialMedia: { populate: "*" },
    },
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data.attributes } }
}

export default MyApp
