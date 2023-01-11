import React from "react"
import { Normalize } from "styled-normalize"

import Head from "next/head"

import HomePage from "../views/HomePage/HomePage"

const Home = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <title>Fundacja Sterczące Uszy</title>
    </Head>
    <Normalize />
    <HomePage />
  </>
)

export default Home
