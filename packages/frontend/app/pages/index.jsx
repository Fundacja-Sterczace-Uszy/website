import React, { useContext } from "react"
import Head from "next/head"

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"

import Typography from "design-system/components/typography/Typography"
import Button from "design-system/components/button/Button"

import { fetchComingSoon } from "../lib/api"

import { GlobalContext } from "./_app"

const Home = () => {
  const { data, isLoading } = useQuery(["coming-soon"], fetchComingSoon)
  const global = useContext(GlobalContext)

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>{data.seo.metaTitle}</title>
        <meta name="description" content={data.seo.metaDescription} />
      </Head>
      {global.siteName && (
        <Typography variant="bodyTiny">{global.siteName}</Typography>
      )}

      <Typography variant="h1">{data.heading}</Typography>
      <Typography variant="bodyTitle">{data.description}</Typography>

      {data.link && <Button text={data.link.text} href={data.link.url} />}

      <div>
        {global.socialMedia?.facebook && (
          <Button
            variant="text"
            size="small"
            text="Facebook"
            href={global.socialMedia.facebook}
          />
        )}

        {global.socialMedia?.facebook && (
          <Button
            variant="text"
            size="small"
            text="Instagram"
            href={global.socialMedia.instagram}
          />
        )}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["coming-soon"], fetchComingSoon)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
