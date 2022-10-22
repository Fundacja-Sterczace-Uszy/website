import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "@emotion/react"

import { fetchAPI } from "../lib/api"
import theme from "../../../design-system/components/theme/theme"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head></Head>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalContext.Provider value={global.attributes}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      seo: { populate: "*" },
      link: { populate: "*" },
    },
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data.attributes } }
}

export default MyApp
